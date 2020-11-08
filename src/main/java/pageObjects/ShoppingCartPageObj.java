package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.Color;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import core.Base;

import utilities.WebDriverUtility;

public class ShoppingCartPageObj extends Base {

	public ShoppingCartPageObj() {

		PageFactory.initElements(driver, this);
	}
	
	Select select;

	@FindBy(xpath = "//input[@value='2']")
	private WebElement itemQuantityInShopCart;
	@FindBy(xpath = "//button[@data-original-title='Remove']")
	private WebElement redRemoveItemButtonCart;
	@FindBy(xpath = "(//p[contains(text(),'Your shopping cart is empty!')])[2]")
	private WebElement shopCartIsEmptymessag;
	@FindBy(xpath = "//td[contains(text(),'Unit Price')]")
	private WebElement unitPriceColumnName;
	@FindBy(xpath = "//td[contains(text(),'Total')]")
	private WebElement totalColumnName;
	@FindBy(xpath = "//td[contains(text(),'$241.99')]")
	private WebElement unitPriceValue;
	@FindBy(xpath = "//h2[contains(text(),'What would you like to do next?')]")
	private WebElement whatWouldYouLikeSection;
	@FindBy(xpath = "(//td[contains(text(),'$483.98')])[4]")
	private WebElement totalPriceValue;
	@FindBy(xpath = "//a[contains(text(),'Use Coupon Code')]")
	private WebElement couponCodeSection;
	@FindBy(xpath = "//a[contains(text(),'Estimate Shipping & Taxes ')]")
	private WebElement shippingAndTaxesSection;
	@FindBy(xpath = "//select[@id='input-country']")
	private WebElement shipCountry;
	@FindBy(xpath = "//select[@id='input-zone']")
	private WebElement shipState;
	@FindBy(xpath = "//input[@id='input-postcode']")
	private WebElement shipPostCode;
	@FindBy(xpath = "//button[@id='button-quote']")
	private WebElement getQuotes;
	@FindBy(xpath = "//input[@name='shipping_method']")
	private WebElement radioButtonShipRate;
	@FindBy(xpath = "//input[@id='button-shipping']")
	private WebElement applyShippingButton;
	@FindBy(xpath = "//a[contains(text(),'Use Gift Certificate ')]")
	private WebElement giftCertificateSection;
	@FindBy(xpath = "(//td[contains(text(),'$399.98')])[4]")
	private WebElement subTotalPrice;
	@FindBy(xpath = "(//td[contains(text(),'$5.00')])[2]")
	private WebElement flatShippingRate;
	@FindBy(xpath = "(//td[contains(text(),'$404.98')])[2]")
	private WebElement valueTotalPrice;
	@FindBy(xpath = "//a[contains(text(),'Checkout')]")
	private WebElement checkoutButton;

	public String getProductQuantity() {
		WebDriverUtility.wait(3000);
		String actualQuantity = itemQuantityInShopCart.getAttribute("value");
		return actualQuantity;

	}

	public String confirmButtonIsRedColor() {
		String colorString = redRemoveItemButtonCart.getCssValue("background-color");
		String hexString = Color.fromString(colorString).asHex();
		return hexString;

	}

	public boolean isRedButtonDisplayed() {

		return WebDriverUtility.isElementDisplayed(redRemoveItemButtonCart);
	}

	public void clickRedbutton() {
		WebDriverUtility.clickOnElement(redRemoveItemButtonCart);
	}

	public boolean isShopCartIsEmpty() {
		return WebDriverUtility.isElementDisplayed(shopCartIsEmptymessag);
	}
	
	public boolean isUnitPriceColumnDisplayed() {
		return WebDriverUtility.isElementDisplayed(unitPriceColumnName);
	}
	public boolean isTotalColumnNameDisplayed() {
		return WebDriverUtility.isElementDisplayed(totalColumnName);
	}
	
	public boolean verifyTotalCalculationWithTaxes() {
		WebDriverUtility.wait(3000);
		int c =	Integer.parseInt(itemQuantityInShopCart.getAttribute("value"));
		double b = Double.parseDouble(totalPriceValue.getText().replace("$", ""));
		double a = Double.parseDouble(unitPriceValue.getText().replace("$", ""));
		if (a*c == b) {
			return true;
		}
		return false;
	}
	
	
	public boolean isWhatWouldYouSectionDisplayed() {
		return WebDriverUtility.isElementDisplayed(whatWouldYouLikeSection);	
	}
	
	public boolean isUseCouponSectionDisplayed() {
		return WebDriverUtility.isElementDisplayed(couponCodeSection);
	}
	
	public boolean isShippingAndTaxesSectionDisplayed() {
		return WebDriverUtility.isElementDisplayed(shippingAndTaxesSection);
	}
	
	public void enterShippingDestination () {
		shippingAndTaxesSection.click();
		
		select = new Select(shipCountry);
		select.selectByVisibleText("United States");
		
		select = new Select(shipState);
		select.selectByVisibleText("North Carolina");
		shipPostCode.sendKeys("28277");;
		
	} public void clickGetQuotesButton() {
		getQuotes.click();
	}
	public void clickFlatRateRadioButton() {
		if(!radioButtonShipRate.isSelected())
			radioButtonShipRate.click();
	}
	
	public void applyShipping() {
		applyShippingButton.click();
	}
	
	public boolean verifyTotalPriceToCheckOutBeforeTaxes() {
		double subTotal = Double.parseDouble(subTotalPrice.getText().replace("$", ""));
		double shippingRate = Double.parseDouble(flatShippingRate.getText().replace("$", ""));
		double totalPrice = Double.parseDouble(valueTotalPrice.getText().replace("$", ""));
		System.out.println(subTotal + shippingRate == totalPrice);
		if(subTotal + shippingRate == totalPrice)
			return true;
		return false;
	}
	
	public boolean isCheckoutButtonDisplayed() {
		return WebDriverUtility.isElementDisplayed(checkoutButton);
	}

}
