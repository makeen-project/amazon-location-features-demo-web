import { useState } from "react";

import { appConfig } from "@demo/core/constants";
import { EventTypeEnum } from "@demo/types/Enums";
import { debounce, record } from "@demo/utils";
import { useTranslation } from "react-i18next";

const recordFilterEvent = debounce(
	(recordAttributes: { [key: string]: string }) =>
		record([{ EventType: EventTypeEnum.API_PLAYGROUND_FILTERS_APPLIED, Attributes: recordAttributes }]),
	5000
);
const {
	ENV: { API_PLAYGROUND_LIST_FILENAME }
} = appConfig;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TODO = any;

const useApiPlaygroundList = () => {
	const [apisList, setApisList] = useState<TODO | null>(null);
	const [isLoading, setLoading] = useState(false);
	const { t, i18n } = useTranslation();
};

export default useApiPlaygroundList;
