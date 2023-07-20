const fs = require("fs");
const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");

// Create an Amazon Translate service client object
const client = new TranslateClient({
	region: "us-east-1",
	credentials: {
		accessKeyId: "AKIASTXKVVPIKJW2IN4C",
		secretAccessKey: "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"
	}
});

// Languages to translate to
const languages = ["ar", "de", "es", "fr", "he", "hi", "it", "ja", "ko", "pt-BR", "zh-CN", "zh-TW"];

// Read the JSON file
const json = JSON.parse(fs.readFileSync("../../src/locales/en/en.json", "utf8"));

const translateText = async (text, targetLang) => {
	const params = {
		Text: text,
		SourceLanguageCode: "en",
		TargetLanguageCode: targetLang
	};

	try {
		const command = new TranslateTextCommand(params);
		const response = await client.send(command);
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
	fs.writeFileSync(`../../src/locales/${lang}/${lang}.json`, JSON.stringify(translatedJson, null, 2));
	console.log(`Translation to ${lang} completed.`);
});
