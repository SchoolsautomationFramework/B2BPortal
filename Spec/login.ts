import{browser} from "protractor"
import 'jasmine'

import {loginLib}from "../Lib/loginLib";

import {b2bCandidateRegistrationLib}from"../Lib/b2bCandidateRegistrationLib"
import{b2bDashboardLib} from "../Lib/b2bDashboardLib"



import { waitStatementUtil } from "../Util/waitStatementUtil";
import { preConditionUtil } from "../Util/preConditionUtil";
import { element ,by} from "protractor";
import { b2bCandidateDetailsLib } from "../Lib/b2bCandidateDetailsLib";

describe("User will login to b2c portal", function()
{
    let Loginlib = new loginLib()
    
    preConditionUtil.setSyncTimeoutConfig()
   
    waitStatementUtil.implicitWait()
    it("User login", function()
    {
//browser.get("https://qa-schoolexams-uat.britishcouncil.org/#/login/")
browser.get("https://qa-schoolexamsportal-uat.britishcouncil.org/")
 
  waitStatementUtil.customWait2()

  waitStatementUtil.implicitWait()

  Loginlib.userLogin()
  waitStatementUtil.customWait2()

  waitStatementUtil.implicitWait()
    }
    )
    
  }
  )

  

  // describe("User will select  date and country", function()
  // {
  //     let b2BDashboardLib = new b2bDashboardLib()
  //     preConditionUtil.setSyncTimeoutConfig()
  //     waitStatementUtil.implicitWait()
  //     it("session, date and country selection", function()
  //     {
   
  //     }
  //     )
      
  //   }
  //   )

