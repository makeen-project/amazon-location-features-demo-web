/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { default as arTranslations } from "./ar/ar.json";
import { default as deTranslations } from "./de/de.json";
import { default as enTranslations } from "./en/en.json";
import { default as esTranslations } from "./es/es.json";
import { default as frTranslations } from "./fr/fr.json";
import { default as heTranslations } from "./he/he.json";
import { default as hiTranslations } from "./hi/hi.json";
import { default as itTranslations } from "./it/it.json";
import { default as jaTranslations } from "./ja/ja.json";
import { default as koTranslations } from "./ko/ko.json";
import { default as ptbrTranslations } from "./pt-BR/pt-BR.json";
import { default as zhcnTranslations } from "./zh-CN/zh-CN.json";
import { default as zhtwTranslations } from "./zh-TW/zh-TW.json";

const resources = {
	en: {
		translation: enTranslations
	},
	de: {
		translation: deTranslations
	},
	es: {
		translation: esTranslations
	},
	fr: {
		translation: frTranslations
	},
	it: {
		translation: itTranslations
	},
	"pt-BR": {
		translation: ptbrTranslations
	},
	"zh-CN": {
		translation: zhcnTranslations
	},
	"zh-TW": {
		translation: zhtwTranslations
	},
	ja: {
		translation: jaTranslations
	},
	ko: {
		translation: koTranslations
	},
	ar: {
		translation: arTranslations
	},
	he: {
		translation: heTranslations
	},
	hi: {
		translation: hiTranslations
	}
};

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: false,
		resources,
		ns: ["translation"],
		defaultNS: "translation",
		fallbackLng: "en",
		supportedLngs: ["en", "de", "es", "fr", "it", "pt-BR", "zh-CN", "zh-TW", "ja", "ko", "ar", "he", "hi"],
		detection: {
			order: ["queryString", "cookie", "localStorage", "navigator", "htmlTag"],
			caches: ["cookie", "localStorage"]
		},
		interpolation: {
			escapeValue: false
		},
		react: {
			useSuspense: true
		}
	});

export default i18n;
