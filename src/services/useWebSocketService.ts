/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useMemo } from "react";

import { AWSIoTProvider } from "@aws-amplify/pubsub";
import { showToast } from "@demo/core/Toast";
import { useAmplifyAuth } from "@demo/hooks";
import i18n from "@demo/locales";
import { ToastType } from "@demo/types";
import { Amplify, Hub, PubSub } from "aws-amplify";

Hub.listen("pubsub", ({ payload: { data } }) => console.info({ connectionState: data.connectionState }));

const useWebSocketService = () => {
	const { region, webSocketUrl, credentials } = useAmplifyAuth();
	const url = useMemo(
		() =>
			webSocketUrl?.startsWith("http://") || webSocketUrl?.startsWith("https://")
				? webSocketUrl.split("//")[1].replace("/", "")
				: webSocketUrl,
		[webSocketUrl]
	);

	return useMemo(() => {
		Amplify.addPluggable(
			new AWSIoTProvider({
				aws_pubsub_region: region,
				aws_pubsub_endpoint: `wss://${url}/mqtt`,
				clientId: credentials?.identityId
			})
		);

		const subscription = PubSub.subscribe(`${credentials?.identityId}/tracker`, {
			provider: "AWSIoTProvider"
		}).subscribe({
			next: data => {
				console.info({ data });
				if (data.value.source === "aws.geo") {
					const msg =
						i18n.dir() === "ltr"
							? `${
									data.value.trackerEventType === "ENTER"
										? i18n.t("show_toast__entered.text")
										: i18n.t("show_toast__exited.text")
							  } ${data.value.geofenceId} ${i18n.t("geofence.text")}`
							: `${i18n.t("geofence.text")} ${data.value.geofenceId} ${
									data.value.trackerEventType === "ENTER"
										? i18n.t("show_toast__entered.text")
										: i18n.t("show_toast__exited.text")
							  }`;
					showToast({ content: msg, type: ToastType.INFO });
				}
			},
			error: error => console.error({ error }),
			complete: () => console.info("complete")
		});

		return subscription;
	}, [region, url, credentials?.identityId]);
};

export default useWebSocketService;
