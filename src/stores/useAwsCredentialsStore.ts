/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { CognitoIdentityCredentials } from "@aws-sdk/credential-provider-cognito-identity";
import { appConfig } from "@demo/core/constants";
import { IStateProps } from "@demo/types";

import createStore from "./createStore";

const {
	PERSIST_STORAGE_KEYS: { LOCAL_STORAGE_PREFIX, AWS_CREDENTIALS_DATA }
} = appConfig;
const localStorageKey = `${LOCAL_STORAGE_PREFIX}${AWS_CREDENTIALS_DATA}`;

export interface AwsCredentialsStoreProps {
	credentials?: CognitoIdentityCredentials;
}

export const initialState: IStateProps<AwsCredentialsStoreProps> = {
	credentials: undefined
};

export default createStore<AwsCredentialsStoreProps>(initialState, true, localStorageKey);
