/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Button, CheckboxField, Divider, Flex, Link, Radio, Text, View } from "@aws-amplify/ui-react";
import {
	IconAwsCloudFormation,
	IconCloud,
	IconGlobe,
	IconMapOutlined,
	IconPaintroller,
	IconPeopleArrows,
	IconShuffle
} from "@demo/assets";
import { DropdownEl, Modal } from "@demo/atomicui/atoms";
import { InputField } from "@demo/atomicui/molecules";
import { appConfig, languageSwitcherData, regionsData } from "@demo/core/constants";
import { useAmplifyAuth, useAmplifyMap, useAws, useAwsIot, usePersistedData } from "@demo/hooks";
import {
	ConnectFormValuesType,
	EsriMapEnum,
	MapProviderEnum,
	MapUnitEnum,
	SettingOptionEnum,
	SettingOptionItemType
} from "@demo/types";
import { AnalyticsEventActionsEnum, EventTypeEnum, TriggeredByEnum } from "@demo/types/Enums";
import { record } from "@demo/utils/analyticsUtils";
import { transformCloudFormationLink } from "@demo/utils/transformCloudFormationLink";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const {
	ENV: { CF_TEMPLATE, REGION_EAST, REGION_ASIA },
	ROUTES: { HELP },
	MAP_RESOURCES: {
		MAP_STYLES: { ESRI_STYLES, HERE_STYLES },
		GRAB_SUPPORTED_AWS_REGIONS
	},
	LINKS: { AWS_TERMS_AND_CONDITIONS },
	PERSIST_STORAGE_KEYS: { DEFAULT_REGION }
} = appConfig;

const region = localStorage.getItem(DEFAULT_REGION) || REGION_EAST;
const defaultRegion = regionsData.find(option => option.value === region) as { value: string; label: string };
const defaultRegionAsia = regionsData.find(option => option.value === REGION_ASIA) as { value: string; label: string };
const { IMPERIAL, METRIC } = MapUnitEnum;
const { ESRI, HERE, GRAB } = MapProviderEnum;

