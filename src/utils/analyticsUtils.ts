import {
	Event,
	PinpointClient,
	PutEventsCommand,
	PutEventsRequest,
	UpdateEndpointCommand
} from "@aws-sdk/client-pinpoint";

import { appConfig } from "@demo/core/constants";
import RecordInput from "@demo/types/RecordInput";
import { browserName, fullBrowserVersion, isAndroid, isDesktop, isIOS } from "react-device-detect";

import { uuid } from "./uuid";

const {
	ENV: { PINPOINT_REGION, PINPOINT_APPLICATION_ID, PINPOINT_ACCESS_KEY_ID, PINPOINT_SECRET_ACCESS_KEY },
	PERSIST_STORAGE_KEYS: { LOCAL_STORAGE_PREFIX, AMPLIFY_AUTH_DATA }
} = appConfig;
const amplifyAuthDataLocalStorageKey = `${LOCAL_STORAGE_PREFIX}${AMPLIFY_AUTH_DATA}`;

let isEndpointCreated = false;
const uniqueIdKey = "uniqueIdKey";
const sessionId = uuid.randomUUID();
let uniqueId = localStorage.getItem(uniqueIdKey);

if (!uniqueId) {
	uniqueId = uuid.randomUUID();
	localStorage.setItem(uniqueIdKey, uniqueId);
}

//Set the MediaConvert Service Object
const pinClient = new PinpointClient({
	credentials: {
		accessKeyId: PINPOINT_ACCESS_KEY_ID,
		secretAccessKey: PINPOINT_SECRET_ACCESS_KEY
	},
	region: PINPOINT_REGION
});

export const createEndpoint = async () => {
	const jsonValue = await fetch("https://api.country.is/");
	const value = await jsonValue.json();

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
		EndpointId: uniqueId!,
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
				UserId: `${PINPOINT_REGION}:${uuid.randomUUID()}`
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

	const eventId = uuid.randomUUID();

	const authLocalStorageKeyString = localStorage.getItem(amplifyAuthDataLocalStorageKey) as string;
	const {
		state: { isUserAwsAccountConnected, credentials }
	} = JSON.parse(authLocalStorageKeyString);

	const events = input.reduce((result, value) => {
		const extValue = {
			...value,
			Attributes: {
				...value.Attributes,
				userAWSAccountConnectionStatus: !!isUserAwsAccountConnected ? "Connected" : "Not connected",
				userAuthenticationStatus: !!credentials.authenticated ? "Authenticated" : "Unauthenticated"
			},
			Session: {
				Id: sessionId,
				StartTimestamp: "2023-07-10T15:34:03.711Z"
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
				[uniqueId!]: {
					Endpoint: {},
					Events: events
				}
			}
		}
	};

	const putEventsCommand = new PutEventsCommand(commandInput);
	await pinClient.send(putEventsCommand);
};
