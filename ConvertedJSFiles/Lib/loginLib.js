"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loginPO_1 = require("../PO/loginPO");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var loginLib = /** @class */ (function () {
    function loginLib() {
    }
    loginLib.prototype.userLogin = function () {
        loginPO_1.loginPO.loginButton.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        loginPO_1.loginPO.emailAddTxtBx.sendKeys("qa@test.com");
        waitStatementUtil_1.waitStatementUtil.customWait1();
        loginPO_1.loginPO.pwdTxtBx.sendKeys("Test@123");
        waitStatementUtil_1.waitStatementUtil.customWait1();
        loginPO_1.loginPO.contButton.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
    };
    return loginLib;
}());
exports.loginLib = loginLib;
