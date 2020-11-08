package pageObjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;
import utilities.WebDriverUtility;

public class CurrencyPageObj extends Base {
	public CurrencyPageObj() {

		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//span[contains(text(),'Currency')]")
	private WebElement currencyButton;
	@FindBy(xpath = "//strong[contains(text(),'$')]")
	private WebElement dollarDefault;
	@FindBy(xpath = "//ul[@class='dropdown-menu']//li")
	private List<WebElement> currencyDropDownMenu;
	@FindBy(xpath = "//button[contains(text(),'€ Euro')]")
	private WebElement euroCurrency;
	@FindBy(xpath = "//button[contains(text(),'£ Pound Sterling')]")
	private WebElement pounSterlingCurrency;
	@FindBy(xpath = "//button[contains(text(),'$ US Dollar')]")
	private WebElement usDollarCurrency;
	@FindBy(xpath = "//h2[contains(text(),'£148.22')]")
	private WebElement priceOfSamsungTablet;
	@FindBy(xpath = "//td[contains(text(),'x 1')]")
	private WebElement priceInShoppingCart;
	@FindBy(xpath = "//div[contains(text(),'£122.49')]")
	private WebElement priceInWishList;

	public boolean isCurrencyDisplayed() {
		return WebDriverUtility.isElementDisplayed(currencyButton);

	}

	public void clickCurrencyButton() {
		currencyButton.click();

	}
	
	public boolean isCurrencyDropDownContains() {
		for (WebElement webElement : currencyDropDownMenu) {
			if (webElement.getText().contains("€ Euro")) 
			continue;
				if(webElement.getText().contains("£ Pound Sterling")) 	
				continue;
				if(webElement.getText().contains("$ US Dollar")) {
					
				}
				return true;
		}
		return false;
				
		}

	public boolean isUSDollarsByDefault() {
		return dollarDefault.isDisplayed();

	}

	public void selectPoundSterling() {
		pounSterlingCurrency.click();
	}
	
	public boolean verifyCurrency() {
		return priceOfSamsungTablet.getText().contains("£");
		
	}

	public boolean verifyCurrencyInWishList() {
		return priceInWishList.getText().contains("£");
	
}
}
