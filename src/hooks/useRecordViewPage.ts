import { useEffect } from "react";

import { appConfig } from "@demo/core";
import { EventTypeEnum } from "@demo/types/Enums";

import { record } from "@demo/utils/analyticsUtils";
import { uuid } from "@demo/utils/uuid";

const {
	PERSIST_STORAGE_KEYS: { LOCAL_STORAGE_PREFIX, PAGE_VIEW_IDENTIFIERS }
} = appConfig.default;
const pageViewIdentifiersKey = `${LOCAL_STORAGE_PREFIX}${PAGE_VIEW_IDENTIFIERS}`;

let pageViewDateTime: Date;
let pageViewIdentifier: string;

const useRecordViewPage = (pageName: string) => {
	useEffect(() => {
		pageViewIdentifier = uuid.randomUUID();

		const pageViewIdentifiersObj = JSON.parse(localStorage.getItem(pageViewIdentifiersKey) || "{}");
		pageViewIdentifiersObj[location.pathname.replaceAll("/", "_")] = `${pageViewIdentifier}__${pageName}`;
		localStorage.setItem(pageViewIdentifiersKey, JSON.stringify(pageViewIdentifiersObj));

		const path = location.pathname;
		pageViewDateTime = new Date();
		record([{ EventType: EventTypeEnum.VIEW_PAGE, Attributes: { path, pageName, pageViewIdentifier } }]);

		return () => {
			const pageViewDuration = String(((new Date().getTime() - pageViewDateTime.getTime()) / 1000 / 60).toFixed(1));
			record([
				{ EventType: EventTypeEnum.LEAVE_PAGE, Attributes: { path, pageName, pageViewIdentifier, pageViewDuration } }
			]);
		};
	}, [pageName]);

	return {};
};

export default useRecordViewPage;
