/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Button, Flex, Placeholder, Text, View } from "@aws-amplify/ui-react";
import { CalculateRouteRequest, CalculateRouteResponse } from "@aws-sdk/client-location";
import { IconCar, IconClose, IconCopyPages, IconDirections, IconInfo } from "@demo/assets/svgs";
import BottomSheetHeights from "@demo/core/constants/bottomSheetHeights";
import { useMap, usePlace, useRoute } from "@demo/hooks";
import useBottomSheet from "@demo/hooks/useBottomSheet";
import useDeviceMediaQuery from "@demo/hooks/useDeviceMediaQuery";
import { DistanceUnitEnum, MapProviderEnum, MapUnitEnum, SuggestionType, TravelMode } from "@demo/types";
import { ResponsiveUIEnum, TriggeredByEnum } from "@demo/types/Enums";
import { humanReadableTime } from "@demo/utils/dateTimeUtils";
import { calculateGeodesicDistance } from "@demo/utils/geoCalculation";
import { Units } from "@turf/turf";
import { useTranslation } from "react-i18next";
import { Popup as PopupGl } from "react-map-gl/maplibre";
import { Tooltip } from "react-tooltip";
import "./styles.scss";

const { METRIC } = MapUnitEnum;
const { KILOMETERS, MILES } = DistanceUnitEnum;

