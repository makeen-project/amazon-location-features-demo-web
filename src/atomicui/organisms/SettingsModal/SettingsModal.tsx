/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Button, CheckboxField, Divider, Flex, Link, Radio, Text, View } from "@aws-amplify/ui-react";
import {
	IconAwsCloudFormation,
	IconCloud,
	IconMapOutlined,
	IconPaintroller,
	IconPeopleArrows,
	IconShuffle
} from "@demo/assets";
import { DropdownEl, Modal, TextEl } from "@demo/atomicui/atoms";
import { InputField } from "@demo/atomicui/molecules";
import { appConfig, regionsData } from "@demo/core/constants";
import { useAmplifyAuth, useAmplifyMap, useAws, useAwsIot, usePersistedData } from "@demo/hooks";
import {
	ConnectFormValuesType,
	EsriMapEnum,
	GrabMapEnum,
	HereMapEnum,
	MapProviderEnum,
	MapUnitEnum,
	SettingOptionEnum,
	SettingOptionItemType
} from "@demo/types";
import { transformCloudFormationLink } from "@demo/utils/transformCloudFormationLink";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const {
	ENV: { CF_TEMPLATE, REGION, REGION_ASIA },
	ROUTES: { HELP },
	MAP_RESOURCES: {
		MAP_STYLES: { ESRI_STYLES, HERE_STYLES, GRAB_STYLES },
		GRAB_SUPPORTED_AWS_REGIONS
	},
	LINKS: { AWS_TERMS_AND_CONDITIONS }
} = appConfig;
const defaultRegion = regionsData.find(option => option.value === REGION) as { value: string; label: string };
const defaultRegionAsia = regionsData.find(option => option.value === REGION_ASIA) as { value: string; label: string };
const { IMPERIAL, METRIC } = MapUnitEnum;
const { ESRI, HERE, GRAB } = MapProviderEnum;

