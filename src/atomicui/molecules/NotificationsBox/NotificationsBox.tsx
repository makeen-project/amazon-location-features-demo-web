import React, { useEffect, useState } from "react";

import { Flex, Text } from "@aws-amplify/ui-react";
import { IconBellSolid, IconGeofenceMarkerDisabled } from "@demo/assets";
import { IconicInfoCard } from "@demo/atomicui/molecules";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import "./styles.scss";

interface IProps {
	notification: { title: string; createdAt: string }[];
}

const NotificationsBox: React.FC<IProps> = ({ notification }) => {
	const [notificationList, setNotificationList] = useState<{ title: string; createdAt: string }[]>([]);
	const { t } = useTranslation();

	useEffect(() => {
		setNotificationList(notification);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Flex width="100%" className="notifications-box-container" direction="column" gap="0">
			<Flex justifyContent="space-between" width="100%" padding="0.5rem 1.2rem">
				<Text className="medium" fontSize="0.95rem" textAlign="center" variation="secondary">
					{t("notifications_box__geofences_notifications.text")}
				</Text>
				<Text
					className="medium clear-notifications"
					fontSize="0.95rem"
					textAlign="center"
					variation="secondary"
					onClick={() => setNotificationList([])}
				>
					{t("notifications_box__clear_notifications.text")}
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
							{t("notifications_box__no_new_notifications.text")}
						</Text>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
};

export default NotificationsBox;
