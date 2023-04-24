/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */
/// <reference types="cypress" />

//STR
// Case 1:
// 1-Go to https://qa.amazonlocation.services/demo
// 2-I click on the hamburger menu
// 3-I go to settings
// 4-I open connect AWS account
// 5-I add IdentityPoolId
// 6-I add UserDomain
// 7-I add UserPoolClientId
// 8-I add UserPoolId
// 9-I add WebSocketUrl
// 10-I click on connect
// 11- Verify User is able to connect to AWS from settings

const identityPoolId = Cypress.env("IDENTITY_POOL_ID");
const userDomain = Cypress.env("USER_DOMAIN");
const userPoolClientId = Cypress.env("USER_POOL_CLIENT_ID");
const userPoolId = Cypress.env("USER_POOL_ID");
const webSocketUrl = Cypress.env("WEB_SOCKET_URL");

console.log(identityPoolId);
console.log(userDomain);
console.log(userPoolClientId);
console.log(userPoolId);
console.log(webSocketUrl);

describe("Check connecting to AWS from settings, from tracker and from geofence Case 1", () => {
    it("authentication", () => {
        cy.visit(Cypress.env("URL"), {
            auth: {
                username: Cypress.env("USERNAME"),
                password: Cypress.env("PASSWORD")
            }
        });
        cy.wait(20000);
        cy.get('[id="Icon"]').click();
        cy.wait(2000);
        cy.contains("Settings").click();
        cy.wait(2000);
        cy.contains("Connect AWS Account").click();
        cy.wait(2000);
        cy.get('[placeholder="Enter IdentityPoolId"]').type(identityPoolId);
        cy.wait(2000);
        cy.get('[placeholder="Enter UserDomain"]').type(userDomain);
        cy.wait(2000);
        cy.get('[placeholder="Enter UserPoolClientId"]').type(userPoolClientId);
        cy.wait(2000);
        cy.get('[placeholder="Enter UserPoolId"]').type(userPoolId);
        cy.wait(2000);
        cy.get('[placeholder="Enter WebSocketUrl"]').type(webSocketUrl);
        cy.wait(2000);
        cy.get('[type="button"]').eq(3).click();
        cy.wait(6000);
        cy.contains("Connect AWS Account").click();
        cy.wait(2000);
        cy.get("div").should("contain", "Disconnect AWS Account");
        cy.wait(2000);
    });
});

// ***********************************************************
//STR
// Case 2:
// 1-Go to https://qa.amazonlocation.services/demo
// 2-I click on the hamburger menu
// 3-I open tracker
// 4-I add IdentityPoolId
// 5-I add UserDomain
// 6-I add UserPoolClientId
// 7-I add UserPoolId
// 8-I add WebSocketUrl
// 9-I click on connect
// 10-Verify User is able to connect to AWS from tracker
// ***********************************************************

context("Check connecting to AWS from settings, from tracker and from geofence Case 2", () => {
    it("authentication", () => {
        cy.visit(Cypress.env("URL"), {
            auth: {
                username: Cypress.env("USERNAME"),
                password: Cypress.env("PASSWORD")
            }
        });
        cy.wait(20000);
        cy.get('[id="Icon"]').click();
        cy.wait(2000);
        cy.contains("Tracker").click();
        cy.wait(2000);
        cy.get('[placeholder="Enter IdentityPoolId"]').type(identityPoolId);
        cy.wait(2000);
        cy.get('[placeholder="Enter UserDomain"]').type(userDomain);
        cy.wait(2000);
        cy.get('[placeholder="Enter UserPoolClientId"]').type(userPoolClientId);
        cy.wait(2000);
        cy.get('[placeholder="Enter UserPoolId"]').type(userPoolId);
        cy.wait(2000);
        cy.get('[placeholder="Enter WebSocketUrl"]').type(webSocketUrl);
        cy.wait(2000);
        cy.get('[type="button"]').eq(3).click();
        cy.wait(6000);
        cy.get("div").should("contain", "Your AWS account is now connected.");
        cy.wait(2000);
    });
});

// ***********************************************************
//STR
// Case 3:
// 1-Go to https://qa.amazonlocation.services/demo
// 2-I click on the hamburger menu
// 3-I go to Geofence
// 4-I add IdentityPoolId
// 5-I add UserDomain
// 6-I add UserPoolClientId
// 7-I add UserPoolId
// 8-I add WebSocketUrl
// 9-I click on connect
// 10-Verify User is able to connect to AWS from geofence
// ***********************************************************

context("Check connecting to AWS from settings, from tracker and from geofence Case 3", () => {
    it("authentication", () => {
        cy.visit(Cypress.env("URL"), {
            auth: {
                username: Cypress.env("USERNAME"),
                password: Cypress.env("PASSWORD")
            }
        });
        cy.wait(20000);
        cy.get('[id="Icon"]').click();
        cy.wait(2000);
        cy.contains("Geofence").click();
        cy.wait(2000);
        cy.get('[placeholder="Enter IdentityPoolId"]').type(identityPoolId);
        cy.wait(2000);
        cy.get('[placeholder="Enter UserDomain"]').type(userDomain);
        cy.wait(2000);
        cy.get('[placeholder="Enter UserPoolClientId"]').type(userPoolClientId);
        cy.wait(2000);
        cy.get('[placeholder="Enter UserPoolId"]').type(userPoolId);
        cy.wait(2000);
        cy.get('[placeholder="Enter WebSocketUrl"]').type(webSocketUrl);
        cy.wait(2000);
        cy.get('[type="button"]').eq(3).click();
        cy.wait(6000);
        cy.get("div").should("contain", "Your AWS account is now connected.");
        cy.wait(2000);
    });
});
