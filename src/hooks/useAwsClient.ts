/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { useAwsClientService } from "@demo/services";
import { useAwsClientStore } from "@demo/stores";
import { CognitoIdentityCredentials } from "@demo/types";
import { errorHandler } from "@demo/utils/errorHandler";
import { useTranslation } from "react-i18next";

const useAws = () => {
	const store = useAwsClientStore();
	const { setInitial } = store;
	const { setState } = useAwsClientStore;
	const awsClientService = useAwsClientService();
	const { t } = useTranslation();

	const methods = useMemo(
		() => ({
			createLocationClient: (credentials: CognitoIdentityCredentials, region: string) => {
				try {
					const locationClient = awsClientService.createLocationClient(credentials, region);
					setState({ locationClient });
				} catch (error) {
					errorHandler(error, t("error_handler__failed_create_location_client.text") as string);
				}
			},
			createIotClient: (credentials: CognitoIdentityCredentials, region: string) => {
				try {
					const iotClient = awsClientService.createIotClient(credentials, region);
					setState({ iotClient });
				} catch (error) {
					errorHandler(error, t("error_handler__failed_create_iot_client.text") as string);
				}
			},
			resetStore: () => {
				setState({ locationClient: undefined, iotClient: undefined });
				setInitial();
			}
		}),
		[awsClientService, setState, t, setInitial]
	);

	return { ...methods, ...store };
};

export default useAws;
