import sleep from "./sleep";

let failCount = 0;

export const getCountryCodeByIp: () => Promise<string> = async () => {
	try {
		const response = await fetch("https://dev.amazonlocation.services/assets/doNotDelete.txt");
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
