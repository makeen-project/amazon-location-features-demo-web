/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { GetMapTileCommandInput, SearchPlaceIndexForPositionRequest } from "@aws-sdk/client-location";
import { showToast } from "@demo/core/Toast";
import { appConfig } from "@demo/core/constants";
import { useApiPlaygroundStore } from "@demo/stores";
import { ToastType } from "@demo/types";
import { getTileBounds } from "@demo/utils";

import useAwsMap from "./useAwsMap";
import useAwsPlace from "./useAwsPlace";

const {
	MAP_RESOURCES: {
		PLACE_INDEXES: { HERE }
	}
} = appConfig;

const useApiPlayground = () => {
	const store = useApiPlaygroundStore();
	const { setInitial } = store;
	const { setState } = useApiPlaygroundStore;
	const { mapRef, getMapTile } = useAwsMap();
	const { searchPlaceIndexForPosition } = useAwsPlace();

	const methods = useMemo(
		() => ({
			getMapTile: async (apiRequest: GetMapTileCommandInput) => {
				setState({ isLoading: true });
				try {
					const { MapName, Z, X, Y } = apiRequest;

					if (MapName && Z && X && Y) {
						const response = await getMapTile(apiRequest);

						if (response?.$metadata.httpStatusCode === 200) {
							const bounds = getTileBounds(parseInt(Z), parseInt(X), parseInt(Y));
							mapRef && mapRef.fitBounds(bounds);
							setState({ request: JSON.stringify(apiRequest), response: JSON.stringify(response) });
						}
					} else {
						throw new Error("Missing one or more request form values");
					}
				} catch (error) {
					setState({ request: JSON.stringify(apiRequest), response: JSON.stringify(error) });
					showToast({ content: (error as Error).message, type: ToastType.ERROR });
				} finally {
					setState({ isLoading: false });
				}
			},
			searchPlaceIndexForPosition: async (apiRequest: SearchPlaceIndexForPositionRequest) => {
				setState({ isLoading: true });
				try {
					const response = await searchPlaceIndexForPosition({ ...apiRequest, IndexName: HERE });
					setState({ request: JSON.stringify(apiRequest), response: JSON.stringify(response) });
				} catch (error) {
					setState({ request: JSON.stringify(apiRequest), response: JSON.stringify(error) });
					showToast({ content: (error as Error).message, type: ToastType.ERROR });
				} finally {
					setState({ isLoading: false });
				}
			},
			resetStore: () => {
				setInitial();
			}
		}),
		[getMapTile, mapRef, searchPlaceIndexForPosition, setInitial, setState]
	);

	return { ...methods, ...store };
};

export default useApiPlayground;
