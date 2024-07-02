import { useMemo } from "react";

import { GetMapTileCommandInput } from "@aws-sdk/client-location";
import { useAwsMapService } from "@demo/services";
import { useAwsMapStore } from "@demo/stores";
import maplibregl from "maplibre-gl";

const useAwsMap = () => {
	const store = useAwsMapStore();
	const { setInitial } = store;
	const { setState } = useAwsMapStore;
	const awsMapService = useAwsMapService();

	const methods = useMemo(
		() => ({
			setMapRef: (mapRef: maplibregl.Map) => setState({ mapRef }),
			getMapTile: async (apiRequest: GetMapTileCommandInput) => {
				try {
					const response = await awsMapService.getMapTile(apiRequest);
					return response;
				} catch (error) {
					throw new Error((error as Error).message);
				}
			},
			resetStore: () => {
				setState({ mapRef: undefined });
				setInitial();
			}
		}),
		[awsMapService, setInitial, setState]
	);

	return { ...methods, ...store };
};

export default useAwsMap;
