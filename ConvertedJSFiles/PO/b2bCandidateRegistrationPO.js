"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2bCandidateRegistrationPO = /** @class */ (function () {
    function b2bCandidateRegistrationPO() {
    }
    b2bCandidateRegistrationPO.searchCandidateRegBtn = protractor_1.element(protractor_1.by.xpath("//button[text()='Candidate registrations ']"));
    b2bCandidateRegistrationPO.searchRegisterCandBtn = protractor_1.element(protractor_1.by.xpath("//a[text()='Register candidates']"));
    b2bCandidateRegistrationPO.searchByCreatingNewCandOptn = protractor_1.element(protractor_1.by.xpath("//a[text()='By creating new candidate']"));
    return b2bCandidateRegistrationPO;
}());
exports.b2bCandidateRegistrationPO = b2bCandidateRegistrationPO;
