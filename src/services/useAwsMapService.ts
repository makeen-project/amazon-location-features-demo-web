/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { GetMapTileCommandInput } from "@aws-sdk/client-location";
import { useAws } from "@demo/hooks";

const useAwsMapService = () => {
	const { locationClient } = useAws();

	return useMemo(
		() => ({
			getMapTile: async (apiRequest: GetMapTileCommandInput) => {
				return await locationClient?.getMapTile(apiRequest);
			}
		}),
		[locationClient]
	);
};

export default useAwsMapService;
