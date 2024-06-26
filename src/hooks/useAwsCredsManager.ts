/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useCallback, useEffect } from "react";

import { appConfig } from "@demo/core/constants";
import { differenceInMilliseconds } from "date-fns";

import useAws from "./useAws";
import useAwsCredentials from "./useAwsCredentials";

const {
	ENV: { API_PLAYGROUND_IDENTITY_POOL_ID }
} = appConfig;

let timeout: NodeJS.Timer | undefined;

const useAwsCredsManager = () => {
	const { credentials, fetchCredentials, resetStore: resetAwsCredentialsStore } = useAwsCredentials();
	const { locationClient, createLocationClient, resetStore: resetAwsStore } = useAws();

	const clearAwsCredentialsAndAwsStore = useCallback(() => {
		resetAwsCredentialsStore();
		resetAwsStore();
	}, [resetAwsCredentialsStore, resetAwsStore]);

	/* Clear the credentials and locationClient on unmount */
	useEffect(() => {
		return () => {
			clearAwsCredentialsAndAwsStore();
		};
	}, [clearAwsCredentialsAndAwsStore]);

	/* Fetch the current user credentials */
	useEffect(() => {
		if (!!credentials?.expiration) {
			const now = new Date();
			const expiration = new Date(credentials.expiration);

			if (now > expiration) {
				/* If the credentials are expired, clear them and the location client */
				clearAwsCredentialsAndAwsStore();
			} else {
				/* If the credentials are not expired, set the refresh timeout */
				timeout && clearTimeout(timeout);
				timeout = setTimeout(() => {
					clearAwsCredentialsAndAwsStore();
				}, differenceInMilliseconds(new Date(credentials.expiration || 0), new Date()));
			}
		} else {
			/* If the credentials are not present, fetch them */
			fetchCredentials();
		}
	}, [credentials, fetchCredentials, clearAwsCredentialsAndAwsStore]);

	/* Create the locationClient when locationClient is present but it's config's credentials do not match credentials or when locationClient is not present at all */
	useEffect(() => {
		if (credentials) {
			if (!!locationClient) {
				locationClient?.config.credentials().then(locationClientCreds => {
					JSON.stringify(locationClientCreds) !== JSON.stringify(credentials) &&
						createLocationClient(credentials, API_PLAYGROUND_IDENTITY_POOL_ID.split(":")[0]);
				});
			} else {
				createLocationClient(credentials, API_PLAYGROUND_IDENTITY_POOL_ID.split(":")[0]);
			}
		}
	}, [createLocationClient, credentials, locationClient]);

	return {};
};

export default useAwsCredsManager;
