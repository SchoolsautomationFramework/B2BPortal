"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2bDashboardPO = /** @class */ (function () {
    function b2bDashboardPO() {
    }
    b2bDashboardPO.searchSchool = protractor_1.element(protractor_1.by.id("main-login-button"));
    b2bDashboardPO.setdatetextbox = protractor_1.element(protractor_1.by.css("#current-system-date"));
    b2bDashboardPO.setDateButton = protractor_1.element(protractor_1.by.css("#current-system-date-button"));
    b2bDashboardPO.searchSsessionDrpDwn = protractor_1.element(protractor_1.by.css("#session-menu-select > sessions-drop-down-tree > span > span > span.k-input.ng-scope"));
    b2bDashboardPO.searchSelectsessionDrpDwn = protractor_1.element(protractor_1.by.xpath("//span[text()='May/June 2020 (Cambridge International) - active']"));
    return b2bDashboardPO;
}());
exports.b2bDashboardPO = b2bDashboardPO;
