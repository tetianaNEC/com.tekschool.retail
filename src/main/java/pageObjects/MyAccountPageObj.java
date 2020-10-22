package pageObjects;
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
	@FindBy(xpath = "(//a[contains(text(), 'Logout')])[2]")
	private WebElement logoutButton;
	@FindBy(xpath = "//h1[contains(text(),'Account Logout')]")
	private WebElement accountLogoutText;
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
	public void clickOnLogoutButton() {
		logoutButton.click();
		
	}
	public boolean isLogOutConfirmationTextDisplayed() {
		if(accountLogoutText.isDisplayed()) 
		return true;
		else
		return false;
	
}
}