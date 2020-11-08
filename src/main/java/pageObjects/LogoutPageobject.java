package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;

public class LogoutPageobject extends Base {

	public LogoutPageobject() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//h1[contains(text(),'Account Logout')]")
	private WebElement accountLogoutText;
	@FindBy(xpath = "//p[contains(text(),'You have been logged off your account. It is now s')]")
	private WebElement logoutMessage1;
	@FindBy(xpath = "//p[contains(text(),'Your shopping cart has been saved, the items insid')]")
	private WebElement logoutMessage2;

	public boolean isLogOutConfirmationTextDisplayed() {
		if (accountLogoutText.isDisplayed())
			return true;
		else
			return false;

	}

	public String messageLogoffString() {

		String actualMessage1 = logoutMessage1.getText();
		String actualMessage2 = logoutMessage2.getText();

		return ( actualMessage1 + " " + actualMessage2 );
	}
}
