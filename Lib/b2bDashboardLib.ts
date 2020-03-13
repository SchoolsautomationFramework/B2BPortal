import {b2bDashboardPO} from "../PO/b2bDashboardPO"
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{browser, element, Key} from "protractor"
import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";
export class b2bDashboardLib
{
    public  SelectSessionDate()
    {
        
        b2bDashboardPO.setdatetextbox.clear()
        waitStatementUtil.customWait1()
        b2bDashboardPO.setdatetextbox.sendKeys("11/01/2020")
        waitStatementUtil.customWait1()
        b2bDashboardPO.setDateButton.click()
        waitStatementUtil.customWait2()
        b2bDashboardPO.searchSsessionDrpDwn.click()
        waitStatementUtil.customWait1()
        b2bDashboardPO.searchSelectsessionDrpDwn.click()
        waitStatementUtil.customWait1()
       


    }
}