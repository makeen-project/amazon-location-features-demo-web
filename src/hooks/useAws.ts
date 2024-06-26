/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { ICredentials } from "@aws-amplify/core";
import { CognitoIdentityCredentials } from "@aws-sdk/credential-provider-cognito-identity";
import { useAwsService } from "@demo/services";
import { useAwsStore } from "@demo/stores";
import { errorHandler } from "@demo/utils/errorHandler";
import { useTranslation } from "react-i18next";

const useAws = () => {
	const store = useAwsStore();
	const { setInitial } = store;
	const { setState } = useAwsStore;
	const { createCognitoIdentityClient, createLocationClient, createIotClient } = useAwsService();
	const { t } = useTranslation();

	const methods = useMemo(
		() => ({
			createLocationClient: (credentials: ICredentials | CognitoIdentityCredentials, region: string) => {
				try {
					const locationClient = createLocationClient(credentials, region);
					setState({ locationClient });
				} catch (error) {
					errorHandler(error, t("error_handler__failed_create_location_client.text") as string);
				}
			},
			createIotClient: (credentials: ICredentials, region: string) => {
				try {
					const iotClient = createIotClient(credentials, region);
					setState({ iotClient });
				} catch (error) {
					errorHandler(error, t("error_handler__failed_create_iot_client.text") as string);
				}
			},
			createCognitoIdentityClient: (region: string) => {
				try {
					const cognitoIdentityClient = createCognitoIdentityClient(region);
					setState({ cognitoIdentityClient });
					return cognitoIdentityClient;
				} catch (error) {
					errorHandler(error, t("Failed to create cognito identity client") as string);
				}
			},
			resetStore: () => {
				setInitial();
			}
		}),
		[createCognitoIdentityClient, setState, t, createLocationClient, createIotClient, setInitial]
	);

	return { ...methods, ...store };
};

export default useAws;
