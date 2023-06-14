/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { appConfig } from "@demo/core/constants";
import { useAmplifyMapService } from "@demo/services";
import { useAmplifyMapStore } from "@demo/stores";
import {
	CurrentLocationDataType,
	EsriMapEnum,
	GrabMapEnum,
	HereMapEnum,
	MapProviderEnum,
	MapUnitEnum,
	ViewPointType
} from "@demo/types";

import { errorHandler } from "@demo/utils/errorHandler";
import { useTranslation } from "react-i18next";

const {
	MAP_RESOURCES: { IMPERIAL_COUNTRIES }
} = appConfig;
const { IMPERIAL, METRIC } = MapUnitEnum;

const useAmplifyMap = () => {
	const store = useAmplifyMapStore();
	const { setInitial } = store;
	const { setState } = useAmplifyMapStore;
	const mapsService = useAmplifyMapService();
	const { t } = useTranslation();

	const methods = useMemo(
		() => ({
			getDefaultMap: () => {
				try {
					return mapsService.getDefaultMap();
				} catch (error) {
					errorHandler(error, t("ERROR_HANDLER.FAILED_FETCH_DEFAULT_MAP") as string);
				}
			},
			getAvailableMaps: () => {
				try {
					return mapsService.getAvailableMaps();
				} catch (error) {
					errorHandler(error, t("ERROR_HANDLER.FAILED_FETCH_AVAILABLE_MAP") as string);
				}
			},
			setCurrentLocation: (currentLocationData: CurrentLocationDataType) => {
				setState({ currentLocationData });
			},
			setViewpoint: (viewpoint: ViewPointType) => {
				setState({ viewpoint });
			},
			setIsAutomaticMapUnit: (isAutomaticMapUnit: boolean) => {
				setState({ isAutomaticMapUnit });
			},
			setAutomaticMapUnit: () => {
				if (store.isAutomaticMapUnit) {
					const isMetric = !IMPERIAL_COUNTRIES.includes(navigator.language.split("-")[1]);
					isMetric ? setState({ mapUnit: METRIC }) : setState({ mapUnit: IMPERIAL });
				}
			},
			setMapUnit: (mapUnit: MapUnitEnum) => {
				setState({ mapUnit });
			},
			setMapProvider: (mapProvider: MapProviderEnum) => {
				setState({ mapProvider });
			},
			setMapStyle: (mapStyle: EsriMapEnum | HereMapEnum | GrabMapEnum) => {
				setState({ mapStyle });
			},
			setAttributionText: (attributionText: string) => {
				setState({ attributionText });
			},
			setIsCurrentLocationDisabled: (isCurrentLocationDisabled: boolean) => {
				setState({ isCurrentLocationDisabled });
			},
			resetStore() {
				setState({
					currentLocationData: undefined
				});
				setInitial();
			}
		}),
		[mapsService, setState, store.isAutomaticMapUnit, setInitial, t]
	);

	return useMemo(() => ({ ...methods, ...store }), [methods, store]);
};

export default useAmplifyMap;
