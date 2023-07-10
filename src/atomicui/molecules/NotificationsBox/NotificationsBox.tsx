import React, { FC, useEffect, useState } from "react";

import { Flex } from "@aws-amplify/ui-react";
import { IconBellSolid, IconGeofenceMarkerDisabled } from "@demo/assets";
import { TextEl } from "@demo/atomicui/atoms";
import { format } from "date-fns";

import { IconicInfoCard } from "../IconicInfoCard";
import "./styles.scss";

interface IProps {
	notification: { title: string; createdAt: string }[];
}

const NotificationsBox: FC<IProps> = ({ notification }) => {
	const [notificationList, setNotificationList] = useState<{ title: string; createdAt: string }[]>([]);
	useEffect(() => {
		setNotificationList(notification);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Flex width="100%" className="notifications-box-container" direction="column" gap="0">
			<Flex justifyContent="space-between" width="100%" padding="0.5rem 1.2rem">
				<TextEl
					fontSize="0.95rem"
					textAlign="center"
					variation="secondary"
					fontFamily="AmazonEmber-Medium"
					text="Geofences notifications"
				/>
				<TextEl
					className="clear-notifications"
					fontSize="0.95rem"
					textAlign="center"
					variation="secondary"
					fontFamily="AmazonEmber-Medium"
					text="Clear notifications"
					onClick={() => setNotificationList([])}
				/>
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
						<TextEl
							fontSize="0.95rem"
							textAlign="center"
							variation="secondary"
							fontFamily="AmazonEmber-Medium"
							text="No new notifications"
						/>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
};

export default NotificationsBox;
