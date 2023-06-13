import React from "react";

import i18n from "@demo/locales";

const LanguageSwitcher: React.FC = () => {
	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};

	return (
		<div>
			<button onClick={() => changeLanguage("en")}>English</button>
			<button onClick={() => changeLanguage("es")}>Español</button>
		</div>
	);
};

export default LanguageSwitcher;
