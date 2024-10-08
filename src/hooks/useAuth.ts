/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { useEffect, useMemo } from "react";

import { CognitoIdentity } from "@aws-sdk/client-cognito-identity";
import { showToast } from "@demo/core/Toast";
import appConfig from "@demo/core/constants/appConfig";
import { useClient, useMap } from "@demo/hooks";
import { useAuthService } from "@demo/services";
import { useAuthStore } from "@demo/stores";
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
	IDENTITY_POOL_IDS,
	WEB_SOCKET_URLS,
	API_KEYS,
	ROUTES: { DEMO },
	PERSIST_STORAGE_KEYS: { FASTEST_REGION }
} = appConfig;
const fallbackRegion = Object.keys(IDENTITY_POOL_IDS)[0];
const fallbackApiKey = Object.values(API_KEYS)[0];

const useAuth = () => {
	const store = useAuthStore();
	const { setInitial } = store;
	const { setState } = useAuthStore;
	const authService = useAuthService();
	const { resetStore: resetClientStore } = useClient();
	const { resetStore: resetMapStore } = useMap();
	const { t } = useTranslation();
	const { isDesktop } = useDeviceMediaQuery();

	useEffect(() => {
		if (window.location.pathname === DEMO && (!store.apiKey || !store.identityPoolId)) {
			(async () => {
				await setClosestRegion();
				const region = localStorage.getItem(FASTEST_REGION) ?? fallbackRegion;
				setState({
					apiKey: region in API_KEYS ? API_KEYS[region] : fallbackApiKey,
					identityPoolId: IDENTITY_POOL_IDS[region],
					region,
					webSocketUrl: WEB_SOCKET_URLS[region]
				});
			})();
		}
	}, [store.apiKey, store.identityPoolId, setState]);

	const methods = useMemo(
		() => ({
			fetchLocationClientConfigWithApiKey: async (apiKey: string) => {
				try {
					const authHelper = await authService.withAPIKey(apiKey);
					const locationClientConfig = authHelper.getLocationClientConfig();
					return locationClientConfig;
				} catch (error) {
					errorHandler(error);
				}
			},
			fetchCredentials: async () => {
				try {
					const { identityPoolId, region, userPoolId, authTokens } = store;

					if (identityPoolId && region) {
						const cognitoIdentityCredentials = await authService.fetchCredentials(
							identityPoolId,
							region,
							authTokens,
							userPoolId
						);
						const credentials = { ...cognitoIdentityCredentials, authenticated: !!authTokens };
						setState({ credentials });
					}
				} catch (error) {
					if ((error as Error).name === "NotAuthorizedException") {
						await methods.refreshTokens();
						resetClientStore();
					} else {
						errorHandler(error, t("error_handler__failed_fetch_creds.text"));
					}
				}
			},
			fetchTokens: async (code: string) => {
				try {
					const { userDomain, userPoolClientId } = store;

					if (userDomain && userPoolClientId) {
						const response = await authService.fetchTokens(userDomain, userPoolClientId, code);

						if (!response.ok) {
							throw new Error(t("error_handler__failed_fetch_tokens.text"));
						}

						const authTokens = await response.json();
						setState({ authTokens });
						record(
							[{ EventType: EventTypeEnum.SIGN_IN_SUCCESSFUL, Attributes: {} }],
							["userAWSAccountConnectionStatus", "userAuthenticationStatus"]
						);
					}
				} catch (error) {
					record(
						[{ EventType: EventTypeEnum.SIGN_IN_FAILED, Attributes: {} }],
						["userAWSAccountConnectionStatus", "userAuthenticationStatus"]
					);
					errorHandler(error, t("error_handler__failed_fetch_tokens.text"));
				}
			},
			refreshTokens: async () => {
				try {
					const { userDomain, userPoolClientId, authTokens } = store;

					if (userDomain && userPoolClientId && authTokens) {
						const response = await authService.refreshTokens(userDomain, userPoolClientId, authTokens.refresh_token);

						if (!response.ok) {
							throw new Error(t("error_handler__failed_refresh_tokens.text"));
						}

						const newTokens = await response.json();
						setState({
							authTokens: { ...newTokens, refresh_token: authTokens.refresh_token },
							credentials: undefined
						});
					}
				} catch (error) {
					errorHandler(error, t("error_handler__failed_refresh_tokens.text"));
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
			validateFormValues: (identityPoolId: string, successCb?: () => void) => {
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
			onLogin: () => {
				try {
					const { userDomain, userPoolClientId } = store;

					if (userDomain && userPoolClientId) {
						setState({ authTokens: undefined });
						window.open(
							`https://${userDomain}/login?client_id=${userPoolClientId}&response_type=code&identity_provider=COGNITO&redirect_uri=${window.location.origin}${DEMO}`,
							"_self"
						);
					}
				} catch (error) {
					record(
						[{ EventType: EventTypeEnum.SIGN_IN_FAILED, Attributes: { error: JSON.stringify(error) } }],
						["userAWSAccountConnectionStatus", "userAuthenticationStatus"]
					);
					errorHandler(error, t("error_handler__failed_sign_in.text") as string);
				}
			},
			onLogout: () => {
				try {
					const { userDomain, userPoolClientId } = store;

					if (userDomain && userPoolClientId) {
						setState({ authTokens: undefined });
						window.open(
							`https://${userDomain}/logout?client_id=${userPoolClientId}&logout_uri=${window.location.origin}${DEMO}?sign_out=true`,
							"_self"
						);
					}
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
				resetClientStore(); // Clear credentials dependent clients only
				resetMapStore();
				setTimeout(() => window.location.reload(), 3000);
			},
			switchToDefaultRegionStack: () => {
				const region = localStorage.getItem(FASTEST_REGION) ?? fallbackRegion;
				setState({
					apiKey: region in API_KEYS ? API_KEYS[region] : fallbackApiKey,
					identityPoolId: IDENTITY_POOL_IDS[region],
					region,
					webSocketUrl: WEB_SOCKET_URLS[region],
					credentials: undefined
				});
			},
			setAutoRegion: (autoRegion: boolean, region: "Automatic" | RegionEnum) => {
				if (autoRegion) {
					(async () => {
						await setClosestRegion();
						const region = localStorage.getItem(FASTEST_REGION) ?? fallbackRegion;
						setState({
							apiKey: region in API_KEYS ? API_KEYS[region] : fallbackApiKey,
							identityPoolId: IDENTITY_POOL_IDS[region],
							region,
							webSocketUrl: WEB_SOCKET_URLS[region],
							autoRegion,
							credentials: undefined
						});
					})();
				} else {
					!!IDENTITY_POOL_IDS[region] &&
						!!WEB_SOCKET_URLS[region] &&
						setState({
							apiKey: region in API_KEYS ? API_KEYS[region] : fallbackApiKey,
							identityPoolId: IDENTITY_POOL_IDS[region],
							region,
							webSocketUrl: WEB_SOCKET_URLS[region],
							autoRegion,
							credentials: undefined
						});
				}
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
					stackRegion: undefined,
					apiKey: undefined
				});
				setInitial();
			}
		}),
		[store, authService, setState, t, resetClientStore, resetMapStore, isDesktop, setInitial]
	);

	return { ...methods, ...store };
};

export default useAuth;
