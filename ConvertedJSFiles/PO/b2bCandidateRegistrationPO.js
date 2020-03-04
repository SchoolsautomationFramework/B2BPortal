"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2bCandidateRegistrationPO = /** @class */ (function () {
    function b2bCandidateRegistrationPO() {
    }
    b2bCandidateRegistrationPO.awardingBody = protractor_1.element(protractor_1.by.css("#awardingBody"));
    b2bCandidateRegistrationPO.session = protractor_1.element(protractor_1.by.css("#session"));
    b2bCandidateRegistrationPO.qualificationLevel = protractor_1.element(protractor_1.by.css("#qualificationLevel"));
    b2bCandidateRegistrationPO.location = protractor_1.element(protractor_1.by.css("#location"));
    b2bCandidateRegistrationPO.subjectList = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Select from available subjects...']"));
    b2bCandidateRegistrationPO.subjectSelection = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'9706 ACCOUNTING')]"));
    b2bCandidateRegistrationPO.searchSubjectBtn = protractor_1.element(protractor_1.by.xpath("//button[@id='search-button']"));
    b2bCandidateRegistrationPO.addToBasketBtn = protractor_1.element(protractor_1.by.xpath("//body[@class='ng-scope']//div[@class='ng-scope']//div[@class='ng-scope']//div[2]//div[1]//div[2]//div[3]//div[1]//button[1]"));
    b2bCandidateRegistrationPO.proceedToBasket = protractor_1.element(protractor_1.by.xpath("//button[@id='proceed-to-basket']"));
    return b2bCandidateRegistrationPO;
}());
exports.b2bCandidateRegistrationPO = b2bCandidateRegistrationPO;
