/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { default as enTranslations } from "./en/en.json";
import { default as esTranslations } from "./es/es.json";

const resources = {
	en: {
		translation: enTranslations
	},
	es: {
		translation: esTranslations
	}
};

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: "en",
	supportedLngs: ["en", "es"],
	detection: {
		order: ["queryString", "cookie", "localStorage", "navigator", "htmlTag"],
		caches: ["cookie", "localStorage"]
	},
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
