/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { CognitoIdentity } from "@aws-sdk/client-cognito-identity";
import { IoT } from "@aws-sdk/client-iot";
import { Location } from "@aws-sdk/client-location";
import { IStateProps } from "@demo/types";

import createStore from "./createStore";

export interface AwsStoreProps {
	locationClient?: Location;
	iotClient?: IoT;
	cognitoIdentityClient?: CognitoIdentity;
}

export const initialState: IStateProps<AwsStoreProps> = {
	locationClient: undefined,
	iotClient: undefined,
	cognitoIdentityClient: undefined
};

export default createStore<AwsStoreProps>(initialState);
