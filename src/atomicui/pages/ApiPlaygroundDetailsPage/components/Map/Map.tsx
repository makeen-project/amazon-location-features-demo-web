import { FC, useCallback, useState } from "react";

import { Flex, View } from "@aws-amplify/ui-react";
import { appConfig } from "@demo/core/constants";
import { useAmplifyAuth, useAmplifyMap, useCredsManager } from "@demo/hooks";
import { HereMapEnum } from "@demo/types";
import { Signer } from "aws-amplify";
import { LngLatBoundsLike } from "mapbox-gl";
import { Map as ReacMapGlMap } from "react-map-gl";
import "./styles.scss";

const {
	MAP_RESOURCES: { MAX_BOUNDS }
} = appConfig;

interface MapProps {
	shouldRenderMap: boolean;
}

const Map: FC<MapProps> = ({ shouldRenderMap }) => {
	const [gridLoader, setGridLoader] = useState(true);
	useCredsManager();
	const { credentials, region } = useAmplifyAuth();
	const { viewpoint } = useAmplifyMap();

	const transformRequest = useCallback(
		(url: string, resourceType: string) => {
			let newUrl = url;

			if (resourceType === "Style" && !newUrl.includes("://") && region) {
				newUrl = `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${newUrl}/style-descriptor`;
			}

			if (newUrl.includes("amazonaws.com")) {
				return {
					url: Signer.signUrl(newUrl, {
						access_key: credentials?.accessKeyId,
						secret_key: credentials?.secretAccessKey,
						session_token: credentials?.sessionToken
					})
				};
			}

			return { url: newUrl };
		},
		[region, credentials]
	);

	return shouldRenderMap ? (
		<Flex className="map">
			<ReacMapGlMap
				style={{ width: "100%", height: "100%" }}
				// ref={mapViewRef}
				// cursor={isEditingRoute ? "crosshair" : ""}
				maxTileCacheSize={100}
				zoom={10}
				initialViewState={{ ...viewpoint, zoom: 10 }}
				mapStyle={HereMapEnum.HERE_EXPLORE}
				minZoom={2}
				maxBounds={MAX_BOUNDS.DEFAULT as LngLatBoundsLike}
				// onClick={handleMapClick}
				onLoad={() => {
					// onLoad();
					console.log("MAP LOADED");
				}}
				// onZoom={({ viewState }) => setZoom(viewState.zoom)}
				onError={error => {
					console.log({ error });
					// errorHandler(error.error)
				}}
				onIdle={() => {
					gridLoader && setGridLoader(false);
				}}
				transformRequest={transformRequest}
				attributionControl={false}
			>
				<View className={gridLoader ? "loader-container" : ""}></View>
			</ReacMapGlMap>
		</Flex>
	) : null;
};

export default Map;
