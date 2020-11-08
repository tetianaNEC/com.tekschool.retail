package stepDefinitions;

import org.junit.Assert;

import core.Base;
import cucumber.api.java.en.Then;
import pageObjects.ProductMenuPageObj;
import pageObjects.ShoppingCartPageObj;
import utilities.WebDriverUtility;

public class E_RemoveProdFromShopCartStepDefinition extends Base {

	ProductMenuPageObj productMenuPageObj = new ProductMenuPageObj();
    ShoppingCartPageObj shoppingCartPageObj = new ShoppingCartPageObj();
	@Then("^User should be able to see a RED X button for each item$")
	public void user_should_be_able_to_see_a_RED_X_button_for_each_item() throws Throwable {

		Assert.assertTrue(shoppingCartPageObj.isRedButtonDisplayed());
		logger.info("RED button is displayed in the shopping cart");
		WebDriverUtility.screenShot();
	}

	@Then("^Verify button is red color in hex '(.+)'$")
	public void verify_button_is_red_color_in_hex_da_f(String hexColorValue) throws Throwable {
		Assert.assertEquals(hexColorValue, shoppingCartPageObj.confirmButtonIsRedColor());
		logger.info("Button is displayed in RED color");
	}

	@Then("^User click on RED X button to remove item from the cart$")
	public void user_click_on_RED_X_button_to_remove_item_from_the_cart() throws Throwable {
		shoppingCartPageObj.clickRedbutton();
		logger.info("User clicked on the RED button");
	}
// This step was impossible to automate as Message is not present in UI 
	@Then("^User should see the message '(.+)'$")
	public void user_should_see_the_message_Are_you_sure(String message) throws Throwable {

		Assert.assertEquals("Message not found", true, productMenuPageObj.getTextOfThePage().contains(message));
		logger.info("User sees the message");
		WebDriverUtility.screenShot();
	}

	@Then("^Verify Item is removed from the cart$")
	public void verify_Item_is_removed_from_the_cart() throws Throwable {
    Assert.assertTrue(shoppingCartPageObj.isShopCartIsEmpty());
    logger.info("User see shopping cart is empty");
    WebDriverUtility.screenShot();
	}
}
