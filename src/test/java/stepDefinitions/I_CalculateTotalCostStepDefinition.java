package stepDefinitions;

import org.junit.Assert;

import core.Base;
import cucumber.api.java.en.Then;
import pageObjects.ShoppingCartPageObj;
import utilities.WebDriverUtility;


public class I_CalculateTotalCostStepDefinition extends Base {

	ShoppingCartPageObj shoppingCartPageObj= new ShoppingCartPageObj();
	

@Then("^Verify Unit Price and Total columns are displayed$")
public void verify_Unit_Price_and_Total_columns_are_displayed() throws Throwable {
    Assert.assertTrue(shoppingCartPageObj.isUnitPriceColumnDisplayed() && shoppingCartPageObj.isTotalColumnNameDisplayed());
    logger.info("Unit Price and Total columns displayed");
}

@Then("^Verify Total price should be the number equals Quantity times Unit Price$")
public void verify_Total_price_should_be_the_number_equals_Quantity_times_Unit_Price() throws Throwable {
	WebDriverUtility.wait(3000);
   Assert.assertTrue(shoppingCartPageObj.verifyTotalCalculationWithTaxes());
   logger.info("Total price is calculated by Quantity");
   WebDriverUtility.screenShot();
}

@Then("^Verify section 'What would you like to do next\\?' is displayed$")
public void verify_section_What_would_you_like_to_do_next_is_displayed() throws Throwable {
    Assert.assertTrue(shoppingCartPageObj.isWhatWouldYouSectionDisplayed());
    logger.info("User can see What would you like to do next? section.");
    WebDriverUtility.screenShot();
}

@Then("^Verify 'Use Coupon Code' section is displayed$")
public void verify_Use_Coupon_Code_section_is_displayed() throws Throwable {
   Assert.assertTrue(shoppingCartPageObj.isUseCouponSectionDisplayed());
   logger.info("User can see Use Coupon code section");
}

@Then("^Verify 'Estimate Shipping & Taxes' section is displayed$")
public void verify_Estimate_Shipping_Taxes_section_is_displayed() throws Throwable {
  Assert.assertTrue(shoppingCartPageObj.isShippingAndTaxesSectionDisplayed());
}

@Then("^Select shipping destination by selecting Shipping country 'United States', state 'North Carolina' and postCode '28277'$")
public void select_shipping_destination_by_selecting_Shipping_country_State_and_Post_Code() throws Throwable {
  shoppingCartPageObj.enterShippingDestination();
  logger.info("User entered shipping info");
  WebDriverUtility.screenShot();
}

@Then("^User click get Quotes button$")
public void user_click_get_Quotes_button() throws Throwable {
    shoppingCartPageObj.clickGetQuotesButton();
    logger.info("User got quotes for Shipping Rate ");
    WebDriverUtility.screenShot();
}

@Then("^Verify flat rate is displayed and check radio button to add shipping cost to total$")
public void verify_flat_rate_is_displayed_and_check_radio_button_to_add_shipping_cost_to_total() throws Throwable {
    shoppingCartPageObj.clickFlatRateRadioButton();
    logger.info("User added shipping rate to the order");
}

@Then("^User click Apply Shipping$")
public void user_click_Apply_Shipping() throws Throwable {
    shoppingCartPageObj.applyShipping();
    logger.info("User applied shipping rate");
}

@Then("^Verify total price is calculated correctly including shipping cost$")
public void verify_total_price_is_calculated_correctly_including_shipping_cost() throws Throwable {
  Assert.assertTrue(shoppingCartPageObj.verifyTotalPriceToCheckOutBeforeTaxes());
  logger.info("Total price to checkout calculated correctly");

}

@Then("^Verify checkout button displayed$")
public void verify_checkout_button_displayed() throws Throwable {
   Assert.assertTrue(shoppingCartPageObj.isCheckoutButtonDisplayed());
   logger.info("Checkout button is present");
   WebDriverUtility.screenShot();
}

}
