"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
require("jasmine");
var loginLib_1 = require("../Lib/loginLib");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var preConditionUtil_1 = require("../Util/preConditionUtil");
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
        waitStatementUtil_1.waitStatementUtil.customWait2();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
// describe("User will select  date and country", function()
// {
//     let b2BDashboardLib = new b2bDashboardLib()
//     preConditionUtil.setSyncTimeoutConfig()
//     waitStatementUtil.implicitWait()
//     it("session, date and country selection", function()
//     {
//     }
//     )
//   }
//   )
