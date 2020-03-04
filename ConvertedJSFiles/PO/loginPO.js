"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var loginPO = /** @class */ (function () {
    function loginPO() {
    }
    loginPO.emailAddTxtBx = protractor_1.element(protractor_1.by.id("login-input"));
    loginPO.pwdTxtBx = protractor_1.element(protractor_1.by.id("password-input"));
    loginPO.contButton = protractor_1.element(protractor_1.by.id("continue-login-button"));
    loginPO.forgetPwdLnk = protractor_1.element(protractor_1.by.xpath("//a[text()='Forgot Password?']"));
    loginPO.loginButton = protractor_1.element(protractor_1.by.id("main-login-button"));
    return loginPO;
}());
exports.loginPO = loginPO;
