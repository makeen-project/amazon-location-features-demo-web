/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { CalculateRouteCommandInput } from "@aws-sdk/client-location";
import { useAws } from "@demo/hooks";

const useAwsRouteService = () => {
	const { locationClient } = useAws();

	return useMemo(
		() => ({
			calculateRoute: async (apiRequest: CalculateRouteCommandInput) => {
				return await locationClient?.calculateRoute(apiRequest);
			}
		}),
		[locationClient]
	);
};

export default useAwsRouteService;
