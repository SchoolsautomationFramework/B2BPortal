import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import {loginPO}from "../PO/loginPO";
import { browser } from "protractor";
import { waitStatementUtil } from "../Util/waitStatementUtil";
export class loginLib
{

    public userLogin()
    {
        loginPO.loginButton.click();
       
        waitStatementUtil.customWait2()
       
       loginPO.emailAddTxtBx.sendKeys("qa@test.com")
     waitStatementUtil.customWait1()
       loginPO.pwdTxtBx.sendKeys("Test@123")
       waitStatementUtil.customWait1()
       loginPO.contButton.click();
     
      waitStatementUtil.customWait2()
      
        

    }
}