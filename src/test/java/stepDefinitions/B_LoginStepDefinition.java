package stepDefinitions;

import org.junit.Assert;

import core.Base;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.LoginPageObj;
import pageObjects.MyAccountPageObj;
import utilities.WebDriverUtility;

public class B_LoginStepDefinition extends Base {

	MyAccountPageObj myAccountPageObj = new MyAccountPageObj();
	LoginPageObj loginPageObj = new LoginPageObj();

	@When("^Verify that Login sub-option in My Account menu and click on Login$")
	public void verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login() throws Throwable {
		loginPageObj.verifyLoginInDropDownMenuAndClick();
		logger.info("Login button is displayed in My Account manu and user clicked on it");
	}

	@When("^Verify Login form Returning customer is displayed$")
	public void verify_Login_form_Returning_customer_is_displayed() throws Throwable {
		Assert.assertEquals(true, loginPageObj.verifyReturningCustomerForm());
		logger.info("Returning customer form is displayed");
	}

	@When("^Verify Email and Password fields are present$")
	public void verify_Email_and_Password_fields_are_present() throws Throwable {
		Assert.assertEquals(true, loginPageObj.verifyEmailFieldDisplayed());
		Assert.assertEquals(true, loginPageObj.verifyPasswordFieldDisplayed());
		logger.info("Email and Password fields are displayed");
	}

	@When("^Verify Login button is displayed$")
	public void verify_Login_button_is_displayed() throws Throwable {
		Assert.assertEquals(true, loginPageObj.loginButtonIsDisplayed());
		logger.info("Login button is displayed");
	}

	@Then("^And User enter username '(.+)' and password '(.+)'$")
	public void and_User_enter_username_tom_test_com_and_password_tomtom(String userName, String password)
			throws Throwable {

		loginPageObj.enterEmailAddress(userName);
		logger.info("User entered userName");

		loginPageObj.enterPassword(password);
		logger.info("User entered password");
		WebDriverUtility.screenShot();
	}

	@Then("^Verify password is hidden when typed in$")
	public void verify_password_is_hidden_when_typed_in() throws Throwable {
		String passwordString = loginPageObj.getPasswordText();
		char[] arrayPass = passwordString.toCharArray();
		int stringLength = passwordString.length();
		int count = 0;
		for (char c : arrayPass) {
			if (c == '•')
				count++;
		}
		Assert.assertTrue(stringLength == count);
		logger.info("Password is masked");
	}

	@Then("^User is directed to My Account page once logged in$")
	public void user_is_directed_to_My_Account_page_once_logged_in() throws Throwable {
		Assert.assertTrue(myAccountPageObj.isMyAccountDisplayed());
		logger.info("User is on My Account Page");
		WebDriverUtility.screenShot();
	}
}
