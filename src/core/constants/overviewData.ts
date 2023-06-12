/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import IconGeofenceColor from "@demo/assets/icons/icon-geofence-color.svg";
import IconLock2 from "@demo/assets/icons/icon-lock2.svg";
import IconMap from "@demo/assets/icons/icon-map.svg";
import IconPiggy from "@demo/assets/icons/icon-piggy.svg";
import IconPlace from "@demo/assets/icons/icon-place.svg";
import IconPuzzle from "@demo/assets/icons/icon-puzzle.svg";
import IconRouteColor from "@demo/assets/icons/icon-route-color.svg";
import IconTrackers from "@demo/assets/icons/icon-trackers.svg";
import { appConfig } from "@demo/core/constants";

const {
	ROUTES: { DEMO },
	LINKS: {
		LEARN_MORE_URL,
		LEARN_MAPS_URL,
		LEARN_PLACES_URL,
		LEARN_ROUTES_URL,
		LEARN_TRACKERS_URL,
		LEARN_GEOFENCES_URL,
		CONSOLE_URL,
		DEVELOPER_GUIDE_URL,
		OVERVIEW_PRICING_URL,
		OVERVIEW_PRIVACY_URL,
		OVERVIEW_INTEGRATIONS_URL,
		AMAZON_LOCATION_DATA_PROVIDERS
	}
} = appConfig;

const overviewData = {
	heroSection: {
		heading: "OVERVIEW.HERO_SECTION.HEADING",
		subHeading: "OVERVIEW.HERO_SECTION.SUB_HEADING",
		tagLine: "",
		actionButton1Txt: "OVERVIEW.HERO_SECTION.TRY_DEMO",
		actionButton1URL: DEMO,
		actionButton2Txt: "OVERVIEW.LEARN_MORE",
		actionButton2URL: LEARN_MORE_URL
	},
	whyAmazonLocation: {
		heading: "OVERVIEW.WHY_AMAZON_LOCATION.HEADING",
		featureList: [
			{
				icon: IconPiggy,
				heading: "OVERVIEW.WHY_AMAZON_LOCATION.FEATURE_1.HEADING",
				subHeading: "OVERVIEW.WHY_AMAZON_LOCATION.FEATURE_1.SUB_HEADING",
				label: "OVERVIEW.WHY_AMAZON_LOCATION.FEATURE_1.LABEL",
				link: {
					label: "OVERVIEW.LEARN_MORE",
					link: OVERVIEW_PRICING_URL
				}
			},
			{
				icon: IconLock2,
				heading: "OVERVIEW.WHY_AMAZON_LOCATION.FEATURE_2.HEADING",
				subHeading: "OVERVIEW.WHY_AMAZON_LOCATION.FEATURE_2.SUB_HEADING",
				label: "OVERVIEW.WHY_AMAZON_LOCATION.FEATURE_2.LABEL",
				link: {
					label: "OVERVIEW.LEARN_MORE",
					link: OVERVIEW_PRIVACY_URL
				}
			},
			{
				icon: IconPuzzle,
				heading: "OVERVIEW.WHY_AMAZON_LOCATION.FEATURE_3.HEADING",
				subHeading: "OVERVIEW.WHY_AMAZON_LOCATION.FEATURE_3.SUB_HEADING",
				label: "OVERVIEW.WHY_AMAZON_LOCATION.FEATURE_3.LABEL",
				link: {
					label: "OVERVIEW.LEARN_MORE",
					link: OVERVIEW_INTEGRATIONS_URL
				}
			},
			{
				icon: IconPuzzle,
				heading: "OVERVIEW.WHY_AMAZON_LOCATION.FEATURE_4.HEADING",
				subHeading: "OVERVIEW.WHY_AMAZON_LOCATION.FEATURE_4.SUB_HEADING",
				label: "OVERVIEW.WHY_AMAZON_LOCATION.FEATURE_4.LABEL",
				link: {
					label: "OVERVIEW.LEARN_MORE",
					link: AMAZON_LOCATION_DATA_PROVIDERS
				}
			}
		]
	},
	maps: {
		icon: IconMap,
		heading: "OVERVIEW.MAPS.HEADING",
		subHeading: "OVERVIEW.MAPS.SUB_HEADING",
		label: "",
		link: {
			label: "OVERVIEW.LEARN_MORE",
			link: LEARN_MAPS_URL
		}
	},
	places: {
		icon: IconPlace,
		heading: "OVERVIEW.PLACES.HEADING",
		subHeading: "OVERVIEW.PLACES.SUB_HEADING",
		label: "",
		link: {
			label: "OVERVIEW.LEARN_MORE",
			link: LEARN_PLACES_URL
		}
	},
	routes: {
		icon: IconRouteColor,
		heading: "OVERVIEW.ROUTES.HEADING",
		subHeading: "OVERVIEW.ROUTES.SUB_HEADING",
		label: "",
		link: {
			label: "OVERVIEW.LEARN_MORE",
			link: LEARN_ROUTES_URL
		}
	},
	trackers: {
		icon: IconTrackers,
		heading: "OVERVIEW.TRACKERS.HEADING",
		subHeading: "OVERVIEW.TRACKERS.SUB_HEADING",
		label: "",
		link: {
			label: "OVERVIEW.LEARN_MORE",
			link: LEARN_TRACKERS_URL
		}
	},
	geofences: {
		icon: IconGeofenceColor,
		heading: "OVERVIEW.GEOFENCES.HEADING",
		subHeading: "OVERVIEW.GEOFENCES.SUB_HEADING",
		label: "",
		link: {
			label: "OVERVIEW.LEARN_MORE",
			link: LEARN_GEOFENCES_URL
		}
	},
	enoughTalkLetsBuild: {
		icon: IconGeofenceColor,
		heading: "OVERVIEW.ENOUGH_TALK_LETS_BUILD.HEADING",
		subHeading: "OVERVIEW.ENOUGH_TALK_LETS_BUILD.SUB_HEADING",
		label1: "OVERVIEW.ENOUGH_TALK_LETS_BUILD.LABEL_1",
		label2: "OVERVIEW.ENOUGH_TALK_LETS_BUILD.LABEL_2",
		actionButton1Txt: "OVERVIEW.ENOUGH_TALK_LETS_BUILD.ACTION_BUTTON_1_TXT",
		actionButton1URL: CONSOLE_URL,
		actionButton2Txt: "OVERVIEW.ENOUGH_TALK_LETS_BUILD.ACTION_BUTTON_2_TXT",
		actionButton2URL: DEVELOPER_GUIDE_URL
	}
};

export default overviewData;
