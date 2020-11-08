package stepDefinitions;

import org.junit.Assert;

import core.Base;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pageObjects.ProductMenuPageObj;
import utilities.WebDriverUtility;

public class F_AddProductToWishListStepDefinition extends Base {
	
	ProductMenuPageObj productMenuPageObj = new ProductMenuPageObj();
	@When("^Verify an 'Heart' icon is present$")
	public void verify_an_Heart_icon_is_present() throws Throwable {
	    Assert.assertTrue(productMenuPageObj.isWishListDisplayed());
	    logger.info("Heart Icon button is displayed under product");
	    WebDriverUtility.screenShot();
	}

	@When("^When user hover mouse over the Heart Icon it should show '(.+)'$")
	public void when_user_hover_mouse_over_the_Heart_Icon_it_should_show_Add_to_Wish_List(String tooltipText) throws Throwable {
	 Assert.assertEquals(tooltipText, productMenuPageObj.moveMouseToElementAndGetAttribute());
	 logger.info("Add to Wish List text is visible");
	 WebDriverUtility.screenShot();
	}

	@Then("^User click on Heart icon$")
	public void user_click_on_Heart_icon() throws Throwable {
	 productMenuPageObj.clickOnHeartIcon();
	 logger.info("User added product to the Wish List");
	}
	
	@When("^User see the message '(.+)'$")
	public void user_should_see_the_message_you_must_login_or_create_an_account_to_save_Samsung_Galaxy_Tab_to_your_wish_list(String message)
			throws Throwable {
		Assert.assertTrue(productMenuPageObj.messageDisplayedYouMuSt().contains(message));
		logger.info("User can see the Green message");
		WebDriverUtility.screenShot();
	}

	@Then("^User click on Menu 'Wish List' and user can see the added product$")
	public void user_click_on_Menu_Wish_List_and_user_can_see_the_added_product() throws Throwable {
	  productMenuPageObj.clickOnWishListMenu();
	  Assert.assertTrue(productMenuPageObj.isSamsungProductDisplayed());
	  logger.info("User opened Wish List and can see the added product");
	}


}
