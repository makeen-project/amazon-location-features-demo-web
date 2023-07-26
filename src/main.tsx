/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import ReactDOM from "react-dom/client";

import App from "./App";

import "./locales/i18n";

console.log("DEMO MAIN");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
