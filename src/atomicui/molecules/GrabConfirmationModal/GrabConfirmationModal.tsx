/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import React from "react";

import { Text } from "@aws-amplify/ui-react";
import { ConfirmationModal } from "@demo/atomicui/molecules";
import { appConfig } from "@demo/core/constants";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const {
	LINKS: { GRAB_DEVELOPER_GUIDE }
} = appConfig;

interface GrabConfirmationModalProps {
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
}

const GrabConfirmationModal: React.FC<GrabConfirmationModalProps> = ({ open, onClose, onConfirm }) => {
	const { t } = useTranslation();

	return (
		<ConfirmationModal
			open={open}
			onClose={onClose}
			heading={t("GRAB_CONFIRMATION_MODAL.HEADING") as string}
			description={
				<Text className="small-text" variation="tertiary" marginTop="1.23rem" textAlign="center" whiteSpace="pre-line">
					{t("GRAB_CONFIRMATION_MODAL.DESC")}
				</Text>
			}
			onConfirm={onConfirm}
			confirmationText={t("GRAB_CONFIRMATION_MODAL.CONFIRMATION_TEXT") as string}
			showLearnMore={true}
			handleLeanMore={() => window.open(GRAB_DEVELOPER_GUIDE, "_blank")}
		/>
	);
};

export default GrabConfirmationModal;
