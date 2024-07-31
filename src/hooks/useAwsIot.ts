/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { useAwsIotService } from "@demo/services";
import { errorHandler } from "@demo/utils/errorHandler";

const useAwsIot = () => {
	const awsIotService = useAwsIotService();

	const methods = useMemo(
		() => ({
			attachPolicy: async (identityId: string, unauthUser = false) => {
				try {
					await awsIotService.attachPolicy(identityId, unauthUser);
				} catch (error) {
					errorHandler(error);
				}
			},
			detachPolicy: async (identityId: string, unauthUser = false) => {
				try {
					await awsIotService.detachPolicy(identityId, unauthUser);
				} catch (error) {
					errorHandler(error);
				}
			}
		}),
		[awsIotService]
	);

	return useMemo(() => ({ ...methods }), [methods]);
};

export default useAwsIot;
