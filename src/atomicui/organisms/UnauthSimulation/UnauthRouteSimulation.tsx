import React, { useEffect, useMemo, useRef, useState } from "react";

import { View } from "@aws-amplify/ui-react";
import { IconCar } from "@demo/assets";
import { Layer, LayerProps, Marker, Source } from "react-map-gl";

interface UnauthRouteSimulationProps {
	id: string;
	name: string;
	geofenceCollection: string;
	coordinates: number[][];
	isPlaying: boolean;
	disabled: boolean;
}

const UnauthRouteSimulation: React.FC<UnauthRouteSimulationProps> = ({
	id,
	// name,
	// geofenceCollection,
	coordinates,
	isPlaying,
	disabled
}) => {
	const [idx, setIdx] = useState(0);
	const [trackerPos, setTrackerPos] = useState(coordinates[0]);
	const timeoutId = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		// Clear existing timeout when changing idx or pausing
		if (timeoutId.current) {
			clearTimeout(timeoutId.current);
			timeoutId.current = null;
		}

		if (isPlaying && !disabled) {
			if (idx < coordinates.length) {
				setTrackerPos(coordinates[idx]);
				// increment idx after 1 second
				timeoutId.current = setTimeout(() => setIdx(idx + 1), 1000);
			} else {
				// Reset index to 0 when end of coordinates array is reached
				setIdx(0);
				// Accordingly reset tracker position to starting point
				setTrackerPos(coordinates[0]);
			}
		}

		// Cleanup on component unmount or when dependencies change
		return () => {
			timeoutId.current && clearTimeout(timeoutId.current);
		};

		// Removed coordinates from dependencies to prevent resetting idx when coordinates change
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPlaying, idx]);

	const renderRoute = useMemo(() => {
		const passedLineJson:
			| GeoJSON.Feature<GeoJSON.Geometry>
			| GeoJSON.FeatureCollection<GeoJSON.Geometry>
			| GeoJSON.Geometry
			| string
			| undefined = {
			id: `${id}-passed-tracking-route-source`,
			type: "Feature",
			properties: {},
			geometry: {
				type: "LineString",
				coordinates: coordinates.slice(0, idx)
			}
		};
		const passedLayerProps: LayerProps = {
			id: `${id}-passed-tracking-route-layer`,
			type: "line",
			layout: {
				"line-join": "round",
				"line-cap": "round"
			},
			paint: {
				"line-color": disabled ? "#8E8E93" : idx > 0 ? "#008296" : "#8E8E93",
				"line-width": 4,
				"line-dasharray": [0.0001, 2]
			}
		};
		const pendingLineJson:
			| GeoJSON.Feature<GeoJSON.Geometry>
			| GeoJSON.FeatureCollection<GeoJSON.Geometry>
			| GeoJSON.Geometry
			| string
			| undefined = {
			id: `${id}-pending-tracking-route-source`,
			type: "Feature",
			properties: {},
			geometry: {
				type: "LineString",
				coordinates: coordinates.slice(idx, coordinates.length)
			}
		};
		const pendingLayerProps: LayerProps = {
			id: `${id}pending-tracking-route-layer`,
			type: "line",
			layout: {
				"line-join": "round",
				"line-cap": "round"
			},
			paint: { "line-color": "#8E8E93", "line-width": 4, "line-dasharray": [0.0001, 2] }
		};

		return (
			<>
				<Source type="geojson" data={passedLineJson}>
					<Layer {...passedLayerProps} />
				</Source>
				<Source type="geojson" data={pendingLineJson}>
					<Layer {...pendingLayerProps} />
				</Source>
			</>
		);
	}, [id, idx, disabled, coordinates]);

	const renderRouteTracker = useMemo(() => {
		return (
			<Marker
				key={`${id}-tracker`}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					zIndex: disabled ? 1 : 2,
					borderRadius: "1.23rem",
					backgroundColor: disabled ? "var(--grey-color)" : "var(--white-color)",
					width: "2.46rem",
					height: "2.46rem",
					boxShadow: "0 0 10px rgba(0, 0, 0, 0.202633)"
				}}
				longitude={trackerPos[0]}
				latitude={trackerPos[1]}
			>
				<IconCar width="1.54rem" height="1.54rem" />
			</Marker>
		);
	}, [disabled, trackerPos, id]);

	return (
		<View key={id}>
			{renderRoute}
			{renderRouteTracker}
		</View>
	);
};

export default UnauthRouteSimulation;
