/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

describe("Current location", () => {
	it("CL-001 - should allow user to see their current location", { scrollBehavior: false }, () => {
		cy.visitDomain(`${Cypress.env("WEB_DOMAIN")}/demo`);
		cy.get('[class="mapboxgl-user-location-dot mapboxgl-marker mapboxgl-marker-anchor-center"]').should("be.visible");
	});
});
