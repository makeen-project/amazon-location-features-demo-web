/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import {
	GetGeofenceCommandInput,
	GetMapTileCommandInput,
	SearchPlaceIndexForPositionRequest,
	SearchPlaceIndexForSuggestionsRequest,
	SearchPlaceIndexForTextRequest
} from "@aws-sdk/client-location";
import { showToast } from "@demo/core/Toast";
import { useApiPlaygroundStore } from "@demo/stores";
import { ToastType } from "@demo/types";
import { getTileBounds } from "@demo/utils";

import useAwsGeofence from "./useAwsGeofence";
import useAwsMap from "./useAwsMap";
import useAwsPlace from "./useAwsPlace";

const useApiPlayground = () => {
	const store = useApiPlaygroundStore();
	const { setInitial } = store;
	const { setState } = useApiPlaygroundStore;
	const { mapRef, getMapTile } = useAwsMap();
	const { searchPlaceIndexForPosition, searchPlaceIndexForSuggestions, searchPlaceIndexForText } = useAwsPlace();
	const { getGeofence } = useAwsGeofence();

	const methods = useMemo(
		() => ({
			getMapTile: async (apiRequest: GetMapTileCommandInput) => {
				setState({ isLoading: true });
				try {
					const response = await getMapTile(apiRequest);
					const bounds = getTileBounds(
						parseInt(apiRequest.Z as string),
						parseInt(apiRequest.X as string),
						parseInt(apiRequest.Y as string)
					);

					if (response?.$metadata.httpStatusCode === 200) {
						mapRef && mapRef.fitBounds(bounds);
						setState({ request: JSON.stringify(apiRequest), response: JSON.stringify(response) });
					}
				} catch (error) {
					setState({ request: JSON.stringify(apiRequest), response: (error as Error).message });
					showToast({ content: (error as Error).message, type: ToastType.ERROR });
				} finally {
					setState({ isLoading: false });
				}
			},
			searchPlaceIndexForPosition: async (apiRequest: SearchPlaceIndexForPositionRequest) => {
				setState({ isLoading: true });
				try {
					const response = await searchPlaceIndexForPosition(apiRequest);
					setState({ request: JSON.stringify(apiRequest), response: JSON.stringify(response) });
				} catch (error) {
					setState({ request: JSON.stringify(apiRequest), response: (error as Error).message });
					showToast({ content: (error as Error).message, type: ToastType.ERROR });
				} finally {
					setState({ isLoading: false });
				}
			},
			searchPlaceIndexForSuggestions: async (apiRequest: SearchPlaceIndexForSuggestionsRequest) => {
				setState({ isLoading: true });
				try {
					const response = await searchPlaceIndexForSuggestions(apiRequest);
					setState({ request: JSON.stringify(apiRequest), response: JSON.stringify(response) });
				} catch (error) {
					setState({ request: JSON.stringify(apiRequest), response: (error as Error).message });
					showToast({ content: (error as Error).message, type: ToastType.ERROR });
				} finally {
					setState({ isLoading: false });
				}
			},
			searchPlaceIndexForText: async (apiRequest: SearchPlaceIndexForTextRequest) => {
				setState({ isLoading: true });
				try {
					const response = await searchPlaceIndexForText(apiRequest);
					setState({ request: JSON.stringify(apiRequest), response: JSON.stringify(response) });
				} catch (error) {
					setState({ request: JSON.stringify(apiRequest), response: (error as Error).message });
					showToast({ content: (error as Error).message, type: ToastType.ERROR });
				} finally {
					setState({ isLoading: false });
				}
			},
			getGeofence: async (apiRequest: GetGeofenceCommandInput) => {
				setState({ isLoading: true });
				try {
					const response = await getGeofence(apiRequest);
					setState({ request: JSON.stringify(apiRequest), response: JSON.stringify(response) });
				} catch (error) {
					setState({ request: JSON.stringify(apiRequest), response: (error as Error).message });
					showToast({ content: (error as Error).message, type: ToastType.ERROR });
				} finally {
					setState({ isLoading: false });
				}
			},
			resetStore: () => {
				setInitial();
			}
		}),
		[
			getGeofence,
			getMapTile,
			mapRef,
			searchPlaceIndexForPosition,
			searchPlaceIndexForSuggestions,
			searchPlaceIndexForText,
			setInitial,
			setState
		]
	);

	return { ...methods, ...store };
};

export default useApiPlayground;
