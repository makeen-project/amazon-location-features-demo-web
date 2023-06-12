import IconPoweredByAws from "@demo/assets/icons/icon-powered-by-aws.svg";
import IconTwitch from "@demo/assets/icons/icon-twitch.svg";
import IconTwitter from "@demo/assets/icons/icon-twitter-solid.svg";
import IconYoutube from "@demo/assets/icons/icon-youtube.svg";
import appConfig from "@demo/core/constants/appConfig";

const {
	ENV: {
		// APPLE_APP_STORE_LINK,
		GOOGLE_PLAY_STORE_LINK
	},
	ROUTES: { DEMO, HELP },
	LINKS: {
		AMAZON_LOCATION_BLOGS,
		AMAZON_LOCATION_NEW,
		AMAZON_LOCATION_GIT,
		AWS_TERMS_AND_CONDITIONS,
		LEARN_MORE_URL,
		DEVELOPER_GUIDE_URL,
		CONSOLE_URL,
		LEARN_MAPS_URL,
		LEARN_PLACES_URL,
		LEARN_ROUTES_URL,
		LEARN_GEOFENCES_URL,
		LEARN_TRACKERS_URL,
		AWS_GETTING_STARTED_URL,
		AWS_FAQ_URL,
		AWS_PRICING_URL,
		AWS_WORKSHOP_URL,
		AWS_MAPS_API_URL,
		AWS_PLACES_API_URL,
		AWS_ROUTES_API_URL,
		AWS_GEOFENCES_API_URL,
		AWS_TRACKERS_API_URL,
		AWS_CONTACT_US_URL,
		CONNECT_AWS_IQ_URL,
		AWS_REPOST_URL,
		AWS_STACKOVERFLOW_URL,
		AWS_HOME_URL,
		AWS_TWITTER_URL,
		AWS_YOUTUBE_URL,
		AWS_TWITCH_URL,
		AWS_PRIVACY_URL
	}
} = appConfig;

const footerOptionsData = {
	menuGroupPrimary: [
		{
			label: "FOOTER.AL",
			menu: [
				{
					label: "FOOTER.LEARN_ABOUT_AL",
					link: LEARN_MORE_URL
				},
				{
					label: "FOOTER.GETTING_STARTED",
					link: AWS_GETTING_STARTED_URL
				},
				{
					label: "FOOTER.FAQ",
					link: AWS_FAQ_URL
				},
				{
					label: "FOOTER.PRICING",
					link: AWS_PRICING_URL
				},
				{
					label: "FOOTER.BLOGS",
					link: AMAZON_LOCATION_BLOGS
				},
				{
					label: "FOOTER.WHAT'S_NEW",
					link: AMAZON_LOCATION_NEW
				}
			]
		},
		{
			label: "FOOTER.DEVELOPERS",
			menu: [
				{
					label: "FOOTER.DEVELOPER_GUIDES",
					link: DEVELOPER_GUIDE_URL
				},
				{
					label: "FOOTER.WORKSHOP",
					link: AWS_WORKSHOP_URL
				},
				{
					label: "FOOTER.CONSOLE",
					link: CONSOLE_URL
				},
				{
					label: "FOOTER.LEARN_MAPS",
					link: LEARN_MAPS_URL
				},
				{
					label: "FOOTER.LEARN_PLACES",
					link: LEARN_PLACES_URL
				},
				{
					label: "FOOTER.LEARN_ROUTES",
					link: LEARN_ROUTES_URL
				},
				{
					label: "FOOTER.LEARN_GEOFENCES",
					link: LEARN_GEOFENCES_URL
				},
				{
					label: "FOOTER.LEARN_TRACKERS",
					link: LEARN_TRACKERS_URL
				}
			]
		},
		{
			label: "FOOTER.API",
			menu: [
				{
					label: "FOOTER.MAPS_API",
					link: AWS_MAPS_API_URL
				},
				{
					label: "FOOTER.PLACES_API",
					link: AWS_PLACES_API_URL
				},
				{
					label: "FOOTER.ROUTES_API",
					link: AWS_ROUTES_API_URL
				},
				{
					label: "FOOTER.GEOFENCES_API",
					link: AWS_GEOFENCES_API_URL
				},
				{
					label: "FOOTER.TRACKERS_API",
					link: AWS_TRACKERS_API_URL
				}
			]
		},
		{
			label: "FOOTER.COMMUNITY",
			menu: [
				{
					label: "FOOTER.CONTACT_US",
					link: AWS_CONTACT_US_URL
				},
				{
					label: "FOOTER.CONNECT_AWS_IQ",
					link: CONNECT_AWS_IQ_URL
				},
				{
					label: "FOOTER.GITHUB",
					link: AMAZON_LOCATION_GIT
				},
				{
					label: "FOOTER.AWS_RE:POST",
					link: AWS_REPOST_URL
				},
				{
					label: "FOOTER.STACK_OVERFLOW",
					link: AWS_STACKOVERFLOW_URL
				}
			]
		},
		{
			label: "DEMO",
			menu: [
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
				},
				{
					label: "FOOTER.HELP",
					link: HELP
				}
			]
		}
	],
	socials: {
		label: IconPoweredByAws,
		link: AWS_HOME_URL,
		icons: [
			{
				label: IconTwitter,
				link: AWS_TWITTER_URL
			},
			{
				label: IconYoutube,
				link: AWS_YOUTUBE_URL
			},
			{
				label: IconTwitch,
				link: AWS_TWITCH_URL
			}
		]
	},
	menuGroupSecondary: {
		label: "FOOTER.AWS_COPYRIGHT",
		menuGroup: [
			{
				label: "FOOTER.PRIVACY",
				link: AWS_PRIVACY_URL
			},
			{
				label: "FOOTER.SITE_TERMS",
				link: AWS_TERMS_AND_CONDITIONS
			}
		]
	}
};

export default footerOptionsData;
