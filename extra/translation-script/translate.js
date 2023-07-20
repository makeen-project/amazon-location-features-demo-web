const fs = require("fs");
const path = require("path");

const AWS = require("aws-sdk");

const { excludedPhrases } = require("./exclude-phrases");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION
});

const translate = new AWS.Translate();
const localesDirectory = "../../src/locales";
const translationFilePath = `${localesDirectory}/en/en.json`;

// Languages to translate to
const languages = ["ar", "de", "es", "fr", "he", "hi", "it", "ja", "ko", "pt-BR", "zh-CN", "zh-TW"];

// Read the JSON file
const jsonFilePath = path.join(__dirname, translationFilePath);
const json = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

// Function to translate text
const translateText = async (text, targetLang) => {
	if (excludedPhrases.includes(text)) {
		return text;
	}

	const params = {
		Text: text,
		SourceLanguageCode: "en",
		TargetLanguageCode: targetLang
	};

	try {
		const response = await translate.translateText(params).promise();
		return response.TranslatedText;
	} catch (error) {
		console.error(error);
	}
};

// Function to translate JSON
const translateJson = async (json, targetLang) => {
	const translatedJson = {};

	for (const key in json) {
		translatedJson[key] = { text: await translateText(json[key].text, targetLang) };
	}

	return translatedJson;
};

// Translate the JSON to each language
languages.forEach(async lang => {
	const translatedJson = await translateJson(json, lang);
	const dirPath = path.join(__dirname, `${localesDirectory}/${lang}`);
	const outputPath = path.join(dirPath, `${lang}.json`);

	// Ensure the directory exists
	fs.mkdirSync(dirPath, { recursive: true });

	fs.writeFileSync(outputPath, JSON.stringify(translatedJson, null, 2));
	console.log(`Translation to ${lang} completed.`);
});
