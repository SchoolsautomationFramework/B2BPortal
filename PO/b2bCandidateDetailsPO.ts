import { element ,by} from "protractor";
export class b2bCandidateDetailsPO
{

    public static firstNameTxtBx = element(by.id("CandidateDetails.FirstName"))
    public static lastNameTxtBx = element(by.id("CandidateDetails.LastName"))
    public static dobDayTxtBx = element(by.xpath("//div[3]//div[3]//input[@name='dateFields.day']"))
    public static dobMonthDrpBx = element(by.css("body > div.modal.ng-scope.top.am-fade > div > div > div.ng-scope > div.modal-body > div > ng-form > div > div > form > div:nth-child(3) > div > p > div > div:nth-child(2) > select"))
    public static dobYearTxtBx = element(by.css("div:nth-child(3) > div > p > div > div:nth-child(3) > input"))
    public static genderBtn = element(by.xpath("//label[@value='M']"))
    public static identificationDocDrpBx = element(by.xpath("//select[@id='ProductDetails.SelectedIdentificationDocument']"))
    public static identificationDocNumberTxBx = element(by.name("ProductDetails.IdentificationDocNo"))
    public static expdateDayTxtBx = element(by.xpath("//div[10]//input[@name='dateFields.day']"))
    public static expdateMonthDrpBx = element(by.css("body > div.modal.ng-scope.top.am-fade > div > div > div.ng-scope > div.modal-body > div > ng-form > div > div > form > div:nth-child(10) > div > p > div > div:nth-child(2) > select"))
    public static expdateYearTxtBx = element(by.xpath("//div[10]//input[@name='dateFields.year']"))
    public static nxtBtn = element(by.xpath("//button[text()='Next']"))
    public static qualLevelDrpBx = element(by.css("#qualificationLevel"))
    public static selectExamSearchBx = element(by.xpath("//div[@placeholder='Select from available subjects...']"))
    public static inputExamSearchValueTxtBx = element(by.xpath("//input[@placeholder='Select from available subjects...']"))
    public static inputExamSearchValueTxtBx1 = element(by.xpath("//div[text()='9706AY ACCOUNTING - GCE A LEVEL OPT AY']"))
    public static examTypeRadioBtn = element(by.xpath("//label[contains(text(),'Standard')]"))
    public static pickSelectedexmBtn = element(by.xpath("//button[text()='Pick selected exam']"))
    public static addExmBtn = element(by.xpath("//button[text()='Add']"))

}
