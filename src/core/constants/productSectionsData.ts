/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import IconGeofenceColor from "@demo/assets/icons/icon-geofence-color.svg";
import IconMap from "@demo/assets/icons/icon-map.svg";
import IconPlace from "@demo/assets/icons/icon-place.svg";
import IconRouteColor from "@demo/assets/icons/icon-route-color.svg";
import IconTrackers from "@demo/assets/icons/icon-trackers.svg";

import appConfig from "./appConfig";

const {
	LINKS: {
		SEARCH_PLACE_INDEX_FOR_TEXT_URL,
		SEARCH_PLACE_INDEX_FOR_POSITION_URL,
		SEARCH_PLACE_INDEX_FOR_SUGGESTIONS_URL,
		GET_PLACE_URL,
		GET_MAP_GLYPHS_URL,
		GET_MAP_SPRITES_URL,
		GET_MAP_STYLE_DESCRIPTOR_URL,
		GET_MAP_TILE_URL,
		CALCULATE_ROUTE_URL,
		CALCULATE_ROUTE_MATRIX_URL,
		CREATE_GEOFENCE_COLLECTION_URL,
		UPDATE_GEOFENCE_COLLECTION_URL,
		DELETE_GEOFENCE_COLLECTION_URL,
		DESCRIBE_GEOFENCE_COLLECTION_URL,
		PUT_GEOFENCE_URL,
		GET_GEOFENCE_URL,
		LIST_GEOFENCES_URL,
		BATCH_PUT_GEOFENCE_URL,
		BATCH_DELETE_GEOFENCE_URL,
		BATCH_EVALUATE_GEOFENCES_URL,
		CREATE_TRACKER_URL,
		DESCRIBE_TRACKER_URL,
		UPDATE_TRACKER_URL,
		DELETE_TRACKER_URL,
		LIST_TRACKERS_URL,
		ASSOCIATE_TRACKER_CONSUMER_URL,
		DISASSOCIATE_TRACKER_CONSUMER_URL,
		LIST_TRACKER_CONSUMERS_URL,
		GET_DEVICE_POSITION_URL,
		BATCH_GET_DEVICE_POSITION_URL,
		BATCH_UPDATE_DEVICE_POSITION_URL,
		LIST_DEVICE_POSITIONS_URL,
		GET_DEVICE_POSITION_HISTORY_URL,
		BATCH_DELETE_DEVICE_POSITION_HISTORY_URL
	}
} = appConfig;

