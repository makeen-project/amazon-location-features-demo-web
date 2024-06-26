/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { appConfig } from "@demo/core/constants";
import { useAwsCredentialsService } from "@demo/services";
import { useAwsCredentialsStore } from "@demo/stores";

const {
	ENV: { API_PLAYGROUND_IDENTITY_POOL_ID }
} = appConfig;

export const useAwsCredentials = () => {
	const store = useAwsCredentialsStore();
	const { setInitial } = store;
	const { setState } = useAwsCredentialsStore;
	const { getCredentials } = useAwsCredentialsService();

	const methods = useMemo(
		() => ({
			fetchCredentials: async () => {
				try {
					const credentials = await getCredentials(API_PLAYGROUND_IDENTITY_POOL_ID);
					setState({ credentials });
				} catch (error) {
					console.error({ error });
				}
			},
			resetStore: () => {
				setInitial();
			}
		}),
		[getCredentials, setInitial, setState]
	);

	return { ...methods, ...store };
};

export default useAwsCredentials;
