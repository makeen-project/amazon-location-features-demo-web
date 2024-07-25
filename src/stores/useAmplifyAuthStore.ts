/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { appConfig } from "@demo/core/constants";
import { AuthTokensType, CognitoIdentityCredentials, IStateProps } from "@demo/types";

import createStore from "./createStore";

const {
	ENV: { CF_TEMPLATE },
	PERSIST_STORAGE_KEYS: { LOCAL_STORAGE_PREFIX, AMPLIFY_AUTH_DATA }
} = appConfig;
const localStorageKey = `${LOCAL_STORAGE_PREFIX}${AMPLIFY_AUTH_DATA}`;

export interface AmplifyAuthStoreProps {
	credentials?: CognitoIdentityCredentials;
	authTokens?: AuthTokensType;
	isUserAwsAccountConnected: boolean;
	identityPoolId?: string;
	region?: string;
	userDomain?: string;
	userPoolClientId?: string;
	userPoolId?: string;
	webSocketUrl?: string;
	autoRegion: boolean;
	stackRegion?: { value: string; label: string };
	cloudFormationLink: string;
}

export const initialState: IStateProps<AmplifyAuthStoreProps> = {
	isUserAwsAccountConnected: false,
	autoRegion: true,
	cloudFormationLink: CF_TEMPLATE
};

export default createStore<AmplifyAuthStoreProps>(initialState, true, localStorageKey);
