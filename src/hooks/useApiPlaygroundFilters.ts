import { useCallback, useEffect, useState } from "react";

// import { EventTypeEnum } from "@demo/types/Enums";
// import { debounce, record } from "@demo/utils";

import useApiPlaygroundList from "./useApiPlaygroundList";

// const recordFilterEvent = debounce(
// 	(recordAttributes: { [key: string]: string }) =>
// 		record([{ EventType: EventTypeEnum.API_PLAYGROUND_FILTERS_APPLIED, Attributes: recordAttributes }]),
// 	5000
// );

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TODO = any;
type DATA = { [key: string]: TODO[] };

const useApiPlaygroundFilters = () => {
	const [isFiltering, setIsFiltering] = useState(false);
	const [searchText, setSearchText] = useState("");
	const [filteredApiListData, setFilteredApiListData] = useState<DATA>({});
	const { isFetching, apiListData } = useApiPlaygroundList();

	const filterBySearch = useCallback(() => {
		setIsFiltering(true);
		const filteredObj: DATA = {};

		for (const category in apiListData) {
			const filteredItems = apiListData[category].filter(
				(item: TODO) => item.title.includes(searchText) || (item.description && item.description.includes(searchText))
			);

			if (filteredItems.length > 0) {
				filteredObj[category] = filteredItems;
			}
		}

		setFilteredApiListData(filteredObj);
		setIsFiltering(false);
	}, [apiListData, searchText]);

	useEffect(() => {
		if (!isFetching && !!apiListData && !!searchText) {
			filterBySearch();
		}
	}, [isFetching, apiListData, searchText, filterBySearch]);

	return { isFiltering, setIsFiltering, searchText, setSearchText, filteredApiListData };
};

export default useApiPlaygroundFilters;
