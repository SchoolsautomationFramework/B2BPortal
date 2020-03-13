import {b2bCandidateRegistrationPO} from "../PO/b2bCandidateRegistrationPO"
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{browser, element, Key} from "protractor"
import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";
export class b2bCandidateRegistrationLib
{
    public  ClickOnCreateRegisterationButton()
    {
        
        b2bCandidateRegistrationPO.searchCandidateRegBtn.click();
        waitStatementUtil.customWait1()
        browser.actions().mouseMove(b2bCandidateRegistrationPO.searchRegisterCandBtn).perform()
        waitStatementUtil.customWait1()
        b2bCandidateRegistrationPO.searchByCreatingNewCandOptn.click();
        waitStatementUtil.customWait1()

    }
}