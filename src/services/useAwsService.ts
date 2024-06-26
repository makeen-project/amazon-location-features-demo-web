/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { ICredentials } from "@aws-amplify/core";
import { CognitoIdentity } from "@aws-sdk/client-cognito-identity";
import { IoT } from "@aws-sdk/client-iot";
import { Location } from "@aws-sdk/client-location";
import { CognitoIdentityCredentials } from "@aws-sdk/credential-provider-cognito-identity";

const useAwsService = () => {
	return useMemo(
		() => ({
			createLocationClient: (credentials: ICredentials | CognitoIdentityCredentials, region: string) =>
				new Location({
					credentials,
					region
					// signatureCache: false
				}),
			createIotClient: (credentials: ICredentials, region: string) =>
				new IoT({
					credentials,
					region
					// signatureCache: false
				}),
			createCognitoIdentityClient: (region: string) => new CognitoIdentity({ region })
		}),
		[]
	);
};

export default useAwsService;