interface Props {
	active: boolean;
	info: SuggestionType;
	select: (id?: string) => Promise<void>;
	onClosePopUp?: () => void;
	setInfo: (info?: SuggestionType) => void;
}
const Popup: FC<Props> = ({ active, info, select, onClosePopUp, setInfo }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [routeData, setRouteData] = useState<CalculateRouteResponse>();
	const { setPOICard, setBottomSheetMinHeight, setBottomSheetHeight, setUI, bottomSheetHeight, ui } = useBottomSheet();
	const {
		currentLocationData,
		viewpoint,
		mapProvider: currentMapProvider,
		mapUnit: currentMapUnit,
		isCurrentLocationDisabled
	} = useMap();
	const { clearPoiList } = usePlace();
	const { getRoute, setDirections, isFetchingRoute } = useRoute();
	const [longitude, latitude] = useMemo(() => info.Place?.Geometry?.Point as number[], [info]);
	const { isDesktop } = useDeviceMediaQuery();
	const { t, i18n } = useTranslation();
	const currentLang = i18n.language;
	const langDir = i18n.dir();
	const isLtr = langDir === "ltr";
	const isLanguageRTL = ["ar", "he"].includes(currentLang);
	const POICardRef = useRef<HTMLDivElement>(null);

	const geodesicDistance = useMemo(
		() =>
			calculateGeodesicDistance(
				currentLocationData?.currentLocation && !isCurrentLocationDisabled
					? [
							currentLocationData.currentLocation.longitude as number,
							currentLocationData.currentLocation.latitude as number
					  ]
					: [viewpoint.longitude, viewpoint.latitude],
				[longitude, latitude],
				currentMapUnit === METRIC ? (KILOMETERS.toLowerCase() as Units) : (MILES.toLowerCase() as Units)
			),
		[isCurrentLocationDisabled, viewpoint, currentLocationData, longitude, latitude, currentMapUnit]
	);

	const localizeGeodesicDistance = useMemo(() => {
		const formatter = new Intl.NumberFormat(currentLang, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
		return formatter.format(geodesicDistance || 0).replace(/\s/g, "");
	}, [geodesicDistance, currentLang]);

	const geodesicDistanceUnit = useMemo(
		() =>
			localizeGeodesicDistance
				? currentMapUnit === METRIC
					? t("geofence_box__km__short.text")
					: t("geofence_box__mi__short.text")
				: "",
		[localizeGeodesicDistance, currentMapUnit, t]
	);

	/* Esri route can't be calculated when distance is greater than 400 km or 248.55 mi */
	const isEsriLimitation = useMemo(() => {
		if (geodesicDistance) {
			const maxDistance = currentMapUnit === METRIC ? 400 : 248.55;
			return currentMapProvider === MapProviderEnum.ESRI && geodesicDistance >= maxDistance;
		} else {
			return false;
		}
	}, [geodesicDistance, currentMapUnit, currentMapProvider]);

	const loadRouteData = useCallback(async () => {
		const params: Omit<CalculateRouteRequest, "CalculatorName" | "DepartNow"> = {
			DeparturePosition: [
				currentLocationData?.currentLocation?.longitude,
				currentLocationData?.currentLocation?.latitude
			] as number[],
			DestinationPosition: [longitude, latitude],
			DistanceUnit: currentMapUnit === METRIC ? KILOMETERS : MILES,
			TravelMode: TravelMode.CAR
		};
		try {
			setIsLoading(true);
			const r = await getRoute(params as CalculateRouteRequest, TriggeredByEnum.PLACES_POPUP);
			setRouteData(r);
		} finally {
			setIsLoading(false);
		}
	}, [currentLocationData, longitude, latitude, currentMapUnit, getRoute]);

	useEffect(() => {
		if (
			!routeData &&
			active &&
			!isEsriLimitation &&
			!!currentLocationData?.currentLocation &&
			!isCurrentLocationDisabled
		) {
			loadRouteData();
		}
	}, [routeData, active, isEsriLimitation, currentLocationData, isCurrentLocationDisabled, loadRouteData]);

	const onClose = useCallback(
		async (ui: ResponsiveUIEnum) => {
			if (!isDesktop) {
				setPOICard(undefined);
				setInfo(undefined);
				setUI(ui);
				setBottomSheetMinHeight(window.innerHeight * 0.4 - 10);
				setBottomSheetHeight(window.innerHeight * 0.4);
				setTimeout(() => {
					setBottomSheetMinHeight(BottomSheetHeights.explore.min);
					setBottomSheetHeight(window.innerHeight);
				}, 500);
			}

			await select(undefined);
			onClosePopUp && onClosePopUp();
		},
		[isDesktop, select, onClosePopUp, setPOICard, setInfo, setUI, setBottomSheetMinHeight, setBottomSheetHeight]
	);

	const onGetDirections = useCallback(() => {
		setDirections({ info, isEsriLimitation });
		clearPoiList();
		if (!isDesktop) {
			onClose(ResponsiveUIEnum.direction_to_routes);
		}
	}, [clearPoiList, info, isDesktop, isEsriLimitation, onClose, setDirections]);

	const renderRouteInfo = useMemo(() => {
		if (currentLocationData?.error || isCurrentLocationDisabled) {
			return (
				<Flex data-testid="permission-denied-error-container" gap={3} alignItems="center">
					<Text variation="info" textAlign={isLtr ? "start" : "end"}>
						{isCurrentLocationDisabled ? t("popup__cl_disabled.text") : t("popup__cl_denied.text")}
					</Text>
					<IconInfo
						className="location-permission-denied-info-icon"
						data-tooltip-id="location-permission-denied-info"
						data-tooltip-place="top"
						data-tooltip-content={isCurrentLocationDisabled ? t("tooltip__cl_grab.text") : t("tooltip__cl_denied.text")}
					/>
					<Tooltip id="location-permission-denied-info" />
				</Flex>
			);
		} else if (isEsriLimitation) {
			return (
				<Flex data-testid="esri-limitation-message-container" gap={0} direction={"column"}>
					<Flex className="localize-geofence-distance" gap="0.3rem" direction={isLanguageRTL ? "row-reverse" : "row"}>
						<Text className="bold" variation="secondary" marginRight="0.3rem">
							{localizeGeodesicDistance}
						</Text>
						<Text className="bold" variation="secondary">
							{geodesicDistanceUnit}
						</Text>
					</Flex>
					<Text style={{ marginTop: "0px" }} variation="info" textAlign={isLtr ? "start" : "end"}>
						{currentMapUnit === METRIC ? t("popup__esri_limitation_1.text") : t("popup__esri_limitation_2.text")}
					</Text>
				</Flex>
			);
		} else if (!isFetchingRoute && !routeData) {
			return (
				<Flex data-testid="here-message-container" gap={0} direction={"column"}>
					<Flex className="localize-geofence-distance" gap="0.3rem" direction={isLanguageRTL ? "row-reverse" : "row"}>
						{!isLoading && (
							<>
								<Text className="bold" variation="secondary" marginRight="0.3rem">
									{localizeGeodesicDistance}
								</Text>
								<Text className="bold" variation="secondary">
									{geodesicDistanceUnit}
								</Text>
							</>
						)}
					</Flex>
					<Text style={{ marginTop: "0px" }} variation="info">
						{!isLoading && t("popup__route_not_found.text")}
					</Text>
				</Flex>
			);
		} else {
			const timeInSeconds = routeData?.Summary?.DurationSeconds || 0;

			return (
				<View data-testid="route-info-container" className="route-info">
					{!isFetchingRoute && geodesicDistanceUnit ? (
						<Flex className="localize-geofence-distance" gap="0.3rem" direction={isLanguageRTL ? "row-reverse" : "row"}>
							<Text className="bold" variation="secondary">
								{localizeGeodesicDistance}
							</Text>
							<Text className="bold" variation="secondary">
								{geodesicDistanceUnit}
							</Text>
						</Flex>
					) : (
						<Placeholder width={30} display="inline-block" />
					)}
					<View />
					<IconCar />
					{!isFetchingRoute && timeInSeconds ? (
						<Text className="bold" variation="secondary">
							{humanReadableTime(timeInSeconds * 1000, currentLang, t)}
						</Text>
					) : (
						<Placeholder width={30} display="inline-block" />
					)}
				</View>
			);
		}
	}, [
		currentLocationData?.error,
		isCurrentLocationDisabled,
		isEsriLimitation,
		isFetchingRoute,
		routeData,
		isLtr,
		t,
		isLanguageRTL,
		localizeGeodesicDistance,
		geodesicDistanceUnit,
		currentMapUnit,
		isLoading,
		currentLang
	]);

	const address = useMemo(() => {
		if (info.Place?.Label) {
			const split = info.Place.Label.split(",");
			split.shift();
			return split.join(",").trim();
		} else {
			return `${latitude}, ${longitude}`;
		}
	}, [info, latitude, longitude]);

	const POIBody = useCallback(
		() => (
			<Flex
				data-testid="poi-body"
				ref={POICardRef}
				className={!isDesktop ? "poi-only-container" : ""}
				direction="column"
			>
				<View className="popup-icon-close-container">
					<IconClose onClick={() => onClose(ResponsiveUIEnum.search)} />
				</View>
				{isDesktop && (
					<View className="triangle-container">
						<View />
					</View>
				)}
				<View className="info-container">
					<Text className="bold" variation="secondary" fontSize="20px" lineHeight="28px">{`${
						info.Place?.Label?.split(",")[0]
					}`}</Text>
					<View className="address-container">
						<View>
							<Text variation="tertiary">{address}</Text>
						</View>
						{isDesktop && (
							<IconCopyPages
								data-testid="copy-icon"
								className="copy-icon"
								onClick={() => navigator.clipboard.writeText(`${info.Place?.Label?.split(",")[0]}` + ", " + address)}
							/>
						)}
					</View>
					{renderRouteInfo}
					<Button
						data-testid="directions-button"
						ref={r => r?.blur()}
						className="directions-button"
						variation="primary"
						onClick={onGetDirections}
					>
						<IconDirections />
						<Text className="bold" variation="primary" fontSize={"0.92rem"}>
							{t("popup__directions.text")}
						</Text>
					</Button>
				</View>
			</Flex>
		),
		[address, info.Place?.Label, isDesktop, onClose, onGetDirections, renderRouteInfo, t]
	);

	useEffect(() => {
		if (!isDesktop) {
			const ch = POICardRef?.current?.clientHeight || 140;
			ui !== ResponsiveUIEnum.poi_card && setUI(ResponsiveUIEnum.poi_card);
			setPOICard(<POIBody />);
			setBottomSheetMinHeight(ch + 60);
			setBottomSheetHeight(ch + 70);
		}
	}, [
		POIBody,
		latitude,
		longitude,
		isDesktop,
		setBottomSheetHeight,
		setBottomSheetMinHeight,
		setPOICard,
		setUI,
		bottomSheetHeight,
		ui
	]);

	if (isDesktop) {
		return (
			<PopupGl
				data-testid="popup-container"
				className="popup-container"
				closeButton={false}
				anchor={isDesktop ? "left" : "bottom"}
				offset={active ? 27 : 22}
				style={{ maxWidth: isDesktop ? "28.62rem" : "20rem", width: "100%" }}
				longitude={longitude as number}
				latitude={latitude as number}
			>
				<POIBody />
			</PopupGl>
		);
	} else {
		return null;
	}
};

export default memo(Popup);
