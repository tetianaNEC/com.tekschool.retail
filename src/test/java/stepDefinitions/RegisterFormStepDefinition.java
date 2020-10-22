package stepDefinitions;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.junit.Assert;

import core.Base;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pageObjects.RegisterFormPageObj;
import utilities.WebDriverUtility;

public class RegisterFormStepDefinition extends Base {
	
	RegisterFormPageObj registerFormPageObj = new RegisterFormPageObj();
	
	@When("^User click on Register$")
	public void user_click_on_Register() throws Throwable {
		//we should use try /catch block as this code is risky
		try {
	registerFormPageObj.clickOnRegister();
	logger.info("User clicked on register");
		}catch(NoSuchElementException e) {
			e.printStackTrace();
		}
	WebDriverUtility.screenShot();
	}

	@When("^User fill out Register form with below information$")
	//since our dataTable has column header we can use List of map
	// for row index we will refer to list index
	//for Column index we will refer to column header as a Key
	
	public void user_fill_out_Register_form_with_below_information(DataTable userCredentials) throws Throwable {
		
		List<Map<String, String>> dataList = userCredentials.asMaps(String.class, String.class);
//		for( Map<String, String> data :userCredentials.asMaps(String.class, String.class)) {
			registerFormPageObj.enterFirstName(dataList.get(0).get("firstName"));
			registerFormPageObj.enterLastName(dataList.get(0).get("lastName"));
			registerFormPageObj.enterEmail(dataList.get(0).get("email"));
			registerFormPageObj.enterPhone(dataList.get(0).get("phone"));
			registerFormPageObj.enterPassword(dataList.get(0).get("password"));
			registerFormPageObj.enterPasswordConfirm(dataList.get(0).get("password"));
		
		logger.info("User fill out Register form with information from Data Table");
		
		
	}

	@When("^User select 'yes' for Subscribe$")
	public void user_select_yes_for_Subscribe() throws Throwable {
		registerFormPageObj.selectYesOnSubscribe();
		logger.info("User select 'yes' for Subscribe");
	}

	@When("^User click on privacy and policy check box$")
	public void user_click_on_privacy_and_policy_check_box() throws Throwable {
		registerFormPageObj.clickOnPrivacyPolicy();
		logger.info("User click on privacy and policy check box");
		WebDriverUtility.screenShot();
	}

	@When("^User click on Continue button$")
	public void user_click_on_Continue_button() throws Throwable {
		registerFormPageObj.clickOnContinueButton();
		logger.info("User click on Continue button");
	}
	
	@Then("^User Should see message '(.+)'$")
	public void user_Should_see_message_Your_Account_Has_Been_Created(String message) throws Throwable {
		WebDriverUtility.wait(5000);
		Assert.assertEquals(message, registerFormPageObj.getSuccessfullAccountCreationMessage());
		logger.info("User Should see message 'Your Account Has Been Created!'");
		WebDriverUtility.screenShot();
	}
}