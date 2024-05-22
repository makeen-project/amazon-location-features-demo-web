/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { FC, lazy } from "react";

const AmplifyConfigInit = lazy(() =>
	import("./AmplifyConfigInit").then(module => ({
		default: module.default
	}))
);

const DempPage: FC = () => <AmplifyConfigInit />;

export default DempPage;
