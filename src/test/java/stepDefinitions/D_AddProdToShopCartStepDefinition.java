package stepDefinitions;

import java.util.NoSuchElementException;

import org.junit.Assert;


import core.Base;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.ProductMenuPageObj;
import pageObjects.ShoppingCartPageObj;
import utilities.WebDriverUtility;

public class D_AddProdToShopCartStepDefinition extends Base {
	
	ProductMenuPageObj productMenuPageObj = new ProductMenuPageObj();
   ShoppingCartPageObj shoppingCartPageObj = new ShoppingCartPageObj();
	@When("^User clicks on 'Tablets' product Menu$")
	public void user_clicks_on_Tablets_product_Menu() throws Throwable {
		productMenuPageObj.openTabletsMenu();
		logger.info("User clicked on Tablets menu");
	}

	@When("^User should see list of products for that category$")
	public void user_should_see_list_of_products_for_that_category() throws Throwable {

		Assert.assertTrue("Products are not found", productMenuPageObj.isProductsDisplayed());
		logger.info("User see list of products related to Tablet category");
		WebDriverUtility.screenShot();
	}

	@When("^User clicks on product 'Samsung Galaxy Tab 10.1'$")
	public void user_clicks_on_product_Samsung_Galaxy_Tab() throws Throwable {
		productMenuPageObj.openSamsungTabletDetails();
		logger.info("User clicked on Product");
		WebDriverUtility.screenShot();
	}

	@When("^Verify 'Add to Cart' button is appeared in the product details$")
	public void verify_Add_to_Cart_button_is_appeared_in_the_product_details() throws Throwable {
		Assert.assertTrue(productMenuPageObj.isAddToTheCartButtonDisplayed());
		logger.info("User can see ADD TO CART button in the product details");
	}

	@When("^User clicks on 'Add to Cart' button$")
	public void user_clicks_on_Add_to_Cart_button_two_times() throws Throwable {
		try {
			WebDriverUtility.wait(6000);
			productMenuPageObj.addProductToTheCart();
		} catch (NoSuchElementException e) {
		e.printStackTrace();
		productMenuPageObj.addProductToTheCart();
		}
		
		logger.info("User added product to the cart");
	}

	@When("^User can see the message '(.+)'$")
	public void user_can_see_the_message_Success_You_have_added_Samsung_Galaxy_Tab_to_your_shopping_cart(String message)
			throws Throwable {
		Assert.assertTrue(productMenuPageObj.messageDisplayedCart().contains(message));
		logger.info("User can see the message");
		WebDriverUtility.screenShot();
	}

	@Then("^User click on 'Shopping Cart'$")
	public void user_click_on_Shopping_Cart() throws Throwable {
		productMenuPageObj.openShoppingCart();
		logger.info("User opened shopping cart");
	}
	@Then("^Verify 'Samsung Galaxy Tab 10.1' in the Shopping cart$")
	public void verify_tablet_in_the_shopping_cart() throws Throwable {
		Assert.assertTrue(productMenuPageObj.isSamsungProductDisplayed());
		logger.info("Product is in the shopping cart");
	}

	@Then("^Verify that same item not repeated in Shopping Cart$")
	public void verify_that_same_item_not_repeated_in_Shopping_Cart() throws Throwable {
		Assert.assertEquals("2", shoppingCartPageObj.getProductQuantity());
		logger.info("User see that product is not repeated");
		WebDriverUtility.screenShot();
	}

}
