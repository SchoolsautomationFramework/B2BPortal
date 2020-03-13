
import {b2bCandidateDetailsPO} from "../PO/b2bCandidateDetailsPO"
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";

import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";
export class b2bCandidateDetailsLib
{
    public candidateDetails()
    {
        
        var firstName:string=RandomStringGeneratorUtil.getRandomString(6)
        var lastName:string=RandomStringGeneratorUtil.getRandomString(6)
        b2bCandidateDetailsPO.firstNameTxtBx.sendKeys(firstName)
        waitStatementUtil.customWait1()
        b2bCandidateDetailsPO.lastNameTxtBx.sendKeys(lastName)
        waitStatementUtil.customWait1()
        b2bCandidateDetailsPO.dobDayTxtBx.sendKeys(RandomStringGeneratorUtil.dateOfBirth(1,28))
        waitStatementUtil.customWait1()
        let Selb2bBirthMonth:selectUtil = new selectUtil(b2bCandidateDetailsPO.dobMonthDrpBx);
        waitStatementUtil.customWait1()
        Selb2bBirthMonth.selectByIndex(5)
       
        waitStatementUtil.customWait1()
        b2bCandidateDetailsPO.dobYearTxtBx.clear()
        waitStatementUtil.customWait1()
        b2bCandidateDetailsPO.dobYearTxtBx.sendKeys(RandomStringGeneratorUtil.dateOfBirth(1988,1995))
        waitStatementUtil.customWait1()
        b2bCandidateDetailsPO.genderBtn.click()
        waitStatementUtil.customWait1()
        let Selb2bIdentityDropdwn:selectUtil = new selectUtil(b2bCandidateDetailsPO.identificationDocDrpBx);
        waitStatementUtil.customWait1()
        Selb2bIdentityDropdwn.selectByIndex(2)
        waitStatementUtil.customWait1()
        b2bCandidateDetailsPO.identificationDocNumberTxBx.click()
        waitStatementUtil.customWait1()
       var identityDocumentNumber: string=RandomStringGeneratorUtil.getRandomString(6)
       waitStatementUtil.customWait1()
        b2bCandidateDetailsPO.identificationDocNumberTxBx.sendKeys(identityDocumentNumber)
        waitStatementUtil.customWait1()
        b2bCandidateDetailsPO.expdateDayTxtBx.sendKeys(RandomStringGeneratorUtil.dateOfBirth(1,28))
        waitStatementUtil.customWait1()
        let Selb2bIdentityExpiry:selectUtil = new selectUtil(b2bCandidateDetailsPO.expdateMonthDrpBx);
        waitStatementUtil.customWait1()
        Selb2bIdentityExpiry.selectByIndex(5)
        waitStatementUtil.customWait1()
        b2bCandidateDetailsPO.expdateYearTxtBx.sendKeys(RandomStringGeneratorUtil.dateOfBirth(2035,2045))
        waitStatementUtil.customWait1()
        b2bCandidateDetailsPO.nxtBtn.click()
      waitStatementUtil.customWait1()
      let Selb2bqualificationLevel:selectUtil = new selectUtil(b2bCandidateDetailsPO.qualLevelDrpBx);
      waitStatementUtil.customWait1()
      Selb2bqualificationLevel.selectByIndex(2)
     waitStatementUtil.customWait1()
    b2bCandidateDetailsPO.selectExamSearchBx.click()
        waitStatementUtil.customWait1()
        b2bCandidateDetailsPO.inputExamSearchValueTxtBx.click()
        waitStatementUtil.customWait1()
        b2bCandidateDetailsPO.inputExamSearchValueTxtBx1.click()
        waitStatementUtil.customWait1()
        
        b2bCandidateDetailsPO.examTypeRadioBtn.click()
        waitStatementUtil.customWait1()
       
        b2bCandidateDetailsPO.pickSelectedexmBtn.click()
        waitStatementUtil.customWait2()
       
        b2bCandidateDetailsPO.addExmBtn.click()
        waitStatementUtil.customWait2()
        
    }
}

