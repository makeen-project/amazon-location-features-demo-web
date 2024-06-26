/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { ClustersType, IStateProps, SuggestionType, ViewPointType } from "@demo/types";

import createStore from "./createStore";

interface AwsPlaceStoreProps {
	isSearching: boolean;
	isFetchingPlaceData: boolean;
	bound?: number[];
	clusters?: ClustersType;
	clusterZoom: number;
	precision: number;
	suggestions?: SuggestionType[];
	selectedMarker?: SuggestionType;
	hoveredMarker?: SuggestionType;
	marker?: ViewPointType;
	zoom: number;
}

const initialState: IStateProps<AwsPlaceStoreProps> = {
	isSearching: false,
	isFetchingPlaceData: false,
	bound: undefined,
	clusters: undefined,
	clusterZoom: 18,
	precision: 10,
	suggestions: undefined,
	selectedMarker: undefined,
	hoveredMarker: undefined,
	marker: undefined,
	zoom: 5
};

export default createStore<AwsPlaceStoreProps>(initialState);
