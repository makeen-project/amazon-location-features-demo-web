import React, { useEffect, useState } from "react";

import { Flex, Text } from "@aws-amplify/ui-react";
import { IconBellSolid, IconGeofenceMarkerDisabled } from "@demo/assets";
import { format } from "date-fns";

import { IconicInfoCard } from "../IconicInfoCard";
import "./styles.scss";

interface IProps {
	notification: { title: string; createdAt: string }[];
}

const NotificationsBox: React.FC<IProps> = ({ notification }) => {
	const [notificationList, setNotificationList] = useState<{ title: string; createdAt: string }[]>([]);
	useEffect(() => {
		setNotificationList(notification);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Flex width="100%" className="notifications-box-container" direction="column" gap="0">
			<Flex justifyContent="space-between" width="100%" padding="0.5rem 1.2rem">
				<Text className="medium" fontSize="0.95rem" textAlign="center" variation="secondary">
					Geofences notifications
				</Text>
				<Text
					className="medium clear-notifications"
					fontSize="0.95rem"
					textAlign="center"
					variation="secondary"
					onClick={() => setNotificationList([])}
				>
					Clear notifications
				</Text>
			</Flex>
			<Flex className="notification-list" direction="column" gap="0">
				{!!notificationList.length ? (
					notificationList?.map((item, index) => (
						<Flex key={index} direction="column" width="100%" gap="0">
							<IconicInfoCard
								IconComponent={<IconGeofenceMarkerDisabled className="primary-icon" width={24} />}
								title={item.title}
								description={`${format(new Date(item.createdAt), "p")}`.toLowerCase()}
								textContainerMarginLeft="0"
								cardMargin="0.7rem 0"
								cardAlignItems="center"
							/>
							<Flex className="divider" />
						</Flex>
					))
				) : (
					<Flex className="no-notifications" direction="column" gap="0">
						<IconBellSolid />
						<Text className="medium" fontSize="0.95rem" textAlign="center" variation="secondary">
							No new notifications
						</Text>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
};

export default NotificationsBox;
