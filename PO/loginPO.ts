import { element ,by} from "protractor";

export class loginPO{
    public static emailAddTxtBx = element(by.id("login-input"))
   public static pwdTxtBx = element(by.id("password-input"))
   public static contButton = element(by.id("continue-login-button"))
   public static forgetPwdLnk = element(by.xpath("//a[text()='Forgot Password?']"))
   public static loginButton = element(by.id("main-login-button"))
}
