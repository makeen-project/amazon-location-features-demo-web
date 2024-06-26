/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { IStateProps } from "@demo/types";
import maplibregl from "maplibre-gl";

import createStore from "./createStore";

export interface AwsMapStoreProps {
	mapRef?: maplibregl.Map;
}

export const initialState: IStateProps<AwsMapStoreProps> = {};

export default createStore<AwsMapStoreProps>(initialState);
