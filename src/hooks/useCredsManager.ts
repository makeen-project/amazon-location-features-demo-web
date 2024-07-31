import { useCallback, useEffect } from "react";

import { appConfig } from "@demo/core/constants";

import { EventTypeEnum, MapProviderEnum } from "@demo/types/Enums";
import { record } from "@demo/utils";
import { differenceInMilliseconds } from "date-fns";

import useAwsAuth from "./useAwsAuth";
import useAwsClient from "./useAwsClient";
import useAwsIot from "./useAwsIot";
import useAwsMap from "./useAwsMap";

const {
	PERSIST_STORAGE_KEYS: { SHOULD_CLEAR_CREDENTIALS },
	ROUTES: { DEMO }
} = appConfig;
let timeout: NodeJS.Timer | undefined;

const useCredsManager = () => {
	const {
		credentials,
		fetchCredentials,
		clearCredentials,
		region,
		isUserAwsAccountConnected,
		identityPoolId,
		fetchTokens,
		refreshTokens,
		userPoolId,
		userPoolClientId,
		authTokens,
		setAuthTokens
	} = useAwsAuth();
	const {
		locationClient,
		createLocationClient,
		iotClient,
		createIotClient,
		resetStore: resetAwsClientStore
	} = useAwsClient();
	const { attachPolicy } = useAwsIot();
	const { mapProvider: currentMapProvider } = useAwsMap();
	const shouldClearCredentials = localStorage.getItem(SHOULD_CLEAR_CREDENTIALS) === "true";

	const clearCredsAndClients = useCallback(() => {
		clearCredentials();
		resetAwsClientStore();
	}, [clearCredentials, resetAwsClientStore]);

	if (shouldClearCredentials || (!!credentials && !credentials?.identityId)) {
		localStorage.removeItem(SHOULD_CLEAR_CREDENTIALS);
		clearCredsAndClients();
	}

	const refreshCredentials = useCallback(async () => {
		if (credentials && credentials.authenticated) {
			(async () => {
				await refreshTokens();
			})();
		}

		clearCredsAndClients();
	}, [clearCredsAndClients, credentials, refreshTokens]);

	/* Fetch the current user credentials */
	useEffect(() => {
		if (credentials && credentials.expiration) {
			const now = new Date();
			const expiration = new Date(credentials.expiration);

			if (now > expiration) {
				/* If the credentials are expired, refresh them */
				refreshCredentials();
			} else {
				/* If the credentials are not expired, set the refresh timeout */
				timeout && clearTimeout(timeout);
				timeout = setTimeout(() => {
					refreshCredentials();
				}, differenceInMilliseconds(new Date(credentials.expiration || 0), new Date()) - 300);
			}
		} else {
			/* If the credentials are not present, fetch them */
			(async () => {
				await fetchCredentials();
			})();
		}
	}, [
		credentials,
		fetchCredentials,
		resetAwsClientStore,
		clearCredsAndClients,
		refreshTokens,
		authTokens,
		setAuthTokens,
		refreshCredentials
	]);

	/* Instantiate location and iot client from aws-sdk whenever the credentials change */
	useEffect(() => {
		if (credentials && region) {
			!locationClient && createLocationClient(credentials, region);
			!iotClient && createIotClient(credentials, region);
		}
	}, [credentials, locationClient, createLocationClient, region, iotClient, createIotClient]);

	/* Fired when user logs in or logs out */
	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const code = searchParams.get("code");
		const sign_out = searchParams.get("sign_out");

		/* After login */
		if (code) {
			window.history.replaceState(undefined, "", DEMO);
			(async () => {
				await fetchTokens(code);
				clearCredsAndClients();
			})();
		}

		/* After logout */
		if (sign_out === "true") {
			(async () =>
				await record(
					[{ EventType: EventTypeEnum.SIGN_OUT_SUCCESSFUL, Attributes: {} }],
					["userAWSAccountConnectionStatus", "userAuthenticationStatus"]
				))();
			window.history.replaceState(undefined, "", DEMO);
			clearCredsAndClients();
		}
	}, [
		clearCredsAndClients,
		credentials,
		identityPoolId,
		userPoolClientId,
		region,
		userPoolId,
		fetchCredentials,
		fetchTokens
	]);

	const _attachPolicy = useCallback(async () => {
		if (credentials?.identityId && credentials?.expiration) {
			const now = new Date();
			const expiration = new Date(credentials.expiration);

			if (now > expiration) {
				/* If the credentials are expired, clear them and the location client */
				clearCredsAndClients();
			} else {
				if (!!credentials.authenticated) {
					await attachPolicy(credentials.identityId);
				} else if (!isUserAwsAccountConnected && currentMapProvider !== MapProviderEnum.GRAB) {
					await attachPolicy(credentials.identityId, true);
				}
			}
		}
	}, [credentials, clearCredsAndClients, attachPolicy, isUserAwsAccountConnected, currentMapProvider]);

	/* Attach IoT policy to authenticated user to ensure successful websocket connection */
	useEffect(() => {
		_attachPolicy();
	}, [_attachPolicy]);

	return { clearCredsAndClients };
};

export default useCredsManager;
