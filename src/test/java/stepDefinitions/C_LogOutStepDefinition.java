package stepDefinitions;

import org.junit.Assert;


import core.Base;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.LoginPageObj;
import pageObjects.LogoutPageobject;
import pageObjects.MyAccountPageObj;
import utilities.WebDriverUtility;

public class C_LogOutStepDefinition extends Base {
	MyAccountPageObj myAccountPageObj = new MyAccountPageObj();
	LoginPageObj loginPageObj = new LoginPageObj();
	LogoutPageobject logoutPageobject= new LogoutPageobject();

	@When("^Verify that Logout sub-option is displayed in My Account drop-down menu$")
	public void verify_that_Logout_sub_option_is_displayed_in_My_Account_drop_down_menu() throws Throwable {
	 Assert.assertTrue(myAccountPageObj.isLogoutButtonDisplayed()); 
	 logger.info("Logout button is displayed in My Account drop-down menu");
	 WebDriverUtility.screenShot();
	}
	
	@Then("^Verify Message appeared when user logged out - '(.+)'$")
	public void verify_Message_appeared_when_user_logged_out(String expectedMessage) throws Throwable {
	 Assert.assertEquals(expectedMessage, logoutPageobject.messageLogoffString());
	 logger.info("Logoff message is verified");
	 WebDriverUtility.screenShot();
	}

	@Then("^Verify My Account menu has two options: Register, Login$")
	public void verify_My_Account_menu_has_two_options_Register_Login() throws Throwable {
	 Assert.assertTrue(loginPageObj.verifyRegisterInDropDownMenu() && loginPageObj.verifyLoginInDropDownMenu());  
	 logger.info("Register and Login options are displayed in My Account DropDown Menu after User was logged off");
	}
}
