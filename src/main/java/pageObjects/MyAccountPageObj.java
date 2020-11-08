package pageObjects;
import java.util.List;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import core.Base;
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
		if (myAccountText.isDisplayed())
			return true;
		else
			return false;
	}
	public boolean isMyOrdersDisplayed() {
		if (myOrdersText.isDisplayed())
			return true;
		else
			return false;
	}
	public boolean isLogoutButtonDisplayed() {
		return logoutButton.isDisplayed();
		
		}
	
	public void clickOnLogoutButton() {
		logoutButton.click();
		
	}

}