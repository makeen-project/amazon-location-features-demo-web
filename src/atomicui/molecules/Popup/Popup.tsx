/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Button, Flex, Placeholder, Text, View } from "@aws-amplify/ui-react";
import { IconCar, IconClose, IconCopyPages, IconDirections, IconInfo } from "@demo/assets";
import { useAmplifyMap, useAwsPlace, useAwsRoute, useMediaQuery } from "@demo/hooks";
import { DistanceUnitEnum, MapProviderEnum, MapUnitEnum, SuggestionType, TravelMode } from "@demo/types";

import { humanReadableTime } from "@demo/utils/dateTimeUtils";
import { calculateGeodesicDistance } from "@demo/utils/geoCalculation";
import { Units } from "@turf/turf";
import { CalculateRouteRequest, CalculateRouteResponse, Position } from "aws-sdk/clients/location";
import { useTranslation } from "react-i18next";
import { Popup as PopupGl } from "react-map-gl";
import { Tooltip } from "react-tooltip";
import "./styles.scss";

const { METRIC } = MapUnitEnum;
const { KILOMETERS, KILOMETERS_SHORT, METERS_SHORT, MILES, MILES_SHORT, FEET_SHORT } = DistanceUnitEnum;

interface Props {
	active: boolean;
	info: SuggestionType;
	select: (id?: string) => Promise<void>;
	onClosePopUp?: () => void;
}
const Popup: React.FC<Props> = ({ active, info, select, onClosePopUp }) => {
	const [routeData, setRouteData] = useState<CalculateRouteResponse>();
	const {
		currentLocationData,
		viewpoint,
		mapProvider: currentMapProvider,
		mapUnit: currentMapUnit,
		isCurrentLocationDisabled
	} = useAmplifyMap();
	const { clearPoiList } = useAwsPlace();
	const { getRoute, setDirections, isFetchingRoute } = useAwsRoute();
	const [longitude, latitude] = info.Place?.Geometry.Point as Position;
	const isDesktop = useMediaQuery("(min-width: 1024px)");
	const { t, i18n } = useTranslation();
	const langDir = i18n.dir();
	const isLtr = langDir === "ltr";

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

	const geodesicDistanceWithUnit = useMemo(
		() =>
			geodesicDistance
				? currentMapUnit === METRIC
					? geodesicDistance < 1
						? `${geodesicDistance * 1000} ${METERS_SHORT}`
						: `${geodesicDistance.toFixed(2)} ${KILOMETERS_SHORT}`
					: geodesicDistance < 1
					? `${parseInt((geodesicDistance * 5280).toString())} ${FEET_SHORT}`
					: `${geodesicDistance.toFixed(2)} ${MILES_SHORT}`
				: "",
		[geodesicDistance, currentMapUnit]
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
			] as Position,
			DestinationPosition: [longitude, latitude],
			DistanceUnit: currentMapUnit === METRIC ? KILOMETERS : MILES,
			TravelMode: TravelMode.CAR
		};
		const r = await getRoute(params as CalculateRouteRequest);
		setRouteData(r);
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

	const onClose = useCallback(async () => {
		await select(undefined);
		onClosePopUp && onClosePopUp();
	}, [select, onClosePopUp]);

	const onGetDirections = () => {
		setDirections({ info, isEsriLimitation });
		onClose();
		clearPoiList();
	};

	const renderRouteInfo = useMemo(() => {
		if (currentLocationData?.error || isCurrentLocationDisabled) {
			return (
				<Flex data-testid="permission-denied-error-container" gap={3} alignItems="center">
					<Text variation="info" textAlign={isLtr ? "start" : "end"}>
						{isCurrentLocationDisabled ? t("POPUP.CURRENT_LOCATION_DISABLED") : t("POPUP.CURRENT_LOCATION_DENIED")}
					</Text>
					<IconInfo
						className="location-permission-denied-info-icon"
						data-tooltip-id="location-permission-denied-info"
						data-tooltip-place="top"
						data-tooltip-content={isCurrentLocationDisabled ? t("TOOLTIP.CL_GRAB") : t("TOOLTIP.CL_DENIED")}
					/>
					<Tooltip id="location-permission-denied-info" />
				</Flex>
			);
		} else if (isEsriLimitation) {
			return (
				<Flex data-testid="esri-limitation-message-container" gap={0} direction={"column"}>
					<Text className="bold" variation="secondary">
						{geodesicDistanceWithUnit}
					</Text>
					<Text style={{ marginTop: "0px" }} variation="info" textAlign={isLtr ? "start" : "end"}>
						{currentMapUnit === METRIC ? t("POPUP.ESRI_LIMITATION_1") : t("POPUP.ESRI_LIMITATION_2")}
					</Text>
				</Flex>
			);
		} else if (!isFetchingRoute && !routeData) {
			return (
				<Flex data-testid="here-message-container" gap={0} direction={"column"}>
					<Text className="bold" variation="secondary">
						{geodesicDistanceWithUnit}
					</Text>
					<Text style={{ marginTop: "0px" }} variation="info">
						{t("POPUP.ROUTE_NOT_FOUND")}
					</Text>
				</Flex>
			);
		} else {
			const timeInSeconds = routeData?.Summary.DurationSeconds || 0;

			return (
				<View data-testid="route-info-container" className="route-info">
					{!isFetchingRoute && geodesicDistanceWithUnit ? (
						<Text className="bold" variation="secondary">
							{geodesicDistanceWithUnit}
						</Text>
					) : (
						<Placeholder width={30} display="inline-block" />
					)}
					<View />
					<IconCar />
					{!isFetchingRoute && timeInSeconds ? (
						<Text className="bold" variation="secondary">
							{humanReadableTime(timeInSeconds * 1000)}
						</Text>
					) : (
						<Placeholder width={30} display="inline-block" />
					)}
				</View>
			);
		}
	}, [
		currentLocationData,
		isCurrentLocationDisabled,
		geodesicDistanceWithUnit,
		currentMapUnit,
		isEsriLimitation,
		routeData,
		isFetchingRoute,
		t,
		isLtr
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
			<View className="popup-icon-close-container" onClick={onClose}>
				<IconClose />
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
					<IconCopyPages
						data-testid="copy-icon"
						className="copy-icon"
						onClick={() => navigator.clipboard.writeText(`${info.Place?.Label?.split(",")[0]}` + ", " + address)}
					/>
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
						{t("POPUP.DIRECTIONS")}
					</Text>
				</Button>
			</View>
		</PopupGl>
	);
};

export default Popup;
