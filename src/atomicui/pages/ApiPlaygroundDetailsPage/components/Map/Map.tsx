import { FC, useCallback, useEffect, useRef, useState } from "react";

import { withIdentityPoolId } from "@aws/amazon-location-utilities-auth-helper";
import { HereMapEnum } from "@demo/types";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./styles.scss";

interface MapProps {}

const Map: FC<MapProps> = ({}) => {
	const mapContainer = useRef<HTMLDivElement | null>(null);
	const map = useRef<maplibregl.Map | null>(null);
	const [gridLoader, setGridLoader] = useState(true);
	const [lng] = useState(67.1260922);
	const [lat] = useState(24.9244741);
	const [zoom] = useState(14);

	const identityPoolId = "us-east-1:2d870886-9661-4cec-a6f1-cf49925e236a";
	const region = identityPoolId.split(":")[0];

	const initMap = useCallback(async () => {
		if (!map.current) {
			// create an authentication helper instance using credentials from Cognito
			const authHelper = await withIdentityPoolId(identityPoolId);

			// create a new map instance
			map.current = new maplibregl.Map({
				container: (mapContainer.current as HTMLElement) || "map",
				center: [lng, lat],
				zoom: zoom,
				renderWorldCopies: false,
				style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${HereMapEnum.HERE_EXPLORE}/style-descriptor`,
				...authHelper.getMapAuthenticationOptions()
			});
		}
	}, [lat, lng, region, zoom]);

	useEffect(() => {
		initMap();
	}, []);

	return (
		<div className="map-wrapper">
			<div id="map" ref={mapContainer} className="map" />
		</div>
	);
};

export default Map;
