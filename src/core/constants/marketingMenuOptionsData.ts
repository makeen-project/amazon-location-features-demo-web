/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import IconCodeMenu from "@demo/assets/icons/icon-code-menu-icon.svg";
import IconCompassMenu from "@demo/assets/icons/icon-compass-menu-icon.svg";
// import IconCubesMenu from "@demo/assets/icons/icon-cubes-menu-icon.svg";
import IconPlayMenu from "@demo/assets/icons/icon-play-menu-icon.svg";

import appConfig from "@demo/core/constants/appConfig";

const {
	ENV: {
		// APPLE_APP_STORE_LINK,
		GOOGLE_PLAY_STORE_LINK
	},
	ROUTES: {
		OVERVIEW,
		// PRODUCT,
		DEMO,
		SAMPLES
	}
} = appConfig;

const marketingMenuOptionsData = [
	{
		label: "HEADER.OVERVIEW",
		link: OVERVIEW,
		iconBeforeLink: IconCompassMenu,
		iconContainerClass: "menu-item-icon"
	},
	// {
	// 	label: "HEADER.PRODUCT",
	// 	link: PRODUCT,
	// 	iconBeforeLink: IconCubesMenu,
	// 	iconContainerClass: "menu-item-icon"
	// },
	{
		label: "DEMO",
		link: DEMO,
		iconBeforeLink: IconPlayMenu,
		iconContainerClass: "menu-item-icon",
		subMenu: [
			{
				label: "WEB",
				link: DEMO,
				isExternalLink: true
			},
			// {
			// 	label: "IOS",
			// 	link: APPLE_APP_STORE_LINK
			// },
			{
				label: "ANDROID",
				link: GOOGLE_PLAY_STORE_LINK
			}
		]
	},
	{
		label: "HEADER.SAMPLES",
		link: SAMPLES,
		iconBeforeLink: IconCodeMenu,
		iconContainerClass: "menu-item-icon"
	}
];

export default marketingMenuOptionsData;
