/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import React from "react";

import { Button, CheckboxField, Flex, Text } from "@aws-amplify/ui-react";
import { Modal } from "@demo/atomicui/atoms";
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
	showConfirmationCheckbox?: boolean;
	confirmationCheckboxLabel?: string;
	confirmationCheckboxValue?: string;
	confirmationCheckboxName?: string;
	confirmationCheckboxOnChange?: (e: boolean) => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
	open,
	onClose,
	heading = "Confirmation",
	description = "Are you sure?",
	onConfirm,
	confirmationText = "Continue",
	showLearnMore = false,
	handleLeanMore = () => {},
	hideCancelButton = false,
	cancelationText = "Cancel",
	showConfirmationCheckbox,
	confirmationCheckboxLabel = "Don't ask me again",
	confirmationCheckboxValue = "",
	confirmationCheckboxName = "doNotAskAgain",
	confirmationCheckboxOnChange = () => {}
}) => {
	const [isConfirmationChecked, setIsConfirmationChecked] = React.useState(false);
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
						{heading}
					</Text>
					{typeof description === "string" ? (
						<Text
							className="regular-text"
							variation="tertiary"
							marginTop="1.23rem"
							textAlign="center"
							whiteSpace="pre-line"
						>
							{description}
						</Text>
					) : (
						description
					)}
					{showConfirmationCheckbox && (
						<CheckboxField
							className="custom-checkbox confirmation-checkbox"
							size="large"
							label={confirmationCheckboxLabel}
							name={confirmationCheckboxName || "confirmationCheckboxName"}
							value={confirmationCheckboxValue}
							checked={isConfirmationChecked}
							onChange={e => {
								setIsConfirmationChecked(e.target.checked);
								confirmationCheckboxOnChange(e.target.checked);
							}}
							marginTop="2rem"
						/>
					)}
					<Button
						data-testid="confirmation-button"
						variation="primary"
						fontFamily="AmazonEmber-Bold"
						marginTop={showConfirmationCheckbox ? "2rem" : "2.46rem"}
						onClick={onConfirm}
					>
						{confirmationText}
					</Button>
					{showLearnMore && (
						<Flex
							data-testid="confirmation-learn-more-button"
							className="confirmation-learn-more-button"
							onClick={handleLeanMore}
						>
							<Text className="bold" fontSize="1.08rem" textAlign="center">
								Learn more
							</Text>
						</Flex>
					)}
					{!hideCancelButton && (
						<Flex data-testid="confirmation-cancel-button" className="confirmation-cancel-button" onClick={onClose}>
							<Text className="bold" fontSize="1.08rem" textAlign="center">
								{cancelationText}
							</Text>
						</Flex>
					)}
				</Flex>
			}
		/>
	);
};

export default ConfirmationModal;
