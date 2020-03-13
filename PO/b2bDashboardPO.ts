import { element ,by} from "protractor";

import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
export class b2bDashboardPO
{
    public static searchSchool = element(by.id("main-login-button"))
    public static setdatetextbox=element(by.css("#current-system-date"))
    public static setDateButton=element(by.css("#current-system-date-button"))
    public static searchSsessionDrpDwn = element(by.css("#session-menu-select > sessions-drop-down-tree > span > span > span.k-input.ng-scope"))
    public static searchSelectsessionDrpDwn = element(by.xpath("//span[text()='May/June 2020 (Cambridge International) - active']"))
   
    p
}