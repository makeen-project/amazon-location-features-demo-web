import {
	Event,
	PinpointClient,
	PutEventsCommand,
	PutEventsRequest,
	UpdateEndpointCommand
} from "@aws-sdk/client-pinpoint";

import { appConfig } from "@demo/core/constants";
import { EventTypeEnum } from "@demo/types/Enums";
import RecordInput from "@demo/types/RecordInput";
import { browserName, fullBrowserVersion, isAndroid, isDesktop, isIOS } from "react-device-detect";

import debounce from "./debounce";
import { uuid } from "./uuid";

const {
	ENV: { PINPOINT_REGION, PINPOINT_APPLICATION_ID, PINPOINT_ACCESS_KEY_ID, PINPOINT_SECRET_ACCESS_KEY },
	PERSIST_STORAGE_KEYS: { LOCAL_STORAGE_PREFIX, AMPLIFY_AUTH_DATA }
} = appConfig;
const amplifyAuthDataLocalStorageKey = `${LOCAL_STORAGE_PREFIX}${AMPLIFY_AUTH_DATA}`;
const endpointIdKey = `${LOCAL_STORAGE_PREFIX}_analytics_endpointId`;

let isEndpointCreated = false;
let session: { [key: string]: string } = {};
let endpointId = localStorage.getItem(endpointIdKey);

if (!endpointId) {
	endpointId = uuid.randomUUID();
	localStorage.setItem(endpointIdKey, endpointId);
}

//Set the MediaConvert Service Object
const pinClient = new PinpointClient({
	credentials: {
		accessKeyId: PINPOINT_ACCESS_KEY_ID,
		secretAccessKey: PINPOINT_SECRET_ACCESS_KEY
	},
	region: PINPOINT_REGION
});

const createEndpoint = async () => {
	const jsonValue = await fetch("https://api.country.is/");
	const value = await jsonValue.json();

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
				Country: value.country
			},

			Demographic: {
				Model: browserName,
				ModelVersion: fullBrowserVersion,

				Platform: `Web (${platformType})`
			},
			User: {
				UserAttributes: {},
				UserId: `${credentials.authenticated ? credentials.identityId : "anonymous"}`
			}
		}
	};

	const putEventsCommand = new UpdateEndpointCommand(input);
	await pinClient.send(putEventsCommand);
	isEndpointCreated = true;
};

export const record: (input: RecordInput[]) => void = async input => {
	if (!isEndpointCreated) {
		await createEndpoint();
	}

	if (!session.id) {
		await startSession();
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
				userAuthenticationStatus: !!credentials.authenticated ? "Authenticated" : "Unauthenticated",
				...(value.Attributes || {})
			},
			Session: {
				Id: session.id,
				StartTimestamp: session.startTimestamp,
				...(value.Session || {})
			},
			Timestamp: new Date().toUTCString()
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
	await pinClient.send(putEventsCommand);
};

const startSession = async () => {
	session.id = uuid.randomUUID();
	session.startTimestamp = new Date().toUTCString();
	await record([{ EventType: EventTypeEnum.SESSION_START, Attributes: {} }]);
	stopSessionIn30Minutes();
};

const stopSession = async () => {
	await record([
		{
			EventType: EventTypeEnum.SESSION_STOP,
			Attributes: {},
			Session: {
				Id: session.id,
				StartTimestamp: session.startTimestamp,
				StopTimestamp: new Date().toUTCString()
			}
		}
	]);
	session = {};
};

const stopSessionIn30Minutes = debounce(stopSession, 1000 * 60 * 30);

export const initiateAnalytics = async () => {
	await startSession();

	addEventListener("mousedown", () => {
		// create session whenever user becomes active
		if (!session.id) {
			startSession();
		} else {
			stopSessionIn30Minutes();
		}
	});
};
