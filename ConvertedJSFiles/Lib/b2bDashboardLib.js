"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b2bDashboardPO_1 = require("../PO/b2bDashboardPO");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var b2bDashboardLib = /** @class */ (function () {
    function b2bDashboardLib() {
    }
    b2bDashboardLib.prototype.SelectSessionDate = function () {
        b2bDashboardPO_1.b2bDashboardPO.setdatetextbox.clear();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bDashboardPO_1.b2bDashboardPO.setdatetextbox.sendKeys("11/01/2020");
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bDashboardPO_1.b2bDashboardPO.setDateButton.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        b2bDashboardPO_1.b2bDashboardPO.searchSsessionDrpDwn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bDashboardPO_1.b2bDashboardPO.searchSelectsessionDrpDwn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
    };
    return b2bDashboardLib;
}());
exports.b2bDashboardLib = b2bDashboardLib;
