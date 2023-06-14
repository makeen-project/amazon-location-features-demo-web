/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { showToast } from "@demo/core/Toast";

import { appConfig } from "@demo/core/constants";
import i18n from "@demo/locales";
import { ToastType } from "@demo/types";

const {
	PERSIST_STORAGE_KEYS: { LOCAL_STORAGE_PREFIX, SHOULD_CLEAR_CREDENTIALS, AMPLIFY_AUTH_DATA },
	ROUTES: { ERROR_BOUNDARY }
} = appConfig;
const authLocalStorageKey = `${LOCAL_STORAGE_PREFIX}${AMPLIFY_AUTH_DATA}`;
const errors = {
	excluded: ["Too Many Requests"],
	missingCreds: "Missing credentials in config",
	codes: [403, 404],
	exceptions: ["ExpiredTokenException"]
};
let isStackCorrupted = false;

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const errorHandler = (error: any, message?: string) => {
	console.error("ERROR_HANDLER", JSON.stringify(error), "message:", message || "");
	const authLocalStorageKeyString = localStorage.getItem(authLocalStorageKey) as string;
	const authLocalStorageObj = JSON.parse(authLocalStorageKeyString);
	const isUserAwsAccountConnected = authLocalStorageObj.state.isUserAwsAccountConnected;
	const authTokens = authLocalStorageObj.state.authTokens;

	if (
		!!authTokens &&
		errors.codes.includes(error.statusCode || error.status) &&
		errors.exceptions.includes(error.code)
	) {
		showToast({ content: i18n.t("SHOW_TOAST.REFRESHING_SESSION"), type: ToastType.INFO });
		setTimeout(() => {
			localStorage.setItem(SHOULD_CLEAR_CREDENTIALS, "true");
			window.location.reload();
		}, 1500);
		return;
	} else {
		if (!isStackCorrupted && errors.codes.includes(error.statusCode || error.status)) {
			if (isUserAwsAccountConnected) {
				isStackCorrupted = true;
				showToast({ content: i18n.t("SHOW_TOAST.STACK_IS_CORRUPTED"), type: ToastType.ERROR });
				setTimeout(() => {
					localStorage.clear();
					window.location.reload();
				}, 3000);
				return;
			} else {
				window.location.replace(ERROR_BOUNDARY);
				showToast({ content: i18n.t("SHOW_TOAST.SOMETHING_WENT_WRONG"), type: ToastType.ERROR });
				return;
			}
		}
	}

	if (error instanceof Error) {
		const { message: apiErrorMsg } = error;

		if (!errors.excluded.includes(apiErrorMsg)) {
			if (apiErrorMsg.includes(errors.missingCreds)) {
				window.location.reload();
				return;
			}

			if (message) {
				showToast({ content: `${message}, ${apiErrorMsg}`, type: ToastType.ERROR });
				return;
			}
		}
	}
};
