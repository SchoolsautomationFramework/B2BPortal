"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2bCandidateDetailsPO = /** @class */ (function () {
    function b2bCandidateDetailsPO() {
    }
    b2bCandidateDetailsPO.firstNameTxtBx = protractor_1.element(protractor_1.by.id("CandidateDetails.FirstName"));
    b2bCandidateDetailsPO.lastNameTxtBx = protractor_1.element(protractor_1.by.id("CandidateDetails.LastName"));
    b2bCandidateDetailsPO.dobDayTxtBx = protractor_1.element(protractor_1.by.xpath("//div[3]//div[3]//input[@name='dateFields.day']"));
    b2bCandidateDetailsPO.dobMonthDrpBx = protractor_1.element(protractor_1.by.css("body > div.modal.ng-scope.top.am-fade > div > div > div.ng-scope > div.modal-body > div > ng-form > div > div > form > div:nth-child(3) > div > p > div > div:nth-child(2) > select"));
    b2bCandidateDetailsPO.dobYearTxtBx = protractor_1.element(protractor_1.by.css("div:nth-child(3) > div > p > div > div:nth-child(3) > input"));
    b2bCandidateDetailsPO.genderBtn = protractor_1.element(protractor_1.by.xpath("//label[@value='M']"));
    b2bCandidateDetailsPO.identificationDocDrpBx = protractor_1.element(protractor_1.by.xpath("//select[@id='ProductDetails.SelectedIdentificationDocument']"));
    b2bCandidateDetailsPO.identificationDocNumberTxBx = protractor_1.element(protractor_1.by.name("ProductDetails.IdentificationDocNo"));
    b2bCandidateDetailsPO.expdateDayTxtBx = protractor_1.element(protractor_1.by.xpath("//div[10]//input[@name='dateFields.day']"));
    b2bCandidateDetailsPO.expdateMonthDrpBx = protractor_1.element(protractor_1.by.css("body > div.modal.ng-scope.top.am-fade > div > div > div.ng-scope > div.modal-body > div > ng-form > div > div > form > div:nth-child(10) > div > p > div > div:nth-child(2) > select"));
    b2bCandidateDetailsPO.expdateYearTxtBx = protractor_1.element(protractor_1.by.xpath("//div[10]//input[@name='dateFields.year']"));
    b2bCandidateDetailsPO.nxtBtn = protractor_1.element(protractor_1.by.xpath("//button[text()='Next']"));
    b2bCandidateDetailsPO.qualLevelDrpBx = protractor_1.element(protractor_1.by.css("#qualificationLevel"));
    b2bCandidateDetailsPO.selectExamSearchBx = protractor_1.element(protractor_1.by.xpath("//div[@placeholder='Select from available subjects...']"));
    b2bCandidateDetailsPO.inputExamSearchValueTxtBx = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Select from available subjects...']"));
    b2bCandidateDetailsPO.inputExamSearchValueTxtBx1 = protractor_1.element(protractor_1.by.xpath("//div[text()='9706AY ACCOUNTING - GCE A LEVEL OPT AY']"));
    b2bCandidateDetailsPO.examTypeRadioBtn = protractor_1.element(protractor_1.by.xpath("//label[contains(text(),'Standard')]"));
    b2bCandidateDetailsPO.pickSelectedexmBtn = protractor_1.element(protractor_1.by.xpath("//button[text()='Pick selected exam']"));
    b2bCandidateDetailsPO.addExmBtn = protractor_1.element(protractor_1.by.xpath("//button[text()='Add']"));
    return b2bCandidateDetailsPO;
}());
exports.b2bCandidateDetailsPO = b2bCandidateDetailsPO;
