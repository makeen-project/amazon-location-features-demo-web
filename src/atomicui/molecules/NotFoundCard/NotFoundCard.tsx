/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { Text, View } from "@aws-amplify/ui-react";
import { IconSearch } from "@demo/assets";
import { useTranslation } from "react-i18next";
import "./styles.scss";

interface IProps {
	title?: string;
	text?: string;
	textFontSize?: string;
}

const NotFoundCard: React.FC<IProps> = ({ title, text, textFontSize = "1.23rem" }) => {
	const { t } = useTranslation();

	return (
		<View className="not-found-card">
			<IconSearch className="nfc-search-icon" />
			<Text className="nfc-title">{title || t("NOT_FOUND_CARD.TITLE")}</Text>
			<Text className="nfc-text" variation="tertiary" fontSize={textFontSize}>
				{text || t("NOT_FOUND_CARD.DESC")}
			</Text>
		</View>
	);
};

export default NotFoundCard;
