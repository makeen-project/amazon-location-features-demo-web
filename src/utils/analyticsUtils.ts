import {
	Event,
	PinpointClient,
	PutEventsCommand,
	PutEventsRequest,
	UpdateEndpointCommand
} from "@aws-sdk/client-pinpoint";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

import { appConfig } from "@demo/core/constants";
import { AnalyticsSessionStatus, EventTypeEnum } from "@demo/types/Enums";
import RecordInput from "@demo/types/RecordInput";
import { browserName, fullBrowserVersion, isAndroid, isDesktop, isIOS } from "react-device-detect";

import { getCountryCodeByIp } from "./countryUtil";
import debounce from "./debounce";
import sleep from "./sleep";
import { uuid } from "./uuid";

const {
	ENV: { REGION, IDENTITY_POOL_ID, PINPOINT_REGION, PINPOINT_APPLICATION_ID },
	PERSIST_STORAGE_KEYS: { LOCAL_STORAGE_PREFIX, AMPLIFY_AUTH_DATA, ANALYTICS_ENDPOINT_ID, ANALYTICS_CREDS }
} = appConfig;
const amplifyAuthDataLocalStorageKey = `${LOCAL_STORAGE_PREFIX}${AMPLIFY_AUTH_DATA}`;
const endpointIdKey = `${LOCAL_STORAGE_PREFIX}${ANALYTICS_ENDPOINT_ID}`;
const analyticsCredsKey = `${LOCAL_STORAGE_PREFIX}${ANALYTICS_CREDS}`;

let session: {
	id?: string;
	startTimestamp?: string;
	creationStatus: AnalyticsSessionStatus;
} = { creationStatus: AnalyticsSessionStatus.NOT_CREATED };
let endpointId = localStorage.getItem(endpointIdKey);

if (!endpointId) {
	endpointId = uuid.randomUUID();
	localStorage.setItem(endpointIdKey, endpointId);
}

let pinClient: PinpointClient;
let analyticsCreds = JSON.parse(localStorage.getItem(analyticsCredsKey) || "{}");

const validateAndSetAnalyticsCreds = async (forceRefreshCreds = false) => {
	const isExpired = !analyticsCreds.expiration || new Date() <= new Date(analyticsCreds.expiration);

	if (isExpired || forceRefreshCreds) {
		analyticsCreds = await fromCognitoIdentityPool({
			identityPoolId: IDENTITY_POOL_ID,
			clientConfig: { region: REGION }
		})();
		localStorage.setItem(analyticsCredsKey, JSON.stringify(analyticsCreds));
		pinClient = new PinpointClient({ credentials: analyticsCreds, region: PINPOINT_REGION });
	}

	if (!pinClient) {
		pinClient = new PinpointClient({ credentials: analyticsCreds, region: PINPOINT_REGION });
	}
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sendEvent = async (command: any, shouldRetryAfterFailure = true) => {
	try {
		await validateAndSetAnalyticsCreds();
		await pinClient.send(command);
	} catch (error) {
		console.error("error: ", error);
		if (shouldRetryAfterFailure) {
			// just incase someone tempers with the creds in localstorage
			await validateAndSetAnalyticsCreds(true);
			await sendEvent(command, false);
		} else {
			throw error;
		}
	}
};

const createEndpoint = async () => {
	const country = await getCountryCodeByIp();

	const authLocalStorageKeyString = localStorage.getItem(amplifyAuthDataLocalStorageKey) as string;
	const {
		state: { credentials }
	} = JSON.parse(authLocalStorageKeyString);

	let platformType = "Other";

	if (isAndroid) {
		platformType = "Android";
	} else if (isDesktop) {
		platformType = "Desktop";
	} else if (isIOS) {
		platformType = "IOS";
	}

	const input = {
		ApplicationId: PINPOINT_APPLICATION_ID,
		EndpointId: endpointId!,
		EndpointRequest: {
			Location: {
				Country: country
			},

			Demographic: {
				Model: browserName,
				ModelVersion: fullBrowserVersion,

				Platform: `Web (${platformType})`
			},
			User: {
				UserAttributes: {},
				UserId: `${credentials?.authenticated ? credentials.identityId : `AnonymousUser:${endpointId}`}`
			}
		}
	};

	const putEventsCommand = new UpdateEndpointCommand(input);
	await sendEvent(putEventsCommand);
};

export const record: (input: RecordInput[]) => void = async input => {
	const eventTypes = input.map(x => x.EventType);

	if (!eventTypes.includes(EventTypeEnum.SESSION_START) && !eventTypes.includes(EventTypeEnum.SESSION_STOP)) {
		while (session.creationStatus !== AnalyticsSessionStatus.CREATED) {
			if (session.creationStatus === AnalyticsSessionStatus.NOT_CREATED) {
				await startSession();
			} else {
				// sleep in both NOT_CREATED and IN_PROGRESS case (wait until the session event is created)
				await sleep(2000);
			}
		}
	}

	const eventId = uuid.randomUUID();

	const authLocalStorageKeyString = localStorage.getItem(amplifyAuthDataLocalStorageKey) as string;
	const {
		state: { isUserAwsAccountConnected, credentials }
	} = JSON.parse(authLocalStorageKeyString);

	const events = input.reduce((result, value) => {
		const extValue = {
			...value,
			Attributes: {
				userAWSAccountConnectionStatus: !!isUserAwsAccountConnected ? "Connected" : "Not connected",
				userAuthenticationStatus: !!credentials?.authenticated ? "Authenticated" : "Unauthenticated",
				...(value.Attributes || {})
			},
			Session: {
				Id: session.id,
				StartTimestamp: session.startTimestamp,
				...(value.Session || {})
			},
			Timestamp: new Date().toISOString()
		};

		result[eventId] = extValue;

		return result;
	}, {} as { [key: string]: Event });

	const commandInput: PutEventsRequest = {
		// PutEventsRequest
		ApplicationId: PINPOINT_APPLICATION_ID,
		EventsRequest: {
			// EventsRequest
			BatchItem: {
				[endpointId!]: {
					Endpoint: {},
					Events: events
				}
			}
		}
	};

	const putEventsCommand = new PutEventsCommand(commandInput);
	await sendEvent(putEventsCommand);
};

const startSession = async () => {
	session.creationStatus = AnalyticsSessionStatus.IN_PROGRESS;
	await createEndpoint();
	session.id = uuid.randomUUID();
	session.startTimestamp = new Date().toISOString();
	await record([{ EventType: EventTypeEnum.SESSION_START, Attributes: {} }]);
	stopSessionIn30Minutes();
	session.creationStatus = AnalyticsSessionStatus.CREATED;
};

const stopSession = async () => {
	await record([
		{
			EventType: EventTypeEnum.SESSION_STOP,
			Attributes: {},
			Session: {
				Id: session.id!,
				StartTimestamp: session.startTimestamp!,
				StopTimestamp: new Date().toISOString()
			}
		}
	]);
	session = { creationStatus: AnalyticsSessionStatus.NOT_CREATED };
};

const stopSessionIn30Minutes = debounce(stopSession, 1000 * 60 * 30);

export const initiateAnalytics = async () => {
	await startSession();

	addEventListener("mousedown", () => {
		// create session whenever user becomes active
		if (session.creationStatus === AnalyticsSessionStatus.NOT_CREATED) {
			startSession();
		} else {
			stopSessionIn30Minutes();
		}
	});
};
