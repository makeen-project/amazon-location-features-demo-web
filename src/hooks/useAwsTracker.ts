/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { DescribeTrackerCommandInput, GetDevicePositionCommandInput } from "@aws-sdk/client-location";
import { useAwsTrackerService } from "@demo/services";
import { useAwsTrackerStore } from "@demo/stores";
import { TrackerType } from "@demo/types";

const useAwsTracker = () => {
	const store = useAwsTrackerStore();
	const { setInitial } = store;
	const { setState } = useAwsTrackerStore;
	const awsTrackerService = useAwsTrackerService();

	const methods = useMemo(
		() => ({
			setIsEditingRoute: (isEditingRoute: boolean) => {
				setState({ isEditingRoute });
			},
			setTrackerPoints: (trackerPoint?: number[]) => {
				if (trackerPoint) {
					setState(s => ({
						trackerPoints: s.trackerPoints?.length ? [...s.trackerPoints, trackerPoint] : [trackerPoint]
					}));
				} else {
					setState({ trackerPoints: undefined });
				}
			},
			setSelectedTrackerType: (selectedTrackerType: TrackerType) => {
				setState({ selectedTrackerType });
			},
			describeTracker: async (apiRequest: DescribeTrackerCommandInput) => {
				try {
					const response = await awsTrackerService.describeTracker(apiRequest);
					return response;
				} catch (error) {
					throw new Error((error as Error).message);
				}
			},
			getDevicePosition: async (apiRequest: GetDevicePositionCommandInput) => {
				try {
					const response = await awsTrackerService.getDevicePosition(apiRequest);
					return response;
				} catch (error) {
					throw new Error((error as Error).message);
				}
			},
			resetStore: () => {
				setInitial();
			}
		}),
		[awsTrackerService, setInitial, setState]
	);

	return useMemo(() => ({ ...methods, ...store }), [methods, store]);
};

export default useAwsTracker;