const productSectionsData: {
	Icon: string;
	title: string;
	products: {
		title: string;
		infoText: string;
		links: {
			label: string;
			href: string;
		}[];
	}[];
}[] = [
	{
		Icon: IconPlace,
		title: "PRODUCT.PLACES.TITLE",
		products: [
			{
				title: "PRODUCT.PLACES.PRODUCT_1.TITLE",
				infoText: "PRODUCT.PLACES.PRODUCT_1.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.PLACES.PRODUCT_1.LINK_LABEL",
						href: SEARCH_PLACE_INDEX_FOR_TEXT_URL
					}
				]
			},
			{
				title: "PRODUCT.PLACES.PRODUCT_2.TITLE",
				infoText: "PRODUCT.PLACES.PRODUCT_2.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.PLACES.PRODUCT_2.LINK_LABEL",
						href: SEARCH_PLACE_INDEX_FOR_POSITION_URL
					}
				]
			},
			{
				title: "PRODUCT.PLACES.PRODUCT_3.TITLE",
				infoText: "PRODUCT.PLACES.PRODUCT_3.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.PLACES.PRODUCT_3.LINK_LABEL",
						href: SEARCH_PLACE_INDEX_FOR_SUGGESTIONS_URL
					}
				]
			},
			{
				title: "PRODUCT.PLACES.PRODUCT_4.TITLE",
				infoText: "PRODUCT.PLACES.PRODUCT_4.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.PLACES.PRODUCT_4.LINK_LABEL",
						href: GET_PLACE_URL
					}
				]
			}
		]
	},
	{
		Icon: IconMap,
		title: "PRODUCT.MAPS.TITLE",
		products: [
			{
				title: "PRODUCT.MAPS.PRODUCT_1.TITLE",
				infoText: "PRODUCT.MAPS.PRODUCT_1.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.MAPS.PRODUCT_1.LINK_LABEL",
						href: GET_MAP_GLYPHS_URL
					}
				]
			},
			{
				title: "PRODUCT.MAPS.PRODUCT_2.TITLE",
				infoText: "PRODUCT.MAPS.PRODUCT_2.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.MAPS.PRODUCT_2.LINK_LABEL",
						href: GET_MAP_SPRITES_URL
					}
				]
			},
			{
				title: "PRODUCT.MAPS.PRODUCT_3.TITLE",
				infoText: "PRODUCT.MAPS.PRODUCT_3.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.MAPS.PRODUCT_3.LINK_LABEL",
						href: GET_MAP_STYLE_DESCRIPTOR_URL
					}
				]
			},
			{
				title: "PRODUCT.MAPS.PRODUCT_4.TITLE",
				infoText: "PRODUCT.MAPS.PRODUCT_4.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.MAPS.PRODUCT_4.LINK_LABEL",
						href: GET_MAP_TILE_URL
					}
				]
			}
		]
	},
	{
		Icon: IconRouteColor,
		title: "PRODUCT.ROUTES.TITLE",
		products: [
			{
				title: "PRODUCT.ROUTES.PRODUCT_1.TITLE",
				infoText: "PRODUCT.ROUTES.PRODUCT_1.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.ROUTES.PRODUCT_1.LINK_LABEL",
						href: CALCULATE_ROUTE_URL
					}
				]
			},
			{
				title: "PRODUCT.ROUTES.PRODUCT_2.TITLE",
				infoText: "PRODUCT.ROUTES.PRODUCT_2.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.ROUTES.PRODUCT_2.LINK_LABEL",
						href: CALCULATE_ROUTE_MATRIX_URL
					}
				]
			}
		]
	},
	{
		Icon: IconGeofenceColor,
		title: "PRODUCT.GEOFENCES.TITLE",
		products: [
			{
				title: "PRODUCT.GEOFENCES.PRODUCT_1.TITLE",
				infoText: "PRODUCT.GEOFENCES.PRODUCT_1.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.GEOFENCES.PRODUCT_1.LINK_LABEL_1",
						href: CREATE_GEOFENCE_COLLECTION_URL
					},
					{
						label: "PRODUCT.GEOFENCES.PRODUCT_1.LINK_LABEL_2",
						href: UPDATE_GEOFENCE_COLLECTION_URL
					},
					{
						label: "PRODUCT.GEOFENCES.PRODUCT_1.LINK_LABEL_3",
						href: DELETE_GEOFENCE_COLLECTION_URL
					},
					{
						label: "PRODUCT.GEOFENCES.PRODUCT_1.LINK_LABEL_4",
						href: DESCRIBE_GEOFENCE_COLLECTION_URL
					}
				]
			},
			{
				title: "PRODUCT.GEOFENCES.PRODUCT_2.TITLE",
				infoText: "PRODUCT.GEOFENCES.PRODUCT_2.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.GEOFENCES.PRODUCT_2.LINK_LABEL_1",
						href: PUT_GEOFENCE_URL
					},
					{
						label: "PRODUCT.GEOFENCES.PRODUCT_2.LINK_LABEL_2",
						href: GET_GEOFENCE_URL
					},

					{
						label: "PRODUCT.GEOFENCES.PRODUCT_2.LINK_LABEL_3",
						href: LIST_GEOFENCES_URL
					}
				]
			},
			{
				title: "PRODUCT.GEOFENCES.PRODUCT_3.TITLE",
				infoText: "PRODUCT.GEOFENCES.PRODUCT_3.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.GEOFENCES.PRODUCT_3.LINK_LABEL_1",
						href: BATCH_PUT_GEOFENCE_URL
					},
					{
						label: "PRODUCT.GEOFENCES.PRODUCT_3.LINK_LABEL_2",
						href: BATCH_DELETE_GEOFENCE_URL
					}
				]
			},
			{
				title: "PRODUCT.GEOFENCES.PRODUCT_4.TITLE",
				infoText: "PRODUCT.GEOFENCES.PRODUCT_4.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.GEOFENCES.PRODUCT_4.LINK_LABEL_1",
						href: BATCH_EVALUATE_GEOFENCES_URL
					}
				]
			}
		]
	},
	{
		Icon: IconTrackers,
		title: "PRODUCT.TRACKERS.TITLE",
		products: [
			{
				title: "PRODUCT.TRACKERS.PRODUCT_1.TITLE",
				infoText: "PRODUCT.TRACKERS.PRODUCT_1.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.TRACKERS.PRODUCT_1.LINK_LABEL_1",
						href: CREATE_TRACKER_URL
					},
					{
						label: "PRODUCT.TRACKERS.PRODUCT_1.LINK_LABEL_2",
						href: DESCRIBE_TRACKER_URL
					},
					{
						label: "PRODUCT.TRACKERS.PRODUCT_1.LINK_LABEL_3",
						href: UPDATE_TRACKER_URL
					},
					{
						label: "PRODUCT.TRACKERS.PRODUCT_1.LINK_LABEL_4",
						href: DELETE_TRACKER_URL
					},
					{
						label: "PRODUCT.TRACKERS.PRODUCT_1.LINK_LABEL_5",
						href: LIST_TRACKERS_URL
					}
				]
			},
			{
				title: "PRODUCT.TRACKERS.PRODUCT_2.TITLE",
				infoText: "PRODUCT.TRACKERS.PRODUCT_2.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.TRACKERS.PRODUCT_2.LINK_LABEL_1",
						href: ASSOCIATE_TRACKER_CONSUMER_URL
					},
					{
						label: "PRODUCT.TRACKERS.PRODUCT_2.LINK_LABEL_2",
						href: DISASSOCIATE_TRACKER_CONSUMER_URL
					},
					{
						label: "PRODUCT.TRACKERS.PRODUCT_2.LINK_LABEL_3",
						href: LIST_TRACKER_CONSUMERS_URL
					}
				]
			},
			{
				title: "PRODUCT.TRACKERS.PRODUCT_3.TITLE",
				infoText: "PRODUCT.TRACKERS.PRODUCT_3.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.TRACKERS.PRODUCT_3.LINK_LABEL_1",
						href: GET_DEVICE_POSITION_URL
					},

					{
						label: "PRODUCT.TRACKERS.PRODUCT_3.LINK_LABEL_2",
						href: BATCH_GET_DEVICE_POSITION_URL
					},

					{
						label: "PRODUCT.TRACKERS.PRODUCT_3.LINK_LABEL_3",
						href: BATCH_UPDATE_DEVICE_POSITION_URL
					},

					{
						label: "PRODUCT.TRACKERS.PRODUCT_3.LINK_LABEL_4",
						href: LIST_DEVICE_POSITIONS_URL
					}
				]
			},
			{
				title: "PRODUCT.TRACKERS.PRODUCT_4.TITLE",
				infoText: "PRODUCT.TRACKERS.PRODUCT_4.INFO_TEXT",
				links: [
					{
						label: "PRODUCT.TRACKERS.PRODUCT_4.LINK_LABEL_1",
						href: GET_DEVICE_POSITION_HISTORY_URL
					},
					{
						label: "PRODUCT.TRACKERS.PRODUCT_4.LINK_LABEL_2",
						href: BATCH_DELETE_DEVICE_POSITION_HISTORY_URL
					}
				]
			}
		]
	}
];

export default productSectionsData;
