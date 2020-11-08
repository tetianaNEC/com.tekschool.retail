package stepDefinitions;

import org.junit.Assert;

import core.Base;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pageObjects.CurrencyPageObj;
import utilities.WebDriverUtility;

public class H_ChangeCurrencyStepDefinition extends Base {
	CurrencyPageObj currencyPageObj = new CurrencyPageObj();

	@When("^User see Currency button on the left of the page$")
	public void user_see_Currency_button_on_the_left_of_the_page() throws Throwable {
		Assert.assertTrue(currencyPageObj.isCurrencyDisplayed());
		logger.info("Currency button is visible");
		WebDriverUtility.screenShot();
	}

	@When("^US Dollar Currency selected by default$")
	public void us_Dollar_Currency_selected_by_default() throws Throwable {
		Assert.assertTrue(currencyPageObj.isUSDollarsByDefault());
		logger.info("US Dollars selected by default");

	}

	@When("^User click on Currency button$")
	public void user_click_on_Currency_button() throws Throwable {
		currencyPageObj.clickCurrencyButton();
		logger.info("User clicked on currency button");
	}

	@When("^Verify Currency drop-down menu contains 'Euro', 'Pound Sterling' and 'US Dollar' options$")
	public void verify_Currency_drop_down_menu_contains_Euro_Pound_Sterling_and_US_Dollar_options() throws Throwable {
		Assert.assertTrue(currencyPageObj.isCurrencyDropDownContains());
		logger.info("Currency drop-down menu contains all three options");
		WebDriverUtility.screenShot();
	}

	@Then("^User selects Pound Sterling currency$")
	public void user_selects_Pound_Sterling_currency() throws Throwable {
		currencyPageObj.selectPoundSterling();
		logger.info("User changed currency to Pound Sterling");
		WebDriverUtility.screenShot();
	}

	@When("^Verify Price of the Product in Pound Sterling$")
	public void verify_Price_of_the_Product_in_Pound_Sterling() throws Throwable {
		Assert.assertTrue(currencyPageObj.verifyCurrency());
		logger.info("Price of the product in Pound Sterling");
		WebDriverUtility.screenShot();
	}

	@Then("^Verify Price of the product in Pound Sterling in the Wish List$")
	public void verify_Price_of_the_product_in_Pound_Sterling_in_the_Wish_List() throws Throwable {
		Assert.assertTrue(currencyPageObj.verifyCurrencyInWishList());
		logger.info("Price of the product in the Wish List in Pound Sterling");
		WebDriverUtility.screenShot();
	}

}
