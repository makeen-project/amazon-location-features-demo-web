/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { appConfig } from "core/constants";

const {
	ENV: { API_PLAYGROUND_URL }
} = appConfig;

export const downloadJson = async (params: { lng: string; key: string }) => {
	const bucketURL = `${API_PLAYGROUND_URL.trim()}/${params.lng}/${params.key}`;

	const res = await fetch(bucketURL, {
		method: "get"
	});

	if (res.status > 399) {
		throw res;
	}

	if (res.status === 200) {
		return await res.json();
	}
};
