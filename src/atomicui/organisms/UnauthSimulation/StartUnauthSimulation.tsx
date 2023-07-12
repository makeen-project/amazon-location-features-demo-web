import React, { useCallback, useEffect, useState } from "react";

import { Button, Card, Flex, Text } from "@aws-amplify/ui-react";
import {
	IconBackArrow,
	IconBell,
	IconClose,
	IconGeofence,
	IconGeofenceMarkerDisabled,
	IconRadar,
	IconSegment
} from "@demo/assets";
import { ReactComponent as Simulation } from "@demo/assets/graphics/simulation.svg";
import { DropdownEl } from "@demo/atomicui/atoms";
import { ConfirmationModal, IconicInfoCard, NotificationsBox, WebsocketBanner } from "@demo/atomicui/molecules";
import { SelectOption } from "@demo/types";
import { PubSub } from "aws-amplify";
import "./styles.scss";

interface IProps {
	onClose: () => void;
}

const StartUnauthSimulation: React.FC<IProps> = ({ onClose }) => {
	const [routeSelectedValue, setRouteSelectedValue] = useState<SelectOption | null>(null);
	const [busSelectedValue, setBusSelectedValue] = useState<SelectOption>();
	const [startSimulation, setStartSimulation] = useState(false);
	const [isNotifications, setIsNotifications] = useState(false);
	const [routes, setRoutes] = useState<SelectOption[]>([]);
	const [confirmCloseSimulation, setConfirmCloseSimulation] = useState(false);
	const { subscription, Connection } = WebsocketBanner();

	useEffect(() => {
		if (routeSelectedValue !== null) {
			let updatedRoutes = [...routes];
			const exists = updatedRoutes.some(route => route.value === routeSelectedValue.value);

			if (exists) {
				updatedRoutes = updatedRoutes.filter(route => route.value !== routeSelectedValue.value);
			} else {
				updatedRoutes.push(routeSelectedValue);
			}

			setRoutes(updatedRoutes);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [routeSelectedValue]);

	const onCloseHandler = () => {
		subscription?.unsubscribe();
		PubSub.removePluggable("AWSIoTProvider");
		onClose();
	};

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
		{ value: "route 01", label: "route_01" },
		{ value: "route 02", label: "route_02" },
		{ value: "route 03", label: "route_03" },
		{ value: "route 04", label: "route_04" },
		{ value: "route 05", label: "route_05" },
		{ value: "route 06", label: "route_06" },
		{ value: "route 07", label: "route_07" },
		{ value: "route 08", label: "route_08" },
		{ value: "route 09", label: "route_09" },
		{ value: "route 10", label: "route_10" }
	];

	const StartSimulation = useCallback(() => {
		return (
			<Flex position="relative" height="45.3rem">
				<Flex className="start-simulation-container">
					<Flex justifyContent="center">
						<Simulation className="simulation-icon" />
					</Flex>
					<Flex className="text-container">
						<Flex direction="column">
							<Text color={"var(--grey-color)"} fontSize="1.08rem" textAlign="center" variation="tertiary">
								Simulation
							</Text>
							<Text
								color={"var(--grey-color)"}
								fontSize="1.8rem"
								textAlign="center"
								variation="secondary"
								fontFamily="AmazonEmber-Medium"
							>
								Tackers and Geofences
							</Text>
							<Text color="var(--grey-color)" fontSize="1rem" textAlign="center" variation="tertiary">
								Enter the tracking simulation to view the path across Vancouver streets that crosses geofence
							</Text>
						</Flex>
						<IconicInfoCard
							IconComponent={<IconRadar className="primary-icon" width={24} height={24} />}
							title="Tackers"
							description="Visualize your history on the map"
						/>
						<IconicInfoCard
							IconComponent={<IconGeofence className="primary-icon geofence-icon" width={40} height={26} />}
							title="Geofences"
							description="Define virtual boundaries around a specific area to detect entry and exit events"
						/>
						<IconicInfoCard
							IconComponent={<IconBell className="primary-icon" width={30} height={25} />}
							title="Notifications"
							description="Get geofence messages when you enter and leave locations"
						/>
						<Button variation="primary" padding="0.8rem 0" onClick={() => setStartSimulation(true)}>
							Start Simulation
						</Button>
					</Flex>
				</Flex>
			</Flex>
		);
	}, []);

	return (
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
							<Flex alignItems="center" padding="0.6rem">
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
								<Text className="medium" fontSize="1.08rem" textAlign="center" color={"var(--grey-color)"}>
									Tracking and Geofence simulation
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
								<Flex padding="1.3rem" direction="column" gap="0">
									<Text className="bold" fontSize="0.92rem">
										Routes notifications
									</Text>
									<Flex className="routes-notification-container" marginTop="0.5rem">
										<DropdownEl
											defaultOption={routes}
											options={routesArray}
											onSelect={value => value && setRouteSelectedValue(value)}
											label={!!routes.length ? `${routes.length} routes selected` : "Select a route"}
											arrowIconColor={"var(--tertiary-color)"}
											showSelected
											bordered
											isCheckbox
										/>
										<Button variation="primary">Pause</Button>
									</Flex>
									<Flex className="bus-container">
										<Text className="bold" fontSize="0.92rem">
											Tracking history
										</Text>
										<DropdownEl
											defaultOption={busSelectedValue}
											options={buses}
											onSelect={value => value && setBusSelectedValue(value)}
											label={!!busSelectedValue ? `${busSelectedValue?.label}` : "Select a Bus"}
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
														<Flex direction="column" gap="0.4rem" margin="0.6rem 0">
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
								<NotificationsBox notification={mockNotification} />
							)}
						</Flex>
					</Flex>
				)}
			</Card>
			<Flex className="confirmation-modal-container">
				<ConfirmationModal
					open={confirmCloseSimulation}
					onClose={onCloseHandler}
					heading="Exit simulation"
					description={
						<Text
							className="small-text"
							variation="tertiary"
							marginTop="1.23rem"
							textAlign="center"
							whiteSpace="pre-line"
						>
							Are you sure you want to exit Trackers and Geofences simulation?
						</Text>
					}
					onConfirm={() => setConfirmCloseSimulation(false)}
					confirmationText={"Stay in simulation"}
					cancelationText={"Exit"}
				/>
			</Flex>
		</>
	);
};

export default StartUnauthSimulation;
