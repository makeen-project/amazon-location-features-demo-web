/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { CalculateRouteCommandInput } from "@aws-sdk/client-location";
import { appConfig } from "@demo/core/constants";
import { useAwsRouteService } from "@demo/services";
import { useAmplifyMapStore, useAwsRouteStore } from "@demo/stores";
import { InputType, RouteDataType, SuggestionType } from "@demo/types";
import { EventTypeEnum, MapProviderEnum, TriggeredByEnum } from "@demo/types/Enums";
import { record } from "@demo/utils/analyticsUtils";
import { errorHandler } from "@demo/utils/errorHandler";
import { useTranslation } from "react-i18next";

const {
	MAP_RESOURCES: {
		ROUTE_CALCULATORS: { ESRI, HERE, GRAB }
	}
} = appConfig;

const useAwsRoute = () => {
	const store = useAwsRouteStore();
	const { setInitial } = store;
	const { setState } = useAwsRouteStore;
	const awsRouteService = useAwsRouteService();
	const { mapProvider } = useAmplifyMapStore();
	const { t } = useTranslation();

	const methods = useMemo(
		() => ({
			getRoute: async (apiRequest: CalculateRouteCommandInput, triggeredBy: TriggeredByEnum) => {
				try {
					setState({ isFetchingRoute: true });
					const params = {
						...apiRequest,
						CalculatorName:
							mapProvider === MapProviderEnum.ESRI || mapProvider === MapProviderEnum.OPEN_DATA
								? ESRI
								: mapProvider === MapProviderEnum.HERE
								? HERE
								: mapProvider === MapProviderEnum.GRAB
								? GRAB
								: "",
						DepartNow: true
					};
					const routeData = await awsRouteService.calculateRoute(params);
					return routeData;
				} catch (error) {
					errorHandler(
						error,
						`${t("error_handler__failed_calculate_route.text") as string} (${apiRequest.TravelMode})`
					);
				} finally {
					setState({ isFetchingRoute: false });

					const recordAttributes: { [key: string]: string } = {
						travelMode: apiRequest.TravelMode || "N/A",
						distanceUnit: apiRequest.DistanceUnit || "N/A",
						triggeredBy: String(triggeredBy)
					};

					const modeOptions = {
						...(apiRequest.CarModeOptions ? apiRequest.CarModeOptions : {}),
						...(apiRequest.TruckModeOptions ? apiRequest.TruckModeOptions : {})
					};

					for (const [key, value] of Object.entries(modeOptions)) {
						recordAttributes[key] = String(value);
					}

					record([{ EventType: EventTypeEnum.ROUTE_SEARCH, Attributes: recordAttributes }]);
				}
			},
			setRoutePositions: (p: number[] | undefined, type: InputType) => {
				setState(s => ({
					routePositions:
						type === InputType.FROM ? { from: p, to: s.routePositions?.to } : { from: s.routePositions?.from, to: p }
				}));
			},
			setRouteData: (routeData?: RouteDataType) => {
				setState({ routeData });
			},
			setDirections: (directions?: { info: SuggestionType; isEsriLimitation: boolean }) => {
				setState({ directions });
			},
			calculateRoute: async (apiRequest: CalculateRouteCommandInput) => {
				try {
					const response = await awsRouteService.calculateRoute(apiRequest);
					return response;
				} catch (error) {
					throw new Error((error as Error).message);
				}
			},
			resetStore: () => {
				setInitial();
			}
		}),
		[setInitial, setState, awsRouteService, mapProvider, t]
	);

	return useMemo(() => ({ ...methods, ...store }), [methods, store]);
};

export default useAwsRoute;
