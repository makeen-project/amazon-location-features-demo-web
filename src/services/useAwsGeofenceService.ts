/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import {
	BatchDeleteGeofenceCommandInput,
	BatchEvaluateGeofencesCommandInput,
	GeofenceGeometry,
	GetGeofenceCommandInput,
	ListGeofencesCommandInput,
	PutGeofenceCommandInput
} from "@aws-sdk/client-location";
import { appConfig } from "@demo/core/constants";
import { useAws } from "@demo/hooks";

const {
	MAP_RESOURCES: { GEOFENCE_COLLECTION, DEVICE_ID_WEB }
} = appConfig;

const useAwsGeofenceService = () => {
	const { locationClient } = useAws();

	return useMemo(
		() => ({
			putGeofence: async (GeofenceId: string, Geometry: GeofenceGeometry) => {
				const params: PutGeofenceCommandInput = {
					CollectionName: GEOFENCE_COLLECTION,
					GeofenceId,
					Geometry
				};

				return await locationClient?.putGeofence(params);
			},
			deleteGeofence: async (GeofenceId: string) => {
				const params: BatchDeleteGeofenceCommandInput = {
					CollectionName: GEOFENCE_COLLECTION,
					GeofenceIds: [GeofenceId]
				};

				return await locationClient?.batchDeleteGeofence(params);
			},
			evaluateGeofence: async (Position: number[], IdentityId: string, geofenceCollection?: string) => {
				const params: BatchEvaluateGeofencesCommandInput = {
					CollectionName: geofenceCollection || GEOFENCE_COLLECTION,
					DevicePositionUpdates: [
						{
							DeviceId: DEVICE_ID_WEB,
							Position,
							SampleTime: new Date(),
							PositionProperties: {
								region: IdentityId.split(":")[0],
								id: IdentityId.split(":")[1]
							}
						}
					]
				};

				return await locationClient?.batchEvaluateGeofences(params);
			},
			getGeofence: async (apiRequest: GetGeofenceCommandInput) => {
				return await locationClient?.getGeofence(apiRequest);
			},
			listGeofences: async (apiRequest: ListGeofencesCommandInput) => {
				return await locationClient?.listGeofences(apiRequest);
			}
		}),
		[locationClient]
	);
};

export default useAwsGeofenceService;
