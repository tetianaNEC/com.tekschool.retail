package pageObjects;
import java.util.List;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import core.Base;
import utilities.WebDriverUtility;
public class MyAccountPageObj extends Base {
	public MyAccountPageObj() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(xpath = "//h2[contains(text(),'My Account')]")
	private WebElement myAccountText;
	@FindBy(xpath = "//h2[contains(text(),'My Orders')]")
	private WebElement myOrdersText;
	@FindBy(xpath = "//a[contains(text(),'Logout')]")
	private WebElement logoutButton;
	@FindBy(xpath = "//ul[@class='dropdown-menu dropdown-menu-right']//li")
	private List<WebElement> accountMenuElements;
	
	public boolean isMyAccountDisplayed() {
		return WebDriverUtility.isElementDisplayed(myAccountText);
		
	}
	public boolean isMyOrdersDisplayed() {
		return WebDriverUtility.isElementDisplayed(myOrdersText);
		
	}
	public boolean isLogoutButtonDisplayed() {
		return WebDriverUtility.isElementDisplayed(logoutButton);
		
		}
	
	public void clickOnLogoutButton() {
		WebDriverUtility.clickOnElement(logoutButton);
		
	}

}