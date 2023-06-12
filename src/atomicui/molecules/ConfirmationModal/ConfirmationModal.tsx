/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import React from "react";

import { Button, Flex, Text } from "@aws-amplify/ui-react";
import { Modal } from "@demo/atomicui/atoms";
import { useTranslation } from "react-i18next";
import "./styles.scss";

interface ConfirmationModalProps {
	open: boolean;
	onClose: () => void;
	heading?: string;
	description?: string | React.ReactNode;
	onConfirm: () => void;
	confirmationText?: string;
	showLearnMore?: boolean;
	handleLeanMore?: () => void;
	hideCancelButton?: boolean;
	cancelationText?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
	open,
	onClose,
	heading,
	description,
	onConfirm,
	confirmationText,
	showLearnMore = false,
	handleLeanMore = () => {},
	hideCancelButton = false,
	cancelationText
}) => {
	const { t } = useTranslation();

	return (
		<Modal
			data-testid="confirmation-modal-container"
			open={open}
			onClose={onClose}
			className="confirmation-modal"
			hideCloseIcon
			content={
				<Flex className="confirmation-content">
					<Text className="bold medium-text" textAlign="center">
						{heading || t("CONFIRMATION_MODAL.HEADING")}
					</Text>
					{typeof description === "string" ? (
						<Text
							className="regular-text"
							variation="tertiary"
							marginTop="1.23rem"
							textAlign="center"
							whiteSpace="pre-line"
						>
							{description || t("CONFIRMATION_MODAL.DESC")}
						</Text>
					) : (
						description
					)}
					<Button
						data-testid="confirmation-button"
						variation="primary"
						fontFamily="AmazonEmber-Bold"
						marginTop="2.46rem"
						onClick={onConfirm}
					>
						{confirmationText || t("CONFIRMATION_MODAL.CONFIRMATION_TEXT")}
					</Button>
					{showLearnMore && (
						<Flex
							data-testid="confirmation-learn-more-button"
							className="confirmation-learn-more-button"
							onClick={handleLeanMore}
						>
							<Text className="bold" fontSize="1.08rem" textAlign="center">
								{t("CONFIRMATION_MODAL.LEARN_MORE")}
							</Text>
						</Flex>
					)}
					{!hideCancelButton && (
						<Flex data-testid="confirmation-cancel-button" className="confirmation-cancel-button" onClick={onClose}>
							<Text className="bold" fontSize="1.08rem" textAlign="center">
								{cancelationText || t("CONFIRMATION_MODAL.CANCELATION_TEXT")}
							</Text>
						</Flex>
					)}
				</Flex>
			}
		/>
	);
};

export default ConfirmationModal;
