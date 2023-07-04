/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import React, { useEffect, useMemo, useState } from "react";

import { Button, Flex, Link, Text, View } from "@aws-amplify/ui-react";
import { IconAwsCloudFormation, IconCheckMarkCircle } from "@demo/assets";
import { DropdownEl, Modal } from "@demo/atomicui/atoms";
import { InputField } from "@demo/atomicui/molecules";
import { appConfig, regionsData } from "@demo/core/constants";
import { useAmplifyAuth, useAmplifyMap, useAws } from "@demo/hooks";
import { ConnectFormValuesType, EsriMapEnum, MapProviderEnum } from "@demo/types";
import { transformCloudFormationLink } from "@demo/utils/transformCloudFormationLink";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const {
	ENV: { CF_TEMPLATE, REGION, REGION_ASIA },
	ROUTES: { HELP },
	MAP_RESOURCES: { GRAB_SUPPORTED_AWS_REGIONS },
	LINKS: { AWS_TERMS_AND_CONDITIONS }
} = appConfig;
const defaultRegion = regionsData.find(option => option.value === REGION) as { value: string; label: string };
const defaultRegionAsia = regionsData.find(option => option.value === REGION_ASIA) as { value: string; label: string };

interface ConnectAwsAccountModalProps {
	open: boolean;
	onClose: () => void;
	handleCurrentLocationAndViewpoint: (b: boolean) => void;
}

const ConnectAwsAccountModal: React.FC<ConnectAwsAccountModalProps> = ({
	open,
	onClose,
	handleCurrentLocationAndViewpoint
}) => {
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
		setConnectFormValues,
		setIsUserAwsAccountConnected,
		clearCredentials,
		onLogin,
		validateFormValues
	} = useAmplifyAuth();
	const { resetStore: resetAwsStore } = useAws();
	const { mapProvider: currentMapProvider, setMapProvider, setMapStyle } = useAmplifyMap();
	const keyArr = Object.keys(formValues);
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

	const _onClose = () => {
		onClose();
		isUserAwsAccountConnected && window.location.reload();
	};

	const _onSelect = (option: { value: string; label: string }) => {
		const newUrl = transformCloudFormationLink(option.value);
		setCloudFormationLink(newUrl);
		setStackRegion(option);
	};

	const isBtnEnabled = useMemo(
		() => keyArr.filter(key => !!formValues[key as keyof typeof formValues]).length === keyArr.length,
		[formValues, keyArr]
	);

	const onChangeFormValues = (key: string, value: string) => {
		setFormValues({ ...formValues, [key as keyof ConnectFormValuesType]: value });
	};

	const onConnect = () => {
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
	};

	const _onLogin = async () => {
		onClose();
		await onLogin();
	};

	return (
		<Modal
			data-testid="connect-aws-account-modal-container"
			open={open}
			onClose={_onClose}
			className="connect-aws-account-modal"
			content={
				<Flex className="content-container">
					<Flex className="left-col">
						<View className="title-container">
							<IconAwsCloudFormation
								style={{ width: "4.31rem", height: "4.31rem", minWidth: "4.31rem", minHeight: "4.31rem" }}
							/>
							<Text className="bold" fontSize="1.54rem" marginTop="0.46rem">
								{t("connect_aws_account.text")}
							</Text>
						</View>
						<Text marginTop="0.62rem" variation="tertiary" textAlign="center" whiteSpace="pre-line">
							{t("caam__desc.text")}
						</Text>
						<View>
							<Flex gap={0} justifyContent="flex-start" alignItems="center" marginTop="1rem">
								<Text className="bold" fontSize="1.08rem" order={isLtr ? 1 : 2}>
									{t("caam__htct.text")}
								</Text>
								<View order={isLtr ? 2 : 1}>
									<DropdownEl defaultOption={stackRegion} options={regionsData} onSelect={_onSelect} showSelected />
								</View>
							</Flex>
							<View marginTop="1.23rem">
								<Flex gap={0} marginBottom="1.85rem">
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
								<Flex gap={0} marginBottom="1.85rem">
									<View
										className="step-number"
										margin={isLtr ? "0rem 1.23rem 0rem 0rem" : "0rem 0rem 0rem 1.23rem"}
										order={isLtr ? 1 : 2}
									>
										<Text className="bold">2</Text>
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
								<Flex gap={0}>
									<View
										className="step-number"
										margin={isLtr ? "0rem 1.23rem 0rem 0rem" : "0rem 0rem 0rem 1.23rem"}
										order={isLtr ? 1 : 2}
									>
										<Text className="bold">3</Text>
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
							</View>
						</View>
					</Flex>
					<Flex
						className="right-col"
						justifyContent={isUserAwsAccountConnected ? "center" : "flex-end"}
						textAlign={isUserAwsAccountConnected ? "center" : "left"}
					>
						{isUserAwsAccountConnected ? (
							<>
								<IconCheckMarkCircle className="icon-check-mark-circle" />
								<Text className="bold" fontSize="1.54rem" marginTop="3.08rem">
									{t("caam__post_connect__title.text")}
								</Text>
								<Text marginTop="1.23rem" variation="tertiary" whiteSpace="pre-line">
									{t("caam__post_connect__desc.text")}
								</Text>
								{isUserAwsAccountConnected && (
									<Button
										marginTop="3.08rem"
										width="100%"
										height="3.08rem"
										variation="primary"
										fontFamily="AmazonEmber-Bold"
										onClick={_onLogin}
									>
										{t("sign_in.text")}
									</Button>
								)}
								<Button className="continue-to-explore" width="100%" height="3.08rem" onClick={_onClose}>
									{t("caam__continue_to_demo.text")}
								</Button>
							</>
						) : (
							<>
								{keyArr.map((key, idx) => {
									return (
										<InputField
											dataTestId={`input-field-${idx}`}
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
								<Button
									data-testid="connect-button"
									variation="primary"
									width="100%"
									height="3.08rem"
									isDisabled={!isBtnEnabled}
									onClick={onConnect}
								>
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
			}
		/>
	);
};

export default ConnectAwsAccountModal;
