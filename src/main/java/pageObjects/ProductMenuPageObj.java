package pageObjects;

import java.util.List;

import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.Color;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.mongodb.TaggableReadPreference;
import com.sun.corba.se.spi.orbutil.fsm.Action;

import core.Base;
import utilities.WebDriverUtility;

public class ProductMenuPageObj extends Base {

	public ProductMenuPageObj() {

		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//div[@class='collapse navbar-collapse navbar-ex1-collapse']")
	private WebElement productMenuBar;
	@FindBy(xpath = "//a[contains(text(),'Tablets')]")
	private WebElement tabletsMenu;
	@FindBy(xpath = "//div[@id='content']")
	private WebElement contentOfThePage;
	@FindBy(id = "product-category")
	private WebElement productCategory;
	@FindBy(xpath = "//a[contains(text(),'Samsung Galaxy Tab 10.1')]")
	private WebElement samsungTabletProduct;
	@FindBy(xpath = "(//a[contains(text(),'Samsung Galaxy Tab 10.1')])[2]")
	private WebElement samsungTabletInCart;
	@FindBy(linkText = "Samsung Galaxy Tab 10.1")
	private WebElement samsungLink;
	@FindBy(id = "button-cart")
	private WebElement addToTheCartButton;
	@FindBy(xpath = "//div/div[contains(text(),'Success: You have added ')]")
	private WebElement successMessage;
	@FindBy(xpath = "//span[contains(text(),'Shopping Cart')]")
	private WebElement shoppingCart;
	@FindBy(xpath = "//button[@data-original-title='Add to Wish List']")
	private WebElement wishListButtonUnderProd;
	@FindBy(xpath = "//span[contains(text(),'Wish List (1)')]")
	private WebElement wishListMenu;
	@FindBy(xpath = "//div/div[contains(text(),' You must ')]")
	private WebElement youMustMessage;
	@FindBy(xpath = "//a[@data-original-title='Remove']")
	private WebElement redRemoveItemButtonWishList;
	@FindBy(xpath = "//p[contains(text(),'Your wish list is empty.')]")
	private WebElement wishListEmptyMessag;

	public boolean isProductMenuBarDisplayed() {

		return WebDriverUtility.isElementDisplayed(productMenuBar);
	}

	public void openTabletsMenu() {
		WebDriverUtility.clickOnElement(tabletsMenu);
	}

	public boolean isProductsDisplayed() {
		return WebDriverUtility.isElementDisplayed(productCategory);
	}

	public void openSamsungTabletDetails() {
		if (WebDriverUtility.isElementDisplayed(samsungTabletProduct))
			try {
				WebDriverUtility.clickOnElement(samsungTabletProduct);
			} catch (ElementNotInteractableException e) {
				WebDriverUtility.clickElementWithJS(samsungTabletProduct);
			}
	}

	public boolean isAddToTheCartButtonDisplayed() {
		return WebDriverUtility.isElementDisplayed(addToTheCartButton);

	}

	public void addProductToTheCart() throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(driver, 40);
		wait.until(ExpectedConditions.elementToBeClickable(addToTheCartButton));
		WebDriverUtility.clickOnElement(addToTheCartButton);
	}

	public String messageDisplayedCart() {
		String messageString = WebDriverUtility.getText(successMessage);
		System.out.println(messageString);
		return messageString;
	}

	public void openShoppingCart() {
		if (WebDriverUtility.isElementDisplayed(shoppingCart))
			WebDriverUtility.clickOnElement(shoppingCart);

	}

	public boolean isSamsungTabletDisplayed() {
		return samsungTabletInCart.isDisplayed();
	}

	public String getTextOfThePage() {
		if (WebDriverUtility.isElementDisplayed(contentOfThePage))
			;
		return (contentOfThePage.getText());

	}

	public boolean isWishListDisplayed() {
		return WebDriverUtility.isElementDisplayed(wishListButtonUnderProd);
	}

	public String moveMouseToElementAndGetAttribute() throws InterruptedException {
		Actions actions = new Actions(driver);
		actions.moveToElement(wishListButtonUnderProd).build().perform();
		return wishListButtonUnderProd.getAttribute("data-original-title");
	}

	public void clickOnHeartIcon() {
		wishListButtonUnderProd.click();
	}

	public void clickOnWishListMenu() {
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.elementToBeClickable(wishListMenu));
		WebDriverUtility.clickOnElement(wishListMenu);
		;
	}

	public String messageDisplayedYouMuSt() {
		String messageString = WebDriverUtility.getText(youMustMessage);
		return messageString;
	}

	public boolean isRedButtonDisplayedWish() {
		return WebDriverUtility.isElementDisplayed(redRemoveItemButtonWishList);
	}

	public void clickOnRedButtonWish() {
		redRemoveItemButtonWishList.click();
	}

	public void selectYesByVisibleText(String text) {
		Select select = new Select(contentOfThePage);
		select.selectByVisibleText(text);
	}

	public boolean isSamsungProductDisplayed() {
		return (samsungTabletProduct.isDisplayed() || samsungTabletInCart.isDisplayed() || samsungLink.isDisplayed());

	}
	public boolean isWishListEmptyMessageDisplayed() {
		return wishListEmptyMessag.isDisplayed();
	}

}
