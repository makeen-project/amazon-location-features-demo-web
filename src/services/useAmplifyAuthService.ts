/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { appConfig } from "@demo/core/constants";
import { Auth } from "aws-amplify";

const {
	ROUTES: { DEMO }
} = appConfig;

const useAmplifyAuthService = () => {
	return useMemo(
		() => ({
			fetchCredentials: async (identityPoolId: string, region: string) => {
				const credentialsProvider = fromCognitoIdentityPool({
					identityPoolId,
					clientConfig: { region }
				});
				return await credentialsProvider();
			},
			hostedUi: (userDomain: string, userPoolClientId: string) =>
				`https://${userDomain}/login?client_id=${userPoolClientId}&response_type=code&identity_provider=COGNITO&scope=email%20openid%20profile&redirect_uri=${window.location.origin}${DEMO}`,
			login: async () => await Auth.federatedSignIn(),
			logout: async () => await Auth.signOut(),
			getCurrentSession: async () => await Auth.currentSession()
		}),
		[]
	);
};

export default useAmplifyAuthService;
