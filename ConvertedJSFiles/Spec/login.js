"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
require("jasmine");
var loginLib_1 = require("../Lib/loginLib");
var b2bCandidateRegistrationLib_1 = require("../Lib/b2bCandidateRegistrationLib");
var b2bDashboardLib_1 = require("../Lib/b2bDashboardLib");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var preConditionUtil_1 = require("../Util/preConditionUtil");
var b2bCandidateDetailsLib_1 = require("../Lib/b2bCandidateDetailsLib");
describe("User will login to b2c portal", function () {
    var Loginlib = new loginLib_1.loginLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("User login", function () {
        //browser.get("https://qa-schoolexams-uat.britishcouncil.org/#/login/")
        protractor_1.browser.get("https://qa-schoolexamsportal-uat.britishcouncil.org/");
        waitStatementUtil_1.waitStatementUtil.customWait2();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
        Loginlib.userLogin();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User will select  date and country", function () {
    var b2BDashboardLib = new b2bDashboardLib_1.b2bDashboardLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("session, date and country selection", function () {
        b2BDashboardLib.SelectSessionDate();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User will click on create registrationButton", function () {
    var b2BCandidateRegistrationLib = new b2bCandidateRegistrationLib_1.b2bCandidateRegistrationLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("User will click on create registrationButton", function () {
        b2BCandidateRegistrationLib.ClickOnCreateRegisterationButton();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User will create b2bRegistration", function () {
    var b2BCandidateDetailsLib = new b2bCandidateDetailsLib_1.b2bCandidateDetailsLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("session, date and country selection", function () {
        b2BCandidateDetailsLib.candidateDetails();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
