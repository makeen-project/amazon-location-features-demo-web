/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { ICredentials } from "@aws-amplify/core";
import { useAwsService } from "@demo/services";
import { useAwsStore } from "@demo/stores";
import { errorHandler } from "@demo/utils/errorHandler";
import { useTranslation } from "react-i18next";

const useAws = () => {
	const store = useAwsStore();
	const { setInitial } = store;
	const { setState } = useAwsStore;
	const { createLocationClient, createIotClient } = useAwsService();
	const { t } = useTranslation();

	const methods = useMemo(
		() => ({
			createLocationClient: (credentials: ICredentials, region: string) => {
				try {
					const locationClient = createLocationClient(credentials, region);
					setState({ locationClient });
				} catch (error) {
					errorHandler(error, t("ERROR_HANDLER.FAILED_CREATE_LOCATION_CLIENT") as string);
				}
			},
			createIotClient: (credentials: ICredentials, region: string) => {
				try {
					const iotClient = createIotClient(credentials, region);
					setState({ iotClient });
				} catch (error) {
					errorHandler(error, t("ERROR_HANDLER.FAILED_CREATE_IOT_CLIENT") as string);
				}
			},
			resetStore: () => {
				setState({ locationClient: undefined, iotClient: undefined });
				setInitial();
			}
		}),
		[setInitial, setState, createLocationClient, createIotClient, t]
	);

	return { ...methods, ...store };
};

export default useAws;
