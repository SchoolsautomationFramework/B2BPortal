"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b2bCandidateRegistrationPO_1 = require("../PO/b2bCandidateRegistrationPO");
var protractor_1 = require("protractor");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var b2bCandidateRegistrationLib = /** @class */ (function () {
    function b2bCandidateRegistrationLib() {
    }
    b2bCandidateRegistrationLib.prototype.ClickOnCreateRegisterationButton = function () {
        b2bCandidateRegistrationPO_1.b2bCandidateRegistrationPO.searchCandidateRegBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        protractor_1.browser.actions().mouseMove(b2bCandidateRegistrationPO_1.b2bCandidateRegistrationPO.searchRegisterCandBtn).perform();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bCandidateRegistrationPO_1.b2bCandidateRegistrationPO.searchByCreatingNewCandOptn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
    };
    return b2bCandidateRegistrationLib;
}());
exports.b2bCandidateRegistrationLib = b2bCandidateRegistrationLib;
