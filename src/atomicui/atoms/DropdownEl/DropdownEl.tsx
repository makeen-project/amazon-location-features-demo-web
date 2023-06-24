/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import React, { useEffect, useRef, useState } from "react";

import { IconArrow } from "@demo/assets";
import { useTranslation } from "react-i18next";
import "./styles.scss";

interface DropdownElProps {
	defaultOption?: { value: string; label: string };
	options: { value: string; label: string }[];
	onSelect: (option: { value: string; label: string }) => void;
	showSelected?: boolean;
}

const DropdownEl: React.FC<DropdownElProps> = ({ defaultOption, options, onSelect, showSelected = false }) => {
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const { t, i18n } = useTranslation();
	const langDir = i18n.dir();
	const isLtr = langDir === "ltr";

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleClick = (option: { value: string; label: string }) => {
		onSelect(option);
		setOpen(false);
	};

	return (
		<div ref={dropdownRef} className="dropdown-container">
			<div className="trigger" onClick={() => setOpen(!open)}>
				<p style={{ direction: langDir }}>{t(defaultOption?.label as string) || t("dropdown__placeholder.text")}</p>
				<IconArrow
					style={{
						transform: open ? "rotate(180deg)" : "rotate(0deg)",
						width: "1.23rem",
						height: "1.23rem",
						fill: "var(--primary-color)"
					}}
				/>
			</div>
			{open && (
				<ul className="options">
					{options.map(option => (
						<li
							key={option.value}
							className={showSelected && defaultOption?.value === option.value ? "selected" : ""}
							style={{ display: "flex", justifyContent: isLtr ? "start" : "end" }}
							onClick={() => handleClick(option)}
						>
							{t(option.label)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default DropdownEl;
