import useAwsAuth from "./hooks/useAwsAuth";
import useAwsClient from "./hooks/useAwsClient";
import useAwsGeofence from "./hooks/useAwsGeofence";
import useAwsMap from "./hooks/useAwsMap";
import useAwsPlace from "./hooks/useAwsPlace";
import useAwsRoute from "./hooks/useAwsRoute";
import useAwsTracker from "./hooks/useAwsTracker";
import usePersistedData from "./hooks/usePersistedData";
import useRecordViewPage from "./hooks/useRecordViewPage";
import { EventTypeEnum, TriggeredByEnum } from "./types/Enums";
import { record } from "./utils/analyticsUtils";
import { debounce } from "./utils/debounce";
import { clearStorage } from "./utils/localstorageUtils";

export * as theme from "./theme";
export { default as DemoPage } from "./atomicui/pages/DemoPage/DemoPage";
export {
	useAwsAuth,
	useAwsMap,
	useAwsClient,
	useAwsGeofence,
	useAwsPlace,
	useAwsRoute,
	useAwsTracker,
	usePersistedData,
	useRecordViewPage,
	EventTypeEnum,
	TriggeredByEnum,
	record,
	debounce,
	clearStorage
};
