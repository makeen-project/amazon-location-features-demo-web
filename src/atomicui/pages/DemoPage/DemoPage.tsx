/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { FC, useMemo } from "react";

import { appConfig } from "@demo/core/constants";
import { useAmplifyAuth } from "@demo/hooks";
import { EsriMapEnum } from "@demo/types";

import "mapbox-gl/dist/mapbox-gl.css";
import DemoMap from "./DemoMap";

const {
	ROUTES: { DEMO },
	MAP_RESOURCES: { MAP_ITEMS }
} = appConfig;

const DemoPage: FC = () => {
	const { identityPoolId, region, userPoolId, userPoolClientId, userDomain, configureAmplify } = useAmplifyAuth();

	const amplifyConfig = useMemo(
		() => ({
			Auth:
				userPoolId && userPoolClientId && userDomain
					? {
							identityPoolId,
							region,
							userPoolId,
							userPoolWebClientId: userPoolClientId,
							oauth: {
								domain: userDomain,
								scope: ["email", "openid", "profile"],
								redirectSignIn: `${window.location.origin}${DEMO}`,
								redirectSignOut: `${window.location.origin}${DEMO}?sign_out=true`,
								responseType: "code"
							}
					  }
					: {
							identityPoolId,
							region
					  },
			geo: {
				AmazonLocationService: {
					maps: {
						items: MAP_ITEMS,
						default: EsriMapEnum.ESRI_LIGHT
					},
					region
				}
			}
		}),
		[identityPoolId, region, userPoolId, userPoolClientId, userDomain]
	);

	/* Configure Auth and Geo via amplify */
	configureAmplify(amplifyConfig);

	return <DemoMap />;
};

export default DemoPage;