interface SettingsModalProps {
	open: boolean;
	onClose: () => void;
	resetAppState: () => void;
	isGrabVisible: boolean;
	handleMapProviderChange: (mapProvider: MapProviderEnum) => void;
	handleMapStyleChange: (mapStyle: EsriMapEnum | HereMapEnum | GrabMapEnum) => void;
	handleCurrentLocationAndViewpoint: (b: boolean) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
	open,
	onClose,
	resetAppState,
	isGrabVisible,
	handleMapProviderChange,
	handleMapStyleChange,
	handleCurrentLocationAndViewpoint
}) => {
	const [selectedOption, setSelectedOption] = useState<SettingOptionEnum>(SettingOptionEnum.UNITS);
	const {
		isAutomaticMapUnit,
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
	const { t } = useTranslation();

	useEffect(() => {
		const newUrl = transformCloudFormationLink(REGION_ASIA);

		if (currentMapProvider === MapProviderEnum.GRAB && cloudFormationLink !== newUrl) {
			setCloudFormationLink(newUrl);
			setStackRegion(defaultRegionAsia);
		}
	}, [currentMapProvider, cloudFormationLink]);

	useEffect(() => {
		const newUrl = transformCloudFormationLink(REGION_ASIA);

		if (currentMapProvider === MapProviderEnum.GRAB && cloudFormationLink !== newUrl) {
			setCloudFormationLink(newUrl);
			setStackRegion(defaultRegionAsia);
		}
	}, [currentMapProvider, cloudFormationLink]);

	const handleAutoMapUnitChange = useCallback(() => {
		setIsAutomaticMapUnit(true);
		resetAppState();
	}, [setIsAutomaticMapUnit, resetAppState]);

	const onMapUnitChange = useCallback(
		(mapUnit: MapUnitEnum) => {
			setIsAutomaticMapUnit(false);
			setMapUnit(mapUnit);
			resetAppState();
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

	const optionItems: Array<SettingOptionItemType> = useMemo(
		() => [
			{
				id: SettingOptionEnum.UNITS,
				title: t("SETTINGS_MODAL.UNITS"),
				defaultValue: isAutomaticMapUnit
					? (t("SETTINGS_MODAL.AUTOMATIC") as string)
					: currentMapUnit === MapUnitEnum.IMPERIAL
					? (t("SETTINGS_MODAL.IMPERIAL") as string)
					: (t("SETTINGS_MODAL.METRIC") as string),
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
								checked={isAutomaticMapUnit}
								onChange={handleAutoMapUnitChange}
							>
								<TextEl marginLeft="1.23rem" text={t("SETTINGS_MODAL.AUTOMATIC")} />
								<TextEl
									variation="tertiary"
									marginLeft="1.23rem"
									text={
										currentMapUnit === IMPERIAL
											? t("SETTINGS_MODAL.AUTOMATIC_DESC_1")
											: t("SETTINGS_MODAL.AUTOMATIC_DESC_2")
									}
								/>
							</Radio>
						</Flex>
						<Flex style={{ gap: 0, padding: "1.08rem 0rem", cursor: "pointer" }}>
							<Radio
								data-testid="unit-imperial-radio"
								value={IMPERIAL}
								checked={!isAutomaticMapUnit && currentMapUnit === IMPERIAL}
								onChange={() => onMapUnitChange(IMPERIAL)}
							>
								<TextEl marginLeft="1.23rem" text={t("SETTINGS_MODAL.IMPERIAL")} />
								<TextEl variation="tertiary" marginLeft="1.23rem" text={t("SETTINGS_MODAL.IMPERIAL_UNITS")} />
							</Radio>
						</Flex>
						<Flex style={{ gap: 0, padding: "1.08rem 0rem", cursor: "pointer" }}>
							<Radio
								data-testid="unit-metric-radio"
								value={METRIC}
								checked={!isAutomaticMapUnit && currentMapUnit === METRIC}
								onChange={() => onMapUnitChange(METRIC)}
							>
								<TextEl marginLeft="1.23rem" text={t("SETTINGS_MODAL.METRIC")} />
								<TextEl variation="tertiary" marginLeft="1.23rem" text={t("SETTINGS_MODAL.METRIC_UNITS")} />
							</Radio>
						</Flex>
					</Flex>
				)
			},
			{
				id: SettingOptionEnum.DATA_PROVIDER,
				title: t("SETTINGS_MODAL.DATA_PROVIDER"),
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
								onChange={() => handleMapProviderChange(ESRI)}
							>
								<TextEl marginLeft="1.23rem" text={ESRI} />
							</Radio>
						</Flex>
						{/* HERE */}
						<Flex style={{ gap: 0, padding: "1.08rem 0rem", cursor: "pointer" }}>
							<Radio
								data-testid="data-provider-here-radio"
								value={HERE}
								checked={currentMapProvider === HERE}
								onChange={() => handleMapProviderChange(HERE)}
							>
								<TextEl marginLeft="1.23rem" text={HERE} />
							</Radio>
						</Flex>
						{/* Grab */}
						{isGrabVisible && (
							<Flex style={{ gap: 0, padding: "1.08rem 0rem", cursor: "pointer" }}>
								<Radio
									data-testid="data-provider-grab-radio"
									value={GRAB}
									checked={currentMapProvider === GRAB}
									onChange={() => handleMapProviderChange(GRAB)}
								>
									<TextEl marginLeft="1.23rem" text={`${GRAB}Maps`} />
								</Radio>
							</Flex>
						)}
					</Flex>
				)
			},
			{
				id: SettingOptionEnum.MAP_STYLE,
				title: t("SETTINGS_MODAL.MAP_STYLE"),
				defaultValue: t(selectedMapStyle as string) as string,
				icon: <IconPaintroller />,
				detailsComponent: (
					<Flex
						data-testid={`${SettingOptionEnum.MAP_STYLE}-details-component`}
						gap={0}
						direction="column"
						padding="0rem 1.15rem"
						overflow="scroll"
					>
						{/* Esri */}
						<Flex gap={0} direction="column" padding="0.82rem 0rem 1.23rem 0rem">
							<TextEl fontSize="1rem" lineHeight="1.38rem" variation="tertiary" text={ESRI} />
							<Flex className="sm-styles-container">
								{ESRI_STYLES.map(({ id, image, name }) => (
									<Flex
										data-testid="esri-map-style"
										key={id}
										className={id === currentMapStyle ? "sm-style selected" : "sm-style"}
										onClick={() => handleMapStyleChange(id)}
									>
										<img src={image} />
										<TextEl marginTop="0.62rem" text={t(name)} />
									</Flex>
								))}
							</Flex>
						</Flex>
						{/* HERE */}
						<Divider className="styles-divider" />
						<Flex gap={0} direction="column" padding="1.31rem 0rem 1.23rem 0rem">
							<TextEl fontSize="1rem" lineHeight="1.38rem" variation="tertiary" text={HERE} />
							<Flex className="sm-styles-container">
								{HERE_STYLES.map(({ id, image, name }) => (
									<Flex
										data-testid="here-map-style"
										key={id}
										className={id === currentMapStyle ? "sm-style selected" : "sm-style"}
										onClick={() => handleMapStyleChange(id)}
									>
										<img src={image} />
										<TextEl marginTop="0.62rem" text={t(name)} />
									</Flex>
								))}
							</Flex>
						</Flex>
						{/* Grab */}
						{isGrabVisible && (
							<>
								<Divider className="styles-divider" />
								<Flex gap={0} direction="column" padding="1.31rem 0rem 1.23rem 0rem">
									<TextEl fontSize="1rem" lineHeight="1.38rem" variation="tertiary" text={`${GRAB}Maps`} />
									<Flex className="sm-styles-container">
										{GRAB_STYLES.map(({ id, image, name }) => (
											<Flex
												data-testid="grab-map-style"
												key={id}
												className={id === currentMapStyle ? "sm-style selected" : "sm-style"}
												onClick={() => handleMapStyleChange(id)}
											>
												<img src={image} />
												<TextEl marginTop="0.62rem" text={t(name)} />
											</Flex>
										))}
									</Flex>
								</Flex>
							</>
						)}
					</Flex>
				)
			},
			{
				id: SettingOptionEnum.ROUTE_OPTIONS,
				title: t("SETTINGS_MODAL.DEFAULT_ROUTE_OPTIONS"),
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
							label={t("SETTINGS_MODAL.AVOID_TOLLS")}
							name={t("SETTINGS_MODAL.AVOID_TOLLS")}
							value="Avoid tolls"
							checked={defaultRouteOptions.avoidTolls}
							onChange={e => setDefaultRouteOptions({ ...defaultRouteOptions, avoidTolls: e.target.checked })}
						/>
						<CheckboxField
							data-testid="avoid-ferries"
							className="sm-checkbox"
							label={t("SETTINGS_MODAL.AVOID_FERRIES")}
							name={t("SETTINGS_MODAL.AVOID_FERRIES")}
							value="Avoid ferries"
							checked={defaultRouteOptions.avoidFerries}
							onChange={e => setDefaultRouteOptions({ ...defaultRouteOptions, avoidFerries: e.target.checked })}
						/>
					</Flex>
				)
			},
			{
				id: SettingOptionEnum.AWS_CLOUD_FORMATION,
				title: t("CONNECT_AWS_ACCOUNT_MODAL.TITLE"),
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
								<Text marginTop="0.31rem" variation="tertiary" whiteSpace="pre-line">
									{t("CONNECT_AWS_ACCOUNT_MODAL.TITLE_DESC")}
								</Text>
							</Flex>
						</Flex>
						<Flex className="sm-aws-cloudformation-form">
							<Flex
								gap={0}
								justifyContent="flex-start"
								alignItems="center"
								margin="1.85rem 0rem 1.85rem 0rem"
								width="100%"
							>
								<Text className="bold" fontSize="1.08rem">
									{t("CONNECT_AWS_ACCOUNT_MODAL.HOW_TO")}
								</Text>
								<DropdownEl defaultOption={stackRegion} options={regionsData} onSelect={_onSelect} showSelected />
							</Flex>
							<Flex gap={0} marginBottom="1.85rem" alignSelf="flex-start">
								<View className="step-number">
									<TextEl fontFamily="AmazonEmber-Bold" text={t("CONNECT_AWS_ACCOUNT_MODAL.STEP_1.NUM")} />
								</View>
								<View>
									<Flex gap={5}>
										<Text className="bold">
											<Link href={cloudFormationLink} target="_blank">
												{t("CONNECT_AWS_ACCOUNT_MODAL.CLICK_HERE")}
											</Link>
											{t("CONNECT_AWS_ACCOUNT_MODAL.STEP_1.TITLE")}
										</Text>
									</Flex>
									<TextEl className="step-two-description" text={t("CONNECT_AWS_ACCOUNT_MODAL.STEP_1.DESC")} />
								</View>
							</Flex>
							<Flex gap={0} marginBottom="1.85rem" alignSelf="flex-start">
								<View className="step-number">
									<TextEl fontFamily="AmazonEmber-Bold" text={t("CONNECT_AWS_ACCOUNT_MODAL.STEP_2.NUM")} />
								</View>
								<View>
									<TextEl fontFamily="AmazonEmber-Bold" text={t("CONNECT_AWS_ACCOUNT_MODAL.STEP_2.TITLE")} />
									<Text className="step-two-description">
										{t("CONNECT_AWS_ACCOUNT_MODAL.STEP_2.DESC")}
										<a href={HELP} target="_blank" rel="noreferrer">
											{t("CONNECT_AWS_ACCOUNT_MODAL.LEARN_MORE")}
										</a>
									</Text>
								</View>
							</Flex>
							<Flex gap={0} marginBottom="1.85rem" alignSelf="flex-start">
								<View className="step-number">
									<TextEl fontFamily="AmazonEmber-Bold" text={t("CONNECT_AWS_ACCOUNT_MODAL.STEP_3.NUM")} />
								</View>
								<View>
									<TextEl fontFamily="AmazonEmber-Bold" text={t("CONNECT_AWS_ACCOUNT_MODAL.STEP_3.TITLE")} />
									<TextEl className="step-two-description" text={t("CONNECT_AWS_ACCOUNT_MODAL.STEP_3.DESC")} />
								</View>
							</Flex>
							{isUserAwsAccountConnected ? (
								!isAuthenticated ? (
									<>
										<Button variation="primary" fontFamily="AmazonEmber-Bold" width="100%" onClick={_onLogin}>
											{t("CONNECT_AWS_ACCOUNT_MODAL.SIGN_IN")}
										</Button>
										<Button
											variation="primary"
											fontFamily="AmazonEmber-Bold"
											width="100%"
											backgroundColor="var(--red-color)"
											marginTop="0.62rem"
											onClick={onDisconnectAwsAccount}
										>
											{t("CONNECT_AWS_ACCOUNT_MODAL.DISCONNECT_AWS_ACCOUNT")}
										</Button>
									</>
								) : (
									<Button variation="primary" fontFamily="AmazonEmber-Bold" width="100%" onClick={_onLogout}>
										{t("CONNECT_AWS_ACCOUNT_MODAL.SIGN_OUT")}
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
												placeholder={`${t("CONNECT_AWS_ACOUNT.ENTER")} ${key}`}
												value={formValues[key as keyof ConnectFormValuesType]}
												onChange={e => onChangeFormValues(key, e.target.value.trim())}
											/>
										);
									})}
									<Button variation="primary" width="100%" isDisabled={!isBtnEnabled} onClick={onConnect}>
										{t("CONNECT_AWS_ACCOUNT_MODAL.CONNECT")}
									</Button>
									<TextEl marginTop="0.62rem" text={t("CONNECT_AWS_ACCOUNT_MODAL.AGREE")} />
									<View onClick={() => window.open(AWS_TERMS_AND_CONDITIONS, "_blank")}>
										<TextEl
											className="hyperlink"
											fontFamily="AmazonEmber-Bold"
											text={t("CONNECT_AWS_ACCOUNT_MODAL.T&C")}
										/>
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
			isAutomaticMapUnit,
			isGrabVisible,
			handleAutoMapUnitChange,
			onMapUnitChange,
			currentMapProvider,
			handleMapProviderChange,
			selectedMapStyle,
			currentMapStyle,
			handleMapStyleChange,
			defaultRouteOptions,
			setDefaultRouteOptions,
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
			t
		]
	);

	const renderOptionItems = useMemo(() => {
		return optionItems.map(({ id, title, defaultValue, icon }) => (
			<Flex
				data-testid={`option-item-${id}`}
				key={id}
				className={selectedOption === id ? "option-item selected" : "option-item"}
				onClick={() => setSelectedOption(id)}
			>
				{icon}
				<Flex gap={0} direction="column">
					<TextEl fontSize="1rem" lineHeight="1.38rem" text={title} />
					{defaultValue && <TextEl fontSize="1rem" lineHeight="1.38rem" variation="tertiary" text={defaultValue} />}
				</Flex>
			</Flex>
		));
	}, [optionItems, selectedOption]);

	const renderOptionDetails = useMemo(() => {
		const [optionItem] = optionItems.filter(({ id }) => selectedOption === id);

		return (
			<>
				<TextEl fontSize="1rem" lineHeight="1.38rem" padding={"1.46rem 0rem 1.46rem 1.15rem"} text={optionItem.title} />
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
						<TextEl
							fontFamily="AmazonEmber-Bold"
							fontSize="1.23rem"
							lineHeight="1.85rem"
							padding={"1.23rem 0rem 1.23rem 1.23rem"}
							text="Settings"
						/>
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