interface SettingsModalProps {
	open: boolean;
	onClose: () => void;
	resetAppState: () => void;
	isGrabVisible: boolean;
	handleMapProviderChange: (mapProvider: MapProviderEnum, triggeredBy: TriggeredByEnum) => void;
	handleCurrentLocationAndViewpoint: (b: boolean) => void;
	mapButtons: JSX.Element;
	resetSearchAndFilters: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
	open,
	onClose,
	resetAppState,
	isGrabVisible,
	handleMapProviderChange,
	handleCurrentLocationAndViewpoint,
	mapButtons,
	resetSearchAndFilters
}) => {
	const [selectedOption, setSelectedOption] = useState<SettingOptionEnum>(SettingOptionEnum.UNITS);
	const {
		autoMapUnit,
		setIsAutomaticMapUnit,
		mapUnit: currentMapUnit,
		setMapUnit,
		mapProvider: currentMapProvider,
		mapStyle: currentMapStyle,
		setMapProvider,
		setMapStyle
	} = useAmplifyMap();
	const { defaultRouteOptions, setDefaultRouteOptions } = usePersistedData();
	const [formValues, setFormValues] = useState<ConnectFormValuesType>({
		IdentityPoolId: "",
		UserDomain: "",
		UserPoolClientId: "",
		UserPoolId: "",
		WebSocketUrl: ""
	});
	const [cloudFormationLink, setCloudFormationLink] = useState(CF_TEMPLATE);
	const [stackRegion, setStackRegion] = useState<{ value: string; label: string }>(defaultRegion);
	const {
		isUserAwsAccountConnected,
		validateFormValues,
		clearCredentials,
		setIsUserAwsAccountConnected,
		onDisconnectAwsAccount,
		setConnectFormValues,
		credentials,
		onLogin,
		setAuthTokens,
		onLogout
	} = useAmplifyAuth();
	const { resetStore: resetAwsStore } = useAws();
	const { detachPolicy } = useAwsIot();
	const keyArr = Object.keys(formValues);
	const isAuthenticated = !!credentials?.authenticated;
	const { t, i18n } = useTranslation();
	const langDir = i18n.dir();
	const isLtr = langDir === "ltr";

	useEffect(() => {
		if (currentMapProvider === MapProviderEnum.GRAB) {
			const newUrl = transformCloudFormationLink(REGION_ASIA);
			setCloudFormationLink(newUrl);
			setStackRegion(defaultRegionAsia);
		}
	}, [currentMapProvider]);

	const handleAutoMapUnitChange = useCallback(() => {
		setIsAutomaticMapUnit(true);
		resetAppState();
		record([{ EventType: EventTypeEnum.MAP_UNIT_CHANGE, Attributes: { type: "Automatic" } }]);
	}, [setIsAutomaticMapUnit, resetAppState]);

	const onMapUnitChange = useCallback(
		(mapUnit: MapUnitEnum) => {
			setIsAutomaticMapUnit(false);
			setMapUnit(mapUnit);
			resetAppState();

			record([{ EventType: EventTypeEnum.MAP_UNIT_CHANGE, Attributes: { type: String(mapUnit) } }]);
		},
		[setIsAutomaticMapUnit, setMapUnit, resetAppState]
	);

	const _onLogin = useCallback(async () => await onLogin(), [onLogin]);

	const _onLogout = useCallback(async () => {
		setAuthTokens(undefined);
		await detachPolicy(credentials!.identityId);
		await onLogout();
	}, [setAuthTokens, detachPolicy, credentials, onLogout]);

	const isBtnEnabled = useMemo(
		() => keyArr.filter(key => !!formValues[key as keyof typeof formValues]).length === keyArr.length,
		[formValues, keyArr]
	);

	const onChangeFormValues = useCallback(
		(key: string, value: string) => {
			setFormValues({ ...formValues, [key as keyof ConnectFormValuesType]: value });
		},
		[setFormValues, formValues]
	);

	const onConnect = useCallback(() => {
		const {
			IdentityPoolId: identityPoolId,
			UserPoolId: userPoolId,
			UserPoolClientId: userPoolWebClientId,
			UserDomain: domain,
			WebSocketUrl: webSocketUrl
		} = formValues;

		validateFormValues(
			identityPoolId,
			userPoolId,
			userPoolWebClientId,
			domain.slice(8),
			webSocketUrl,
			/* Success callback */
			() => {
				if (
					currentMapProvider === MapProviderEnum.GRAB &&
					!GRAB_SUPPORTED_AWS_REGIONS.includes(identityPoolId.split(":")[0])
				) {
					setMapProvider(MapProviderEnum.ESRI);
					setMapStyle(EsriMapEnum.ESRI_LIGHT);
					handleCurrentLocationAndViewpoint(false);
				}

				setConnectFormValues(formValues);
				clearCredentials();
				resetAwsStore();
				setIsUserAwsAccountConnected(true);
			}
		);
	}, [
		formValues,
		validateFormValues,
		currentMapProvider,
		setMapProvider,
		setMapStyle,
		handleCurrentLocationAndViewpoint,
		setConnectFormValues,
		clearCredentials,
		resetAwsStore,
		setIsUserAwsAccountConnected
	]);

	const selectedMapStyle = useMemo(
		() =>
			currentMapProvider === ESRI
				? ESRI_STYLES.find(({ id }) => id === currentMapStyle)?.name
				: HERE_STYLES.find(({ id }) => id === currentMapStyle)?.name,
		[currentMapProvider, currentMapStyle]
	);

	const _onSelect = (option: { value: string; label: string }) => {
		const newUrl = transformCloudFormationLink(option.value);
		setCloudFormationLink(newUrl);
		setStackRegion(option);
	};

	const handleLanguageChange = useCallback(
		(e: { target: { value: string } }) => {
			record([
				{
					EventType: EventTypeEnum.LANGUAGE_CHANGED,
					Attributes: { language: e.target.value, triggeredBy: TriggeredByEnum.SETTINGS_MODAL }
				}
			]);
			i18n.changeLanguage(e.target.value);
		},
		[i18n]
	);

	const handleRouteOptionChange = useCallback(
		(e: { target: { checked: boolean } }, routeOption: string) => {
			setDefaultRouteOptions({ ...defaultRouteOptions, [routeOption]: e.target.checked });

			record([
				{
					EventType: EventTypeEnum.ROUTE_OPTION_CHANGED,
					Attributes: {
						option: routeOption,
						status: e.target.checked ? "on" : "off",
						triggeredBy: TriggeredByEnum.SETTINGS_MODAL
					}
				}
			]);
		},
		[defaultRouteOptions, setDefaultRouteOptions]
	);

	const optionItems: Array<SettingOptionItemType> = useMemo(
		() => [
			{
				id: SettingOptionEnum.UNITS,
				title: t("settings_modal__units.text"),
				defaultValue: autoMapUnit.selected
					? (t("settings_modal__automatic.text") as string)
					: currentMapUnit === MapUnitEnum.IMPERIAL
					? (t("settings_modal__imperial.text") as string)
					: (t("settings_modal__metric.text") as string),
				icon: <IconPeopleArrows />,
				detailsComponent: (
					<Flex
						data-testid={`${SettingOptionEnum.UNITS}-details-component`}
						gap={0}
						direction="column"
						padding="0rem 1.15rem"
					>
						<Flex style={{ gap: 0, padding: "1.08rem 0rem", cursor: "pointer" }}>
							<Radio
								data-testid="unit-automatic-radio"
								value={"Automatic"}
								checked={autoMapUnit.selected}
								onChange={handleAutoMapUnitChange}
							>
								<Text marginLeft="1.23rem">{t("settings_modal__automatic.text")}</Text>
								<Text variation="tertiary" marginLeft="1.23rem">
									{autoMapUnit.system === IMPERIAL
										? t("settings_modal__auto_desc_1.text")
										: t("settings_modal__auto_desc_2.text")}
								</Text>
							</Radio>
						</Flex>
						<Flex style={{ gap: 0, padding: "1.08rem 0rem", cursor: "pointer" }}>
							<Radio
								data-testid="unit-imperial-radio"
								value={IMPERIAL}
								checked={!autoMapUnit.selected && currentMapUnit === IMPERIAL}
								onChange={() => onMapUnitChange(IMPERIAL)}
							>
								<Text marginLeft="1.23rem">{t("settings_modal__imperial.text")}</Text>
								<Text variation="tertiary" marginLeft="1.23rem">
									{t("settings_modal__imperial_units.text")}
								</Text>
							</Radio>
						</Flex>
						<Flex style={{ gap: 0, padding: "1.08rem 0rem", cursor: "pointer" }}>
							<Radio
								data-testid="unit-metric-radio"
								value={METRIC}
								checked={!autoMapUnit.selected && currentMapUnit === METRIC}
								onChange={() => onMapUnitChange(METRIC)}
							>
								<Text marginLeft="1.23rem">{t("settings_modal__metric.text")}</Text>
								<Text variation="tertiary" marginLeft="1.23rem">
									{t("settings_modal__metric_units.text")}
								</Text>
							</Radio>
						</Flex>
					</Flex>
				)
			},
			{
				id: SettingOptionEnum.DATA_PROVIDER,
				title: t("settings_modal__data_provider.text"),
				defaultValue: currentMapProvider,
				icon: <IconMapOutlined />,
				detailsComponent: (
					<Flex
						data-testid={`${SettingOptionEnum.DATA_PROVIDER}-details-component`}
						gap={0}
						direction="column"
						padding="0rem 1.15rem"
					>
						{/* Esri */}
						<Flex style={{ gap: 0, padding: "1.08rem 0rem", cursor: "pointer" }}>
							<Radio
								data-testid="data-provider-esri-radio"
								value={ESRI}
								checked={currentMapProvider === ESRI}
								onChange={() => handleMapProviderChange(ESRI, TriggeredByEnum.SETTINGS_MODAL)}
							>
								<Text marginLeft="1.23rem">{ESRI}</Text>
							</Radio>
						</Flex>
						{/* HERE */}
						<Flex style={{ gap: 0, padding: "1.08rem 0rem", cursor: "pointer" }}>
							<Radio
								data-testid="data-provider-here-radio"
								value={HERE}
								checked={currentMapProvider === HERE}
								onChange={() => handleMapProviderChange(HERE, TriggeredByEnum.SETTINGS_MODAL)}
							>
								<Text marginLeft="1.23rem">{HERE}</Text>
							</Radio>
						</Flex>
						{/* Grab */}
						{isGrabVisible && (
							<Flex style={{ gap: 0, padding: "1.08rem 0rem", cursor: "pointer" }}>
								<Radio
									data-testid="data-provider-grab-radio"
									value={GRAB}
									checked={currentMapProvider === GRAB}
									onChange={() => handleMapProviderChange(GRAB, TriggeredByEnum.SETTINGS_MODAL)}
								>
									<Text marginLeft="1.23rem">{`${GRAB}Maps`}</Text>
								</Radio>
							</Flex>
						)}
					</Flex>
				)
			},
			{
				id: SettingOptionEnum.MAP_STYLE,
				title: t("map_style.text"),
				defaultValue: t(selectedMapStyle as string) as string,
				icon: <IconPaintroller />,
				detailsComponent: (
					<Flex
						data-testid={`${SettingOptionEnum.MAP_STYLE}-details-component`}
						gap={0}
						direction="column"
						overflow="scroll"
					>
						{mapButtons}
					</Flex>
				)
			},
			{
				id: SettingOptionEnum.LANGUAGE,
				title: t("language.text"),
				defaultValue: languageSwitcherData.find(({ value }) => value === i18n.language)?.label as string,
				icon: <IconGlobe />,
				detailsComponent: (
					<Flex
						data-testid={`${SettingOptionEnum.UNITS}-details-component`}
						gap={0}
						direction="column"
						padding="0rem 1.15rem"
						overflow="scroll"
					>
						{languageSwitcherData.map(({ value, label }, idx) => (
							<Flex key={idx} style={{ gap: 0, padding: "1.08rem 0rem", cursor: "pointer" }}>
								<Radio
									data-testid="unit-automatic-radio"
									value={value}
									checked={i18n.language === value}
									onChange={handleLanguageChange}
								>
									<Text marginLeft="1.23rem">{label}</Text>
								</Radio>
							</Flex>
						))}
					</Flex>
				)
			},
			{
				id: SettingOptionEnum.ROUTE_OPTIONS,
				title: t("settings_modal__default_route_options.text"),
				icon: <IconShuffle />,
				detailsComponent: (
					<Flex
						data-testid={`${SettingOptionEnum.ROUTE_OPTIONS}-details-component`}
						gap={0}
						direction="column"
						padding="0rem 1.15rem"
					>
						<CheckboxField
							data-testid="avoid-tolls"
							className="sm-checkbox"
							label={t("avoid_tolls.text")}
							name={t("avoid_tolls.text")}
							value="Avoid tolls"
							checked={defaultRouteOptions.avoidTolls}
							onChange={e => handleRouteOptionChange(e, "avoidTolls")}
						/>
						<CheckboxField
							data-testid="avoid-ferries"
							className="sm-checkbox"
							label={t("avoid_ferries.text")}
							name={t("avoid_ferries.text")}
							value="Avoid ferries"
							checked={defaultRouteOptions.avoidFerries}
							onChange={e => handleRouteOptionChange(e, "avoidFerries")}
						/>
					</Flex>
				)
			},
			{
				id: SettingOptionEnum.AWS_CLOUD_FORMATION,
				title: t("connect_aws_account.text"),
				icon: <IconCloud />,
				detailsComponent: (
					<Flex
						data-testid={`${SettingOptionEnum.AWS_CLOUD_FORMATION}-details-component`}
						className="sm-aws-cloudformation-container"
					>
						<Flex gap={0} padding="0rem 1.23rem 0rem 1.62rem" backgroundColor="var(--light-color-2)">
							<IconAwsCloudFormation
								style={{
									width: "2.46rem",
									height: "2.46rem",
									minWidth: "2.46rem",
									minHeight: "2.46rem",
									margin: "1.85rem 1.62rem 2rem 0rem"
								}}
							/>
							<Flex gap={0} direction="column" marginTop="1.23rem">
								<Text
									marginTop="0.31rem"
									variation="tertiary"
									whiteSpace="pre-line"
									textAlign={isLtr ? "start" : "end"}
								>
									{t("caam__desc.text")}
								</Text>
							</Flex>
						</Flex>
						<Flex className="sm-aws-cloudformation-form">
							<Flex
								gap={0}
								justifyContent={isLtr ? "flex-start" : "flex-end"}
								alignItems="center"
								margin="1.85rem 0rem 1.85rem 0rem"
								width="100%"
							>
								<Text className="bold" fontSize="1.08rem" textAlign={isLtr ? "start" : "end"} order={isLtr ? 1 : 2}>
									{t("caam__htct.text")}
								</Text>
								<View order={isLtr ? 2 : 1}>
									<DropdownEl defaultOption={stackRegion} options={regionsData} onSelect={_onSelect} showSelected />
								</View>
							</Flex>
							<Flex gap={0} marginBottom="1.85rem" alignSelf="flex-start">
								<View
									className="step-number"
									margin={isLtr ? "0rem 1.23rem 0rem 0rem" : "0rem 0rem 0rem 1.23rem"}
									order={isLtr ? 1 : 2}
								>
									<Text className="bold">1</Text>
								</View>
								<View order={isLtr ? 2 : 1}>
									<Flex gap={5}>
										<Text className="bold" textAlign={isLtr ? "start" : "end"}>
											<Link href={cloudFormationLink} target="_blank">
												{t("caam__click_here.text")}
											</Link>
											{t("caam__step_1__title.text")}
										</Text>
									</Flex>
									<Text className="step-two-description" textAlign={isLtr ? "start" : "end"}>
										{t("caam__step_1__desc.text")}
									</Text>
								</View>
							</Flex>
							<Flex gap={0} marginBottom="1.85rem" alignSelf="flex-start">
								<View
									className="step-number"
									margin={isLtr ? "0rem 1.23rem 0rem 0rem" : "0rem 0rem 0rem 1.23rem"}
									order={isLtr ? 1 : 2}
								>
									<Text className="bold" textAlign={isLtr ? "start" : "end"}>
										2
									</Text>
								</View>
								<View order={isLtr ? 2 : 1}>
									<Text className="bold" textAlign={isLtr ? "start" : "end"}>
										{t("caam__step_2__title.text")}
									</Text>
									<Text className="step-two-description" textAlign={isLtr ? "start" : "end"}>
										{t("caam__step_2__desc.text")}
										<a href={HELP} target="_blank" rel="noreferrer">
											{t("learn_more.text")}
										</a>
									</Text>
								</View>
							</Flex>
							<Flex gap={0} marginBottom="1.85rem" alignSelf="flex-start">
								<View
									className="step-number"
									margin={isLtr ? "0rem 1.23rem 0rem 0rem" : "0rem 0rem 0rem 1.23rem"}
									order={isLtr ? 1 : 2}
								>
									<Text className="bold" textAlign={isLtr ? "start" : "end"}>
										3
									</Text>
								</View>
								<View order={isLtr ? 2 : 1}>
									<Text className="bold" textAlign={isLtr ? "start" : "end"}>
										{t("caam__step_3__title.text")}
									</Text>
									<Text className="step-two-description" textAlign={isLtr ? "start" : "end"}>
										{t("caam__step_3__desc.text")}
									</Text>
								</View>
							</Flex>
							{isUserAwsAccountConnected ? (
								!isAuthenticated ? (
									<>
										<Button
											variation="primary"
											fontFamily="AmazonEmber-Bold"
											width="100%"
											onClick={async () => {
												await record(
													[
														{
															EventType: EventTypeEnum.SIGN_IN_STARTED,
															Attributes: { triggeredBy: TriggeredByEnum.SETTINGS_MODAL }
														}
													],
													["userAWSAccountConnectionStatus", "userAuthenticationStatus"]
												);

												_onLogin();
											}}
										>
											{t("sign_in.text")}
										</Button>
										<Button
											variation="primary"
											fontFamily="AmazonEmber-Bold"
											width="100%"
											backgroundColor="var(--red-color)"
											marginTop="0.62rem"
											onClick={onDisconnectAwsAccount}
										>
											{t("disconnect_aws_account.text")}
										</Button>
									</>
								) : (
									<Button variation="primary" fontFamily="AmazonEmber-Bold" width="100%" onClick={_onLogout}>
										{t("sign_out.text")}
									</Button>
								)
							) : (
								<>
									{keyArr.map(key => {
										return (
											<InputField
												key={key}
												containerMargin="0rem 0rem 1.85rem 0rem"
												label={key}
												placeholder={`${t("caam__enter.text")} ${key}`}
												value={formValues[key as keyof ConnectFormValuesType]}
												onChange={e => onChangeFormValues(key, e.target.value.trim())}
												dir={langDir}
											/>
										);
									})}
									<Button variation="primary" width="100%" isDisabled={!isBtnEnabled} onClick={onConnect}>
										{t("caam__connect.text")}
									</Button>
									<Text marginTop="0.62rem">{t("caam__agree.text")}</Text>
									<View onClick={() => window.open(AWS_TERMS_AND_CONDITIONS, "_blank")}>
										<Text className="hyperlink" fontFamily="AmazonEmber-Bold">
											{t("t&c.text")}
										</Text>
									</View>
								</>
							)}
						</Flex>
					</Flex>
				)
			}
		],
		[
			currentMapUnit,
			autoMapUnit,
			isGrabVisible,
			handleAutoMapUnitChange,
			onMapUnitChange,
			currentMapProvider,
			handleMapProviderChange,
			selectedMapStyle,
			defaultRouteOptions,
			isUserAwsAccountConnected,
			onDisconnectAwsAccount,
			onConnect,
			formValues,
			isBtnEnabled,
			keyArr,
			onChangeFormValues,
			isAuthenticated,
			_onLogin,
			_onLogout,
			stackRegion,
			cloudFormationLink,
			t,
			langDir,
			i18n,
			isLtr,
			mapButtons,
			handleLanguageChange,
			handleRouteOptionChange
		]
	);

	const renderOptionItems = useMemo(() => {
		return optionItems.map(({ id, title, defaultValue, icon }) => (
			<Flex
				data-testid={`option-item-${id}`}
				key={id}
				className={selectedOption === id ? "option-item selected" : "option-item"}
				onClick={() => {
					if (id === SettingOptionEnum.AWS_CLOUD_FORMATION) {
						record(
							[
								{
									EventType: EventTypeEnum.AWS_ACCOUNT_CONNECTION_STARTED,
									Attributes: { triggeredBy: TriggeredByEnum.SETTINGS_MODAL }
								}
							],
							["userAWSAccountConnectionStatus", "userAuthenticationStatus"]
						);
					} else if (selectedOption === SettingOptionEnum.AWS_CLOUD_FORMATION) {
						const columnsHavingText = Object.keys(formValues)
							.filter(key => !!formValues[key as keyof ConnectFormValuesType].trim())
							.map(valueKey => valueKey)
							.join(",");

						record(
							[
								{
									EventType: EventTypeEnum.AWS_ACCOUNT_CONNECTION_STOPPED,
									Attributes: {
										triggeredBy: TriggeredByEnum.SETTINGS_MODAL,
										fieldsFilled: columnsHavingText,
										action: AnalyticsEventActionsEnum.TAB_CHANGED
									}
								}
							],
							["userAWSAccountConnectionStatus", "userAuthenticationStatus"]
						);
					}

					resetSearchAndFilters();
					setSelectedOption(id);
				}}
			>
				{icon}
				<Flex gap={0} direction="column">
					<Text fontSize="1rem" lineHeight="1.38rem">
						{title}
					</Text>
					{defaultValue && (
						<Text fontSize="1rem" lineHeight="1.38rem" variation="tertiary">
							{defaultValue}{" "}
						</Text>
					)}
				</Flex>
			</Flex>
		));
	}, [optionItems, selectedOption, resetSearchAndFilters, formValues]);

	const renderOptionDetails = useMemo(() => {
		const [optionItem] = optionItems.filter(({ id }) => selectedOption === id);

		return (
			<>
				<Text fontSize="1rem" lineHeight="1.38rem" padding={"1.46rem 0rem 1.46rem 1.15rem"}>
					{optionItem.title}
				</Text>
				<Divider className="title-divider" />
				{optionItem.detailsComponent}
			</>
		);
	}, [optionItems, selectedOption]);

	return (
		<Modal
			data-testid="settings-modal"
			open={open}
			onClose={onClose}
			className="settings-modal"
			content={
				<Flex className="settings-modal-content">
					<Flex className="options-container">
						<Text className="bold" fontSize="1.23rem" lineHeight="1.85rem" padding={"1.23rem 0rem 1.23rem 1.23rem"}>
							{t("settings.text")}
						</Text>
						{renderOptionItems}
					</Flex>
					<Divider orientation="vertical" className="col-divider" />
					<Flex className="option-details-container">{renderOptionDetails}</Flex>
				</Flex>
			}
		/>
	);
};

export default SettingsModal;
