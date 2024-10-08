/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { IoT } from "@aws-sdk/client-iot";
import { Location } from "@aws-sdk/client-location";
import { IStateProps } from "@demo/types";

import createStore from "./createStore";

export interface ClientStoreProps {
	locationClient?: Location;
	iotClient?: IoT;
}

export const initialState: IStateProps<ClientStoreProps> = {};

export default createStore<ClientStoreProps>(initialState);
