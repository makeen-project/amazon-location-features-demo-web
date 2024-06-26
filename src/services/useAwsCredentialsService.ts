import { useMemo } from "react";

import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

const useAwsCredentialsService = () => {
	return useMemo(
		() => ({
			getCredentials: async (identityPoolId: string) => {
				const credentialsProvider = fromCognitoIdentityPool({
					clientConfig: { region: identityPoolId.split(":")[0] },
					identityPoolId
				});
				const credentials = await credentialsProvider();
				return credentials;
			}
		}),
		[]
	);
};

export default useAwsCredentialsService;
