package stepDefinitions;

import org.junit.Assert;



import core.Base;
import cucumber.api.java.en.Then;
import pageObjects.ProductMenuPageObj;
import utilities.WebDriverUtility;

public class G_RemoveProductFromWishListStepDefinition extends Base {
	
	ProductMenuPageObj productMenuPageObj = new ProductMenuPageObj();
	@Then("^User can see a Red X button for the product$")
	public void user_can_see_a_Red_X_button_for_the_product() throws Throwable {
	 Assert.assertTrue(productMenuPageObj.isRedButtonDisplayedWish());
	 logger.info("Red remove button is displayed for the Product in Wish List");
	 WebDriverUtility.screenShot();
	}

	@Then("^User click on Red X button in Wish List$")
	public void user_click_on_Red_X_button_in_Wish_List() throws Throwable {
	productMenuPageObj.clickOnRedButtonWish();
	logger.info("User removed the product from the Wish List by clicking Red X Button");
	WebDriverUtility.screenShot();
	}
	// This step was impossible to automate as Message is not present in UI
	//was commented in feature file
	@Then("^User see '(.+)'  message and select 'Yes'$")
	public void user_see_Are_you_sure_message_and_select_Yes(String message) throws Throwable {
	 Assert.assertTrue(productMenuPageObj.getTextOfThePage().contains(message));
	 productMenuPageObj.selectYesByVisibleText("Yes");
	 logger.info("Message is displayed and user selects Yes");
	}

	@Then("^Item should be removed from Wish List$")
	public void item_should_be_removed_from_Wish_List() throws Throwable {
	Assert.assertTrue(productMenuPageObj.isWishListEmptyMessageDisplayed());  
	logger.info("Item removed from wish list");
	}
}
