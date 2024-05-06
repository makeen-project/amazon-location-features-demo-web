import { useCallback, useEffect, useState } from "react";

import { appConfig } from "@demo/core/constants";
import { ApiListItem } from "@demo/types";
import { errorHandler } from "@demo/utils";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import useApiPlaygroundList from "./useApiPlaygroundList";

const {
	ROUTES: { NOT_FOUND }
} = appConfig;

const useApiPlaygroundDetails = () => {
	const [isFetching, setIsFetching] = useState(false);
	const [apiDetails, setApiDetails] = useState<ApiListItem | null>();
	const { apiId } = useParams();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { apiListData } = useApiPlaygroundList();

	const fetchApiDetails = useCallback(() => {
		try {
			const category = apiId!.split("_")[0];
			const id = apiId!.split("_")[1];
			const data = apiListData![category].find(api => api.id === id);

			if (!!data) {
				setApiDetails(data);
			} else {
				navigate(NOT_FOUND);
				throw new Error("API not found.");
			}
		} catch (error) {
			errorHandler(error, t("Failed to fetch API details"));
		} finally {
			setIsFetching(false);
		}
	}, [apiId, apiListData, navigate, t]);

	useEffect(() => {
		if (!!apiListData && !!apiId) {
			fetchApiDetails();
		}
	}, [apiListData, apiId, fetchApiDetails]);

	return { isFetching, apiDetails };
};

export default useApiPlaygroundDetails;
