/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useEffect, useMemo } from "react";

import { CognitoIdentity } from "@aws-sdk/client-cognito-identity";
import { showToast } from "@demo/core/Toast";
import appConfig from "@demo/core/constants/appConfig";
import { useAmplifyMap, useAwsClient } from "@demo/hooks";
import { useAmplifyAuthService } from "@demo/services";
import { useAmplifyAuthStore } from "@demo/stores";
import { AuthTokensType, ConnectFormValuesType, ToastType } from "@demo/types";
import { EventTypeEnum, RegionEnum } from "@demo/types/Enums";
import { record } from "@demo/utils/analyticsUtils";
import { errorHandler } from "@demo/utils/errorHandler";
import { getDomainName } from "@demo/utils/getDomainName";
import { clearStorage } from "@demo/utils/localstorageUtils";
import { setClosestRegion } from "@demo/utils/regionUtils";
import { transformCloudFormationLink } from "@demo/utils/transformCloudFormationLink";
import { useTranslation } from "react-i18next";

import useDeviceMediaQuery from "./useDeviceMediaQuery";

const {
	POOLS,
	WEB_SOCKET_URLS,
	ROUTES: { DEMO },
	PERSIST_STORAGE_KEYS: { FASTEST_REGION },
	MAP_RESOURCES: { GRAB_SUPPORTED_AWS_REGIONS }
} = appConfig;

const fallbackRegion = POOLS[Object.keys(POOLS)[0]];

