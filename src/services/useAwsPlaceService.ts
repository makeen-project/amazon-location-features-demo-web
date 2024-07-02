/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import {
	GetPlaceCommandInput,
	SearchPlaceIndexForPositionCommandInput,
	SearchPlaceIndexForSuggestionsCommandInput,
	SearchPlaceIndexForTextCommandInput
} from "@aws-sdk/client-location";
import { appConfig } from "@demo/core/constants";
import { useAmplifyMap, useAws } from "@demo/hooks";
import { MapProviderEnum } from "@demo/types";
import { useTranslation } from "react-i18next";

const {
	MAP_RESOURCES: {
		PLACE_INDEXES: { ESRI, HERE, GRAB }
	},
	ENV: { NL_BASE_URL, NL_API_KEY }
} = appConfig;

const useAwsPlaceService = () => {
	const { locationClient } = useAws();
	const { mapProvider: currentMapProvider, viewpoint } = useAmplifyMap();
	const { i18n } = useTranslation();
	const lang = i18n.language;

	const config = useMemo(
		() => ({
			IndexName:
				currentMapProvider === MapProviderEnum.ESRI || currentMapProvider === MapProviderEnum.OPEN_DATA
					? ESRI
					: currentMapProvider === MapProviderEnum.HERE
					? HERE
					: currentMapProvider === MapProviderEnum.GRAB
					? GRAB
					: "",
			Language: lang
		}),
		[currentMapProvider, lang]
	);

	return useMemo(
		() => ({
			getPlaceSuggestions: async (Text: string) => {
				const params: SearchPlaceIndexForSuggestionsCommandInput = {
					...config,
					BiasPosition:
						currentMapProvider !== MapProviderEnum.GRAB
							? [viewpoint?.longitude as number, viewpoint?.latitude as number]
							: undefined,
					Text
				};

				return await locationClient?.searchPlaceIndexForSuggestions(params);
			},
			getPlaceById: async (PlaceId: string) => {
				const params: GetPlaceCommandInput = {
					...config,
					PlaceId
				};

				return await locationClient?.getPlace(params);
			},
			getPlacesByText: async (Text: string) => {
				const params: SearchPlaceIndexForTextCommandInput = {
					...config,
					BiasPosition:
						currentMapProvider !== MapProviderEnum.GRAB
							? [viewpoint?.longitude as number, viewpoint?.latitude as number]
							: undefined,
					Text
				};

				return await locationClient?.searchPlaceIndexForText(params);
			},
			getPlaceByCoordinates: async (Position: number[]) => {
				const params: SearchPlaceIndexForPositionCommandInput = {
					...config,
					Position
				};

				return await locationClient?.searchPlaceIndexForPosition(params);
			},
			getNLPlacesByText: async (Text: string) => {
				const BiasPosition = [viewpoint?.longitude as number, viewpoint?.latitude as number];
				const mapProvider = currentMapProvider === MapProviderEnum.HERE ? "Here" : currentMapProvider;
				const response = await fetch(
					`${NL_BASE_URL}/places/ask?` +
						new URLSearchParams([
							["Text", Text],
							["BiasPosition", BiasPosition[0].toString()],
							["BiasPosition", BiasPosition[1].toString()],
							["DataSource", mapProvider]
						]),
					{
						method: "GET",
						headers: {
							"x-api-key": NL_API_KEY
						}
					}
				);
				const responseBody = await response.json();
				if (response.status !== 200) {
					throw new Error(responseBody.message);
				}
				return responseBody;
			},
			searchPlaceIndexForPosition: async (apiRequest: SearchPlaceIndexForPositionCommandInput) => {
				return await locationClient?.searchPlaceIndexForPosition(apiRequest);
			},
			searchPlaceIndexForSuggestions: async (apiRequest: SearchPlaceIndexForSuggestionsCommandInput) => {
				return await locationClient?.searchPlaceIndexForSuggestions(apiRequest);
			},
			searchPlaceIndexForText: async (apiRequest: SearchPlaceIndexForTextCommandInput) => {
				return await locationClient?.searchPlaceIndexForText(apiRequest);
			}
		}),
		[config, locationClient, currentMapProvider, viewpoint]
	);
};

export default useAwsPlaceService;
