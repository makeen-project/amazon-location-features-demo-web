/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

const sampleFiltersData: {
	key: "features" | "language" | "platform";
	title: string;
	options: {
		label: string;
		value: string;
	}[];
}[] = [
	// {
	// 	key: "features",
	// 	title: "SAMPLES.FILTER_1.TITLE",
	// 	options: [
	// 		{ label: "SAMPLES.FILTER_1.OPTION_1.LABEL", value: "SAMPLES.FILTER_1.OPTION_1.VALUE" },
	// 		{ label: "SAMPLES.FILTER_1.OPTION_2.LABEL", value: "SAMPLES.FILTER_1.OPTION_2.VALUE" },
	// 		{ label: "SAMPLES.FILTER_1.OPTION_3.LABEL", value: "SAMPLES.FILTER_1.OPTION_3.VALUE" },
	// 		{ label: "SAMPLES.FILTER_1.OPTION_4.LABEL", value: "SAMPLES.FILTER_1.OPTION_4.VALUE" },
	// 		{ label: "SAMPLES.FILTER_1.OPTION_5.LABEL", value: "SAMPLES.FILTER_1.OPTION_5.VALUE" },
	// 		{ label: "SAMPLES.FILTER_1.OPTION_6.LABEL", value: "SAMPLES.FILTER_1.OPTION_6.VALUE" },
	// 		{ label: "SAMPLES.FILTER_1.OPTION_7.LABEL", value: "SAMPLES.FILTER_1.OPTION_7.VALUE" }
	// 	]
	// },
	{
		key: "language",
		title: "SAMPLES.FILTER_2.TITLE",
		options: [
			// { label: "SAMPLES.FILTER_2.OPTION_1.LABEL", value: "SAMPLES.FILTER_2.OPTION_1.VALUE" },
			// { label: "SAMPLES.FILTER_2.OPTION_2.LABEL", value: "SAMPLES.FILTER_2.OPTION_2.VALUE" },
			{ label: "SAMPLES.FILTER_2.OPTION_3.LABEL", value: "SAMPLES.FILTER_2.OPTION_3.VALUE" },
			// { label: "SAMPLES.FILTER_2.OPTION_4.LABEL", value: "SAMPLES.FILTER_2.OPTION_4.VALUE" },
			// { label: "SAMPLES.FILTER_2.OPTION_5.LABEL", value: "SAMPLES.FILTER_2.OPTION_5.VALUE" },
			// { label: "SAMPLES.FILTER_2.OPTION_6.LABEL", value: "SAMPLES.FILTER_2.OPTION_6.VALUE" },
			{ label: "SAMPLES.FILTER_2.OPTION_7.LABEL", value: "SAMPLES.FILTER_2.OPTION_7.VALUE" }
			// { label: "SAMPLES.FILTER_2.OPTION_8.LABEL", value: "SAMPLES.FILTER_2.OPTION_8.VALUE" }
		]
	}
	// {
	// 	key: "platform",
	// 	title: "SAMPLES.FILTER_3.TITLE",
	// 	options: [
	// 		{ label: "SAMPLES.FILTER_3.OPTION_1.LABEL", value: "SAMPLES.FILTER_3.OPTION_1.VALUE" },
	// 		{ label: "SAMPLES.FILTER_3.OPTION_2.LABEL", value: "SAMPLES.FILTER_3.OPTION_2.VALUE" },
	// 		{ label: "SAMPLES.FILTER_3.OPTION_3.LABEL", value: "SAMPLES.FILTER_3.OPTION_3.VALUE" }
	// 	]
	// }
];

export default sampleFiltersData;
