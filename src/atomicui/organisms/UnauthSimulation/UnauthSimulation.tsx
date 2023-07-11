import { useState } from "react";

import { Button, Card, Flex, Text } from "@aws-amplify/ui-react";
import { IconClose, IconGeofenceColor, IconTrackers } from "@demo/assets";
import { MenuItemEnum } from "@demo/types";
import { useTranslation } from "react-i18next";

import StartUnauthSimulation from "./StartUnauthSimulation";
import "./styles.scss";

interface UnauthGeofenceBoxProps {
	from: MenuItemEnum;
	setShowUnauthGeofenceBox: (b: boolean) => void;
	setShowUnauthTrackerBox: (b: boolean) => void;
}

const UnauthGeofenceBox: React.FC<UnauthGeofenceBoxProps> = ({
	from,
	setShowUnauthGeofenceBox,
	setShowUnauthTrackerBox
}) => {
	const [showStartUnauthSimulation, setShowStartUnauthSimulation] = useState(false);
	const { t } = useTranslation();

	const handleClose = () =>
		from === MenuItemEnum.GEOFENCE ? setShowUnauthGeofenceBox(false) : setShowUnauthTrackerBox(false);

	const handleCta = () => setShowStartUnauthSimulation(true);

	const handleEnableLive = () => {};

	return (
		<>
			{!showStartUnauthSimulation ? (
				<Card data-testId="unauth-simulation-card" className="unauth-simulation-card" left={21}>
					<Flex
						data-testId="unauth-simulation-card-header-close"
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
							data-testId="unauth-simulation-cta"
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
							data-testId="unauth-simulation-enable-live"
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
				<StartUnauthSimulation
					onClose={() => {
						setShowStartUnauthSimulation(false);
						handleClose();
					}}
				/>
			)}
		</>
	);
};

export default UnauthGeofenceBox;
