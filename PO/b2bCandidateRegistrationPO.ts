import { element ,by} from "protractor";

import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
export class b2bCandidateRegistrationPO
{
    public static searchCandidateRegBtn = element(by.xpath("//button[text()='Candidate registrations ']"))
    public static searchRegisterCandBtn = element(by.xpath("//a[text()='Register candidates']"))
    public static searchByCreatingNewCandOptn = element(by.xpath("//a[text()='By creating new candidate']"))
}