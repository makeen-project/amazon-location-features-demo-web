import { useCallback, useState } from "react";

import { Button, Card, Flex, Text } from "@aws-amplify/ui-react";
import {
	IconBackArrow,
	IconBell,
	IconClose,
	IconGeofence,
	IconGeofenceColor,
	IconGeofenceMarkerDisabled,
	IconRadar,
	IconSegment,
	IconTrackers,
	Simulation
} from "@demo/assets";
import { DropdownEl } from "@demo/atomicui/atoms";
import { ConfirmationModal, IconicInfoCard, NotificationsBox, WebsocketBanner } from "@demo/atomicui/molecules";
import { MenuItemEnum, SelectOption } from "@demo/types";
import { PubSub } from "aws-amplify";
import { useTranslation } from "react-i18next";

import "./styles.scss";

const mockNotification = [
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" },
	{ title: "Bus 01: Approaching *geofence name*", createdAt: "2023-07-07T10:07:31.410Z" }
];

const trackingHistory = [
	{ title: "Bus stop number 1", description: "50.54943, 30.21989", subDescription: "11:42 pm" },
	{ title: "Bus stop number 2", description: null, subDescription: "11:45 pm" },
	{ title: "Bus stop number 3", description: null, subDescription: "11:48 pm" },
	{ title: "Bus stop number 4", description: null, subDescription: "11:51 pm" },
	{ title: "Bus stop number 5", description: null, subDescription: "11:54 pm" },
	{ title: "Bus stop number 6", description: "50.54948, 30.21994", subDescription: "11:57 pm" }
];

const buses = [
	{ value: "Bus 01", label: "bus_01" },
	{ value: "Bus 02", label: "bus_02" },
	{ value: "Bus 03", label: "bus_03" },
	{ value: "Bus 04", label: "bus_04" },
	{ value: "Bus 05", label: "bus_05" },
	{ value: "Bus 06", label: "bus_06" },
	{ value: "Bus 07", label: "bus_07" },
	{ value: "Bus 08", label: "bus_08" },
	{ value: "Bus 09", label: "bus_09" },
	{ value: "Bus 10", label: "bus_10" }
];

const routesArray = [
	{ label: "route 01", value: "route_01" },
	{ label: "route 02", value: "route_02" },
	{ label: "route 03", value: "route_03" },
	{ label: "route 04", value: "route_04" },
	{ label: "route 05", value: "route_05" },
	{ label: "route 06", value: "route_06" },
	{ label: "route 07", value: "route_07" },
	{ label: "route 08", value: "route_08" },
	{ label: "route 09", value: "route_09" },
	{ label: "route 10", value: "route_10" }
];

interface UnauthGeofenceBoxProps {
	from: MenuItemEnum;
	setShowUnauthGeofenceBox: (b: boolean) => void;
	setShowUnauthTrackerBox: (b: boolean) => void;
	setShowConnectAwsAccountModal: (b: boolean) => void;
}

const UnauthGeofenceBox: React.FC<UnauthGeofenceBoxProps> = ({
	from,
	setShowUnauthGeofenceBox,
	setShowUnauthTrackerBox,
	setShowConnectAwsAccountModal
}) => {
	const [showStartUnauthSimulation, setShowStartUnauthSimulation] = useState(false);
	const [busSelectedValue, setBusSelectedValue] = useState<SelectOption>();
	const [startSimulation, setStartSimulation] = useState(false);
	const [isNotifications, setIsNotifications] = useState(false);
	const [routes, setRoutes] = useState<SelectOption[]>([]);
	const [confirmCloseSimulation, setConfirmCloseSimulation] = useState(false);
	const { subscription, Connection, isHidden } = WebsocketBanner();
	const { t } = useTranslation();

	const updateRoutes = useCallback((selectedRoute: SelectOption) => {
		setRoutes(currentRoutes => {
			const exists = currentRoutes.some(route => route.value === selectedRoute.value);
			if (exists) {
				return currentRoutes.filter(route => route.value !== selectedRoute.value);
			} else {
				return [...currentRoutes, selectedRoute];
			}
		});
	}, []);

	const handleClose = () =>
		from === MenuItemEnum.GEOFENCE ? setShowUnauthGeofenceBox(false) : setShowUnauthTrackerBox(false);

	const handleCta = () => setShowStartUnauthSimulation(true);

	const handleEnableLive = () => {
		handleClose();
		setShowConnectAwsAccountModal(true);
	};

	const onCloseHandler = () => {
		subscription?.unsubscribe();
		PubSub.removePluggable("AWSIoTProvider");
		setShowStartUnauthSimulation(false);
		handleClose();
	};

	const StartSimulation = useCallback(() => {
		return (
			<Flex position="relative" height="47rem">
				<Flex className="start-simulation-container">
					<Flex justifyContent="center">
						<Simulation className="simulation-icon" />
					</Flex>
					<Flex className="text-container">
						<Flex direction="column">
							<Text color={"var(--grey-color)"} fontSize="1.08rem" textAlign="center" variation="tertiary">
								{t("simulation.text")}
							</Text>
							<Text fontSize="1.8rem" textAlign="center" variation="secondary" fontFamily="AmazonEmber-Medium">
								{t("start_unauth_simulation__heading.text")}
							</Text>
							<Text color="var(--grey-color)" fontSize="1rem" textAlign="center" variation="tertiary">
								{t("start_unauth_simulation__desc.text")}
							</Text>
						</Flex>
						<IconicInfoCard
							IconComponent={<IconRadar className="primary-icon" width={24} height={24} />}
							title={t("trackers.text")}
							description={t("start_unauth_simulation__info1_desc.text")}
						/>
						<IconicInfoCard
							IconComponent={<IconGeofence className="primary-icon geofence-icon" width={40} height={26} />}
							title={t("geofences.text")}
							description={t("start_unauth_simulation__info2_desc.text")}
						/>
						<IconicInfoCard
							IconComponent={<IconBell className="primary-icon" width={30} height={25} />}
							title={t("notifications.text")}
							description={t("start_unauth_simulation__info3_desc.text")}
						/>
						<Button variation="primary" padding="0.8rem 0" onClick={() => setStartSimulation(true)}>
							{t("start_unauth_simulation__start_simulation.text")}
						</Button>
					</Flex>
				</Flex>
			</Flex>
		);
	}, [t]);

	return (
		<>
			{!showStartUnauthSimulation ? (
				<Card data-testid="unauth-simulation-card" className="unauth-simulation-card" left={21}>
					<Flex
						data-testid="unauth-simulation-card-header-close"
						className="unauth-simulation-card-header"
						onClick={handleClose}
					>
						<IconClose />
					</Flex>
					<Flex className="unauth-simulation-card-body">
						{from === MenuItemEnum.GEOFENCE ? <IconGeofenceColor /> : <IconTrackers />}
						<Text className="bold medium-text" marginTop="1.5rem">
							{from === MenuItemEnum.GEOFENCE ? t("geofences.text") : t("trackers.text")}
						</Text>
						<Text className="small-text" color="var(--grey-color)" textAlign="center" marginTop="0.8rem">
							{from === MenuItemEnum.GEOFENCE
								? t("unauth_simulation__geofence_box_info.text")
								: t("unauth_simulation__tracker_box_info.text")}
						</Text>
						<Button
							data-testid="unauth-simulation-cta"
							variation="primary"
							marginTop="1.5rem"
							isFullWidth
							onClick={handleCta}
						>
							{t("unauth_simulation__cta.text")}
						</Button>
					</Flex>
					<Flex className="unauth-simulation-card-footer">
						<Text
							data-testid="unauth-simulation-enable-live"
							className="small-text"
							color="var(--primary-color)"
							style={{ cursor: "pointer" }}
							onClick={handleEnableLive}
						>{`${t("unauth_simulation__enable_live.text")} ${
							from === MenuItemEnum.GEOFENCE ? t("geofences.text") : t("trackers.text")
						}`}</Text>
						<Text fontSize="0.77rem" marginTop="0.08rem" color="var(--grey-color)">
							{t("unauth_simulation__disclaimer.text")}
						</Text>
					</Flex>
				</Card>
			) : (
				<>
					<Card className="unauthSimulation-card" left="1.62rem" overflow={startSimulation ? "visible" : "hidden"}>
						{!startSimulation ? (
							<>
								<Flex justifyContent="flex-end" padding="0.77rem">
									<Flex className="card-close">
										<IconClose className="close-icon" width={20} height={20} onClick={onCloseHandler} />
									</Flex>
								</Flex>
								<StartSimulation />
							</>
						) : (
							<Flex className="simulation-container" direction="column" gap="0">
								<Flex className="simulation-header" justifyContent="space-between">
									<Flex alignItems="center" padding="0.6rem 0 0.6rem 1.2rem">
										<IconBackArrow
											className="back-icon"
											cursor="pointer"
											width={20}
											height={20}
											onClick={() => {
												if (isNotifications) {
													setIsNotifications(false);
												} else {
													setConfirmCloseSimulation(true);
												}
											}}
										/>
										<Text className="medium" fontSize="1.08rem" textAlign="center" marginLeft="0.5rem">
											{t("start_unauth_simulation__t&g_simulation.text")}
										</Text>
									</Flex>
									<Flex
										padding="0.6rem"
										className={isNotifications ? "bell-icon-container bell-active" : "bell-icon-container"}
										onClick={() => setIsNotifications(n => !n)}
										position="relative"
									>
										<IconBell className="bell-icon" width={20} height={20} />
										{!isNotifications && <span className="notification-bubble" />}
									</Flex>
								</Flex>
								<Flex gap="0" direction="column" width="100%">
									{Connection}
									{!isNotifications ? (
										<Flex padding="1.3rem" direction="column" gap="0" height={isHidden ? "" : ""}>
											<Text className="bold" fontSize="0.92rem">
												{t("start_unauth_simulation__routes_notifications.text")}
											</Text>
											<Flex className="routes-notification-container" marginTop="0.5rem">
												<DropdownEl
													defaultOption={routes}
													options={routesArray}
													onSelect={value => value && updateRoutes(value)}
													label={
														!!routes.length
															? `${routes.length} ${t("start_unauth_simulation__routes_active.text")}`
															: (t("start_unauth_simulation__select_route.text") as string)
													}
													arrowIconColor={"var(--tertiary-color)"}
													showSelected
													bordered
													isCheckbox
												/>
												<Button variation="primary">{t("tracker_box__pause.text")}</Button>
											</Flex>
											<Flex className="bus-container">
												<Text className="bold" fontSize="0.92rem">
													{t("start_unauth_simulation__tracking_history.text")}
												</Text>
												<DropdownEl
													defaultOption={busSelectedValue}
													options={buses}
													onSelect={value => value && setBusSelectedValue(value)}
													label={
														!!busSelectedValue
															? `${busSelectedValue?.label}`
															: (t("start_unauth_simulation__select_bus.text") as string)
													}
													showSelected
													isRadioBox
												/>
											</Flex>
											<Flex gap="0">
												<Flex direction="column" gap="0" marginTop="2rem">
													{trackingHistory.map((_, i) => (
														<Flex key={i} className="tracking-icon-container" gap="0">
															{i === 0 || i === trackingHistory.length - 1 ? (
																<IconGeofenceMarkerDisabled className="geofence-icon" width={22} height={22} />
															) : (
																<IconSegment width={15} height={15} />
															)}
															{i !== trackingHistory.length - 1 && (
																<Flex direction="column" gap="0.5rem" margin="0.7rem 0">
																	<Flex className="bubble-icon" />
																	<Flex className="bubble-icon" />
																	<Flex className="bubble-icon" />
																</Flex>
															)}
														</Flex>
													))}
												</Flex>
												<Flex direction="column" gap="0" paddingLeft="1.5rem">
													{trackingHistory.map((track, i) => (
														<IconicInfoCard
															key={i}
															title={track.title}
															description={track.description || ""}
															subDescription={track.subDescription}
															textContainerMarginLeft="0"
															cardMargin="0.6rem 0"
															cardAlignItems="center"
														/>
													))}
												</Flex>
											</Flex>
										</Flex>
									) : (
										<NotificationsBox maxHeight={isHidden ? 55.5 : 53} notification={mockNotification} />
									)}
								</Flex>
							</Flex>
						)}
					</Card>
					<Flex className="confirmation-modal-container">
						<ConfirmationModal
							open={confirmCloseSimulation}
							onClose={onCloseHandler}
							heading={t("start_unauth_simulation__exit_simulation.text") as string}
							description={
								<Text
									className="small-text"
									variation="tertiary"
									marginTop="1.23rem"
									textAlign="center"
									whiteSpace="pre-line"
								>
									{t("start_unauth_simulation__exit_simulation_desc.text")}
								</Text>
							}
							onConfirm={() => setConfirmCloseSimulation(false)}
							confirmationText={t("start_unauth_simulation__stay_in_simulation.text") as string}
							cancelationText={t("exit.text") as string}
						/>
					</Flex>
				</>
			)}
		</>
	);
};

export default UnauthGeofenceBox;
