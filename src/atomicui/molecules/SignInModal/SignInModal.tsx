/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import React from "react";

import { Button, Flex } from "@aws-amplify/ui-react";
import { IconGeofence, IconRoute } from "@demo/assets";
import { Modal, TextEl } from "@demo/atomicui/atoms";
import { useAmplifyAuth } from "@demo/hooks";
import { useTranslation } from "react-i18next";
import "./styles.scss";

interface SignInModalProps {
	open: boolean;
	onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ open, onClose }) => {
	const { onLogin } = useAmplifyAuth();
	const { t } = useTranslation();

	return (
		<Modal
			data-testid="sign-in-modal"
			open={open}
			onClose={onClose}
			className="sign-in-modal"
			content={
				<Flex className="sign-in-modal-content">
					<Flex gap={0} justifyContent="space-between" alignSelf="center" width="152px">
						<Flex className="sign-in-modal-icon-container">
							<IconRoute />
						</Flex>
						<Flex className="sign-in-modal-icon-container">
							<IconGeofence />
						</Flex>
					</Flex>
					<TextEl
						fontFamily="AmazonEmber-Bold"
						fontSize="20px"
						lineHeight="28px"
						marginTop="40px"
						textAlign="center"
						text={t("sign_in_modal__1.text")}
					/>
					<TextEl
						variation="tertiary"
						marginTop="16px"
						textAlign="center"
						whiteSpace="pre-line"
						text={t("sign_in_modal__2.text")}
					/>
					<Button
						data-testid="sign-in-button"
						variation="primary"
						fontFamily="AmazonEmber-Bold"
						marginTop="32px"
						onClick={() => onLogin()}
					>
						{t("sign_in.text")}
					</Button>
					<Flex className="maybe-later-button" onClick={onClose}>
						<TextEl
							data-testid="maybe-later-button"
							fontFamily="AmazonEmber-Bold"
							fontSize="14px"
							lineHeight="16px"
							textAlign="center"
							text={t("sign_in_modal__maybe_later.text")}
						/>
					</Flex>
				</Flex>
			}
		/>
	);
};

export default SignInModal;
