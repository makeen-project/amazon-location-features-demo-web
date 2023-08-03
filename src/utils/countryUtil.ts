import { appConfig } from "@demo/core/constants";

import sleep from "./sleep";

let failCount = 0;

const {
	ENV: { COUNTRY_EVALUATION_URL }
} = appConfig;

export const getCountryCodeByIp: () => Promise<string> = async () => {
	try {
		const response = await fetch(COUNTRY_EVALUATION_URL);
		const country = response.headers.get("x-country");

		failCount = 0;

		return country || "Unknown";
	} catch (error) {
		failCount++;
		console.log("error: ", error);

		// try three times before failing
		if (failCount === 3) {
			throw error;
		} else {
			sleep(1000);
			return await getCountryCodeByIp();
		}
	}
};
