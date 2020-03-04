"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2bCandidateDetailsPO = /** @class */ (function () {
    function b2bCandidateDetailsPO() {
    }
    b2bCandidateDetailsPO.titledrpdwn = protractor_1.element(protractor_1.by.css("#title-select > a"));
    b2bCandidateDetailsPO.titleSelect = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'Dr')]"));
    b2bCandidateDetailsPO.firstName = protractor_1.element(protractor_1.by.css("#first-name-input"));
    b2bCandidateDetailsPO.lastName = protractor_1.element(protractor_1.by.css("#last-name-input"));
    b2bCandidateDetailsPO.gender = protractor_1.element(protractor_1.by.css("#gender-male-button"));
    b2bCandidateDetailsPO.englishNativeLanguage = protractor_1.element(protractor_1.by.css("#nativeLanguage"));
    b2bCandidateDetailsPO.address = protractor_1.element(protractor_1.by.css("#address1-input"));
    b2bCandidateDetailsPO.city = protractor_1.element(protractor_1.by.css("#city-input"));
    b2bCandidateDetailsPO.countrydrpdwn = protractor_1.element(protractor_1.by.xpath("//div[@id='country-select']//a[@placeholder='Please Select']"));
    b2bCandidateDetailsPO.countrySelection = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'Afghanistan')]"));
    b2bCandidateDetailsPO.nextbtn = protractor_1.element(protractor_1.by.xpath("//button[@id='next-button']"));
    b2bCandidateDetailsPO.idDrpdwn = protractor_1.element(protractor_1.by.css("#id-document-select > a"));
    b2bCandidateDetailsPO.idDocSlcn = protractor_1.element(protractor_1.by.xpath("//div[@class='ng-binding ng-scope']"));
    b2bCandidateDetailsPO.idNum = protractor_1.element(protractor_1.by.css("#id-number-input"));
    b2bCandidateDetailsPO.idDay = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Day']"));
    b2bCandidateDetailsPO.idMonthDrpdwn = protractor_1.element(protractor_1.by.xpath("//select[@placeholder='Month']"));
    b2bCandidateDetailsPO.idYear = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Year']"));
    b2bCandidateDetailsPO.idAuthority = protractor_1.element(protractor_1.by.css("#id-authority-input"));
    b2bCandidateDetailsPO.idnextbtn = protractor_1.element(protractor_1.by.xpath("//button[@id='next-button']"));
    b2bCandidateDetailsPO.tcCheckbox = protractor_1.element(protractor_1.by.xpath("//input[@id='read-tc-checkbox']"));
    b2bCandidateDetailsPO.acceptTCbtn = protractor_1.element(protractor_1.by.xpath("//button[@id='accept-tc-button']"));
    return b2bCandidateDetailsPO;
}());
exports.b2bCandidateDetailsPO = b2bCandidateDetailsPO;