const useAmplifyAuth = () => {
	const store = useAmplifyAuthStore();
	const { setInitial } = store;
	const { setState } = useAmplifyAuthStore;
	const amplifyAuthService = useAmplifyAuthService();
	const { resetStore: resetAwsClientStore } = useAwsClient();
	const { resetStore: resetAmplifyMapStore } = useAmplifyMap();
	const { t } = useTranslation();
	const { isDesktop } = useDeviceMediaQuery();

	useEffect(() => {
		if (window.location.pathname === DEMO && !store.identityPoolId) {
			(async () => {
				await setClosestRegion();
				const region = localStorage.getItem(FASTEST_REGION) ?? fallbackRegion;
				const identityPoolId = POOLS[region];
				const webSocketUrl = WEB_SOCKET_URLS[region];
				setState({ identityPoolId, region, webSocketUrl });
				window.location.reload();
			})();
		}
	}, [store.identityPoolId, setState]);

	const methods = useMemo(
		() => ({
			fetchCredentials: async () => {
				try {
					const { identityPoolId, region } = store;

					if (identityPoolId && region) {
						const credentials = await amplifyAuthService.fetchCredentials(identityPoolId, region);
						console.log({ credentials });
						setState({ credentials });
					}
				} catch (error) {
					errorHandler(error, t("error_handler__failed_fetch_creds.text") as string);
				}
			},
			validateIdentityPoolIdAndRegion: (IdentityPoolId: string, successCb?: () => void) => {
				const cognitoidentity = new CognitoIdentity({ region: IdentityPoolId.split(":")[0] });
				cognitoidentity.getId(
					{
						IdentityPoolId
					},
					err => {
						if (err) {
							console.error({ err });
							record(
								[
									{ EventType: EventTypeEnum.AWS_ACCOUNT_CONNECTION_FAILED, Attributes: { error: JSON.stringify(err) } }
								],
								["userAWSAccountConnectionStatus", "userAuthenticationStatus"]
							);
							showToast({
								content: t("show_toast__failed_to_connect_1.text"),
								type: ToastType.ERROR
							});
						} else {
							successCb && successCb();
							record(
								[{ EventType: EventTypeEnum.AWS_ACCOUNT_CONNECTION_SUCCESSFUL, Attributes: {} }],
								["userAWSAccountConnectionStatus", "userAuthenticationStatus"]
							);
						}
					}
				);
			},
			validateFormValues: (
				identityPoolId: string,
				userPoolId: string,
				userPoolWebClientId: string,
				domain: string,
				webSocketUrl: string,
				successCb?: () => void
			) => {
				/* Validates identityPoolId and region */
				methods.validateIdentityPoolIdAndRegion(
					identityPoolId,
					/* Success callback */
					() => {
						successCb && successCb();
					}
				);
			},
			clearCredentials: () => {
				setState({ credentials: undefined });
			},
			setAuthTokens: (authTokens?: AuthTokensType) => {
				setState({ authTokens });
			},
			setConnectFormValues: ({
				IdentityPoolId,
				UserDomain,
				UserPoolClientId,
				UserPoolId,
				WebSocketUrl
			}: ConnectFormValuesType) => {
				setState({
					identityPoolId: IdentityPoolId,
					region: IdentityPoolId.split(":")[0],
					userDomain: getDomainName(UserDomain),
					userPoolClientId: UserPoolClientId,
					userPoolId: UserPoolId,
					webSocketUrl: WebSocketUrl
				});
			},
			setIsUserAwsAccountConnected: (isUserAwsAccountConnected: boolean) => {
				setState({ isUserAwsAccountConnected });
			},
			onLogin: async () => {
				try {
					setState({ authTokens: undefined });
					await amplifyAuthService.login();
				} catch (error) {
					record(
						[{ EventType: EventTypeEnum.SIGN_IN_FAILED, Attributes: { error: JSON.stringify(error) } }],
						["userAWSAccountConnectionStatus", "userAuthenticationStatus"]
					);
					errorHandler(error, t("error_handler__failed_sign_in.text") as string);
				}
			},
			onLogout: async () => {
				try {
					await amplifyAuthService.logout();
					setState({ authTokens: undefined });
					record(
						[{ EventType: EventTypeEnum.SIGN_OUT_SUCCESSFUL, Attributes: {} }],
						["userAWSAccountConnectionStatus", "userAuthenticationStatus"]
					);
				} catch (error) {
					record(
						[{ EventType: EventTypeEnum.SIGN_OUT_FAILED, Attributes: { error: JSON.stringify(error) } }],
						["userAWSAccountConnectionStatus", "userAuthenticationStatus"]
					);
					errorHandler(error, t("error_handler__failed_sign_out.text") as string);
				}
			},
			onDisconnectAwsAccount: () => {
				clearStorage();
				methods.resetStore();
				resetAwsClientStore();
				resetAmplifyMapStore();
				setTimeout(() => window.location.reload(), 3000);
			},
			handleCurrentSession: async (resetAwsStore: () => void) => {
				try {
					await amplifyAuthService.getCurrentSession();
					await methods.fetchCredentials();
					resetAwsStore();
				} catch (error) {
					console.error("HANDLE_CURRENT_SESSION_ERROR:", JSON.stringify(error));
				}
			},
			switchToGrabMapRegionStack: () => {
				for (const region of GRAB_SUPPORTED_AWS_REGIONS) {
					const identityPoolId = POOLS[region];
					const webSocketUrl = WEB_SOCKET_URLS[region];

					if (identityPoolId) {
						setState({ identityPoolId, region, webSocketUrl, credentials: undefined });
						return;
					}
				}
			},
			switchToDefaultRegionStack: () => {
				const region = localStorage.getItem(FASTEST_REGION) ?? fallbackRegion;
				const identityPoolId = POOLS[region];
				const webSocketUrl = WEB_SOCKET_URLS[region];

				setState({ identityPoolId, region, webSocketUrl, credentials: undefined });
			},
			setAutoRegion: (autoRegion: boolean, region: "Automatic" | RegionEnum) => {
				if (autoRegion) {
					(async () => {
						await setClosestRegion();
						const region = localStorage.getItem(FASTEST_REGION) ?? fallbackRegion;
						const identityPoolId = POOLS[region];
						const webSocketUrl = WEB_SOCKET_URLS[region];
						setState({ identityPoolId, region, webSocketUrl, autoRegion, credentials: undefined });
					})();
				} else {
					!!POOLS[region] &&
						!!WEB_SOCKET_URLS[region] &&
						setState({
							identityPoolId: POOLS[region],
							region,
							webSocketUrl: WEB_SOCKET_URLS[region],
							autoRegion,
							credentials: undefined
						});
				}
			},
			setIdentityPoolIdRegionAndWebSocketUrl: (identityPoolId?: string, region?: string, webSocketUrl?: string) => {
				setState({ identityPoolId, region, webSocketUrl });
			},
			setStackRegion: (stackRegion?: { value: string; label: string }) => {
				setState({ stackRegion });
			},
			setCloudFormationLink: (cloudFormationLink: string) => {
				setState({ cloudFormationLink });
			},
			handleStackRegion: (option: { value: string; label: string }) => {
				const { label, value } = option;
				const newUrl = transformCloudFormationLink(value);

				if (isDesktop) {
					setState({ stackRegion: option, cloudFormationLink: newUrl });
				} else {
					const translatedLabel = t(label);
					const l = translatedLabel.slice(0, translatedLabel.indexOf(")") + 1);
					setState({ stackRegion: { label: l, value }, cloudFormationLink: newUrl });
				}
			},
			resetStore: () => {
				setState({
					credentials: undefined,
					authTokens: undefined,
					identityPoolId: undefined,
					region: undefined,
					userDomain: undefined,
					userPoolClientId: undefined,
					userPoolId: undefined,
					webSocketUrl: undefined,
					stackRegion: undefined
				});
				setInitial();
			}
		}),
		[store, amplifyAuthService, setState, t, resetAwsClientStore, resetAmplifyMapStore, isDesktop, setInitial]
	);

	return { ...methods, ...store };
};

export default useAmplifyAuth;
