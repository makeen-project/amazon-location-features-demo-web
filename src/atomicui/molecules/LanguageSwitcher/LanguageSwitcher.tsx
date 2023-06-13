/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import React from "react";

import { Flex } from "@aws-amplify/ui-react";
import { DropdownEl } from "@demo/atomicui/atoms";
import { languageSwitcherData } from "@demo/core/constants";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation();
	const defaultOption = languageSwitcherData.find(({ value }) => value === i18n.language);

	return (
		<Flex className="language-switcher-container">
			<DropdownEl
				defaultOption={defaultOption}
				options={languageSwitcherData}
				onSelect={({ value }) => i18n.changeLanguage(value)}
				showSelected
			/>
		</Flex>
	);
};

export default LanguageSwitcher;
