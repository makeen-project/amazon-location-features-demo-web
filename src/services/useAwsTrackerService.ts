/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { DescribeTrackerCommandInput, GetDevicePositionCommandInput } from "@aws-sdk/client-location";
import { useAws } from "@demo/hooks";

const useAwsTrackerService = () => {
	const { locationClient } = useAws();

	return useMemo(
		() => ({
			describeTracker: async (apiRequest: DescribeTrackerCommandInput) => {
				return await locationClient?.describeTracker(apiRequest);
			},
			getDevicePosition: async (apiRequest: GetDevicePositionCommandInput) => {
				return await locationClient?.getDevicePosition(apiRequest);
			}
		}),
		[locationClient]
	);
};

export default useAwsTrackerService;
