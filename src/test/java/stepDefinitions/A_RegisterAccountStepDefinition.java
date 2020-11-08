package stepDefinitions;

import java.util.List;

import java.util.Map;

import org.junit.Assert;

import core.Base;
import cucumber.api.DataTable;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.LoginPageObj;
import pageObjects.RegisterFormPageObj;
import utilities.WebDriverUtility;

public class A_RegisterAccountStepDefinition extends Base {

	RegisterFormPageObj registerFormPageObj = new RegisterFormPageObj();
	LoginPageObj loginPageObj = new LoginPageObj();

	@When("^If Register option is displayed User click on Register$")
	public void if_register_option_is_displayed_user_click_on_register() throws Throwable {
		loginPageObj.verifyRegisterInDropDownMenuAndClick();
		logger.info("User clicked on Register");

	}

	@When("^User should see Register Account form$")
	public void user_should_see_Register_Account_form() throws Throwable {
		Assert.assertEquals(true, registerFormPageObj.isRegisterAccountFormDisplayed());
		logger.info("User see Register Account form");
		WebDriverUtility.screenShot();
	}

	@When("^User should see Your Personal Details section with fields: 'First Name', 'Last Name', 'E-Mail','Telephone'$")
	public void user_should_see_Your_Personal_Details_section_with_fields_First_Name_Last_Name_E_Mail_Telephone()
			throws Throwable {

		Boolean[] labelSetExpected = { true, true, true, true, true };
		Boolean[] labelSetPresent = new Boolean[5];
		labelSetPresent[0] = registerFormPageObj.isYourPersonalDetailsSectionIsDisplayed();
		labelSetPresent[1] = registerFormPageObj.isLabelFirstNameIsDisplayed();
		labelSetPresent[2] = registerFormPageObj.isLabelLastNameIsDisplayed();
		labelSetPresent[3] = registerFormPageObj.isLabelEmailIsDisplayed();
		labelSetPresent[4] = registerFormPageObj.isLabelTelephoneIsDisplayed();
		Assert.assertArrayEquals(labelSetExpected, labelSetPresent);
		logger.info("Your Personal Details section varified");
	}

	@When("^User should see Your Password section: 'Password' and 'Password Confirm'$")
	public void user_should_see_Your_Password_section_Password_and_Password_Confirm() throws Throwable {
		Boolean[] passwordLabelsExpected = { true, true, true };
		Boolean[] passwordLabelsPresent = new Boolean[3];
		passwordLabelsPresent[0] = registerFormPageObj.isYourPasswordSectionIsDisplayed();
		passwordLabelsPresent[1] = registerFormPageObj.isLabelPasswordIsDisplayed();
		passwordLabelsPresent[2] = registerFormPageObj.isLabelPassConfirmIsDisplayed();
		Assert.assertArrayEquals(passwordLabelsExpected, passwordLabelsPresent);
		logger.info("Password section verified");
	}

	@Then("^User fill out Register form with information below$")
	public void user_fill_out_Register_form_with_information_below(DataTable userInfoDataTable) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
		List<Map<String, String>> dataMaps = userInfoDataTable.asMaps(String.class, String.class);
		registerFormPageObj.enterFirstName(dataMaps.get(0).get("firstName"));
		registerFormPageObj.enterLastName(dataMaps.get(0).get("lastName"));
		registerFormPageObj.enterEmail(dataMaps.get(0).get("email"));
		registerFormPageObj.enterPhone(dataMaps.get(0).get("phone"));
		registerFormPageObj.enterPassword(dataMaps.get(0).get("password"));
		registerFormPageObj.enterPasswordConfirm(dataMaps.get(0).get("password"));
		logger.info("User filled out Register form with information from Data Table");
	}

	@Then("^Verify 'Newsletter' section present$")
	public void verify_newsletter_section_present() throws Throwable {
		Assert.assertEquals(true, registerFormPageObj.isNewsletterSectionPresent());
		logger.info("Newsletter section present");
	}

	@Then("^Verify 'No' Radio button is selected by default$")
	public void verify_No_Radio_button_is_selected_by_default() throws Throwable {
		Assert.assertEquals(true, registerFormPageObj.verifyNoOnSubscribeByDefault());
		logger.info("'No' radio button selected by default");
		WebDriverUtility.screenShot();
	}

	@Then("^User selects 'Yes' to subscribe$")
	public void user_selects_Yes_to_subscribe() throws Throwable {
		registerFormPageObj.selectYesOnSubscribe();
		logger.info("User selected Yes to subscribe");
		WebDriverUtility.screenShot();
	}

	@Then("^Verify 'Continue' button is displayed$")
	public void verify_Continue_button_is_displayed_on_bottom_of_the_form() throws Throwable {
		Assert.assertEquals(true, registerFormPageObj.isContinueButtonPresent());
		logger.info("Continue button present");
	}

	@Then("^Verify check box 'I have read and agree to the Privacy Policy' next to 'Continue' button$")
	public void verify_check_box_I_have_read_and_agree_to_the_Privacy_Policy_next_to_Continue_button()
			throws Throwable {
		//inline-block layout does not add a line-break after the element, so the element can sit next to other element
		Assert.assertEquals("inline-block", registerFormPageObj.privacyPolicyLocation());
		logger.info("Check box location is verified");
		
	}

	@Then("^Click on check box$")
	public void click_on_check_box() throws Throwable {
		registerFormPageObj.clickOnPrivacyPolicy();
		logger.info("User checked Privacy Policy box");
		WebDriverUtility.screenShot();
	}

	@Then("^Click on 'Continue' button$")
	public void click_on_Continue_button() throws Throwable {
    registerFormPageObj.clickOnContinueButton();
    logger.info("User clicked on Continue button");
	}

	@Then("^Text should be displayed '(.+)'$")
	public void text_should_be_displayed_Your_Account_Has_Been_Created(String textDisplayed) throws Throwable {
	WebDriverUtility.wait(5000);
	Assert.assertEquals(textDisplayed, registerFormPageObj.getSuccessfullAccountCreationMessage());
	logger.info("User Should see text 'Your Account Has Been Created!'");
	WebDriverUtility.screenShot();

	}
}
