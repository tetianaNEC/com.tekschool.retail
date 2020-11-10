package pageObjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import core.Base;
import utilities.WebDriverUtility;

public class LoginPageObj extends Base {
	// create a constructor for this page and this applies to all page objects
	public LoginPageObj() {
		// we will use initElements method of PageFactory class to initialize the
		// Webelements of UI
		PageFactory.initElements(driver, this);
	}

	// PageFactory class provides @FindBy annotation to find UI elements.
	// driver.findElement(by.xpath("//tag[@attribute='value']"))
	// the above code is same as below but, below code is used to implement
	// PageFactory in POM Design pattern
	// @FindBy(how = How.xpath, using = "//tag[@attribute= 'value'])
	// we will store these elements as a private WebElement
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'My Account')]")
	private WebElement myAccount;
	@FindBy(xpath = "//ul[@class='dropdown-menu dropdown-menu-right']//li")
	private List<WebElement> dropDownMenuElements;
	@FindBy(xpath = "//a[text()='Register']")
	private WebElement register;
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'Login')]")
	private WebElement login;
	@FindBy(how = How.XPATH, using = "//h2[contains(text(),'Returning Customer')]")
	private WebElement returningCustomer;
	@FindBy(id = "input-email")
	private WebElement emailField;
	@FindBy(id = "input-password")
	private WebElement passwordField;
	@FindBy(xpath = "//input[@class='btn btn-primary']")
	private WebElement loginButton;

	// We start writing public methods to access each element with respected
	// actions to them.
	public void clickOnMyAccount() {
		WebDriverUtility.wait(3000);
		myAccount.click();
	}
	
	public boolean verifyRegisterInDropDownMenu() {
		return WebDriverUtility.isElementDisplayed(register);
	}
	
	public boolean verifyLoginInDropDownMenu() {
		return WebDriverUtility.isElementDisplayed(login);
	}
	public void verifyLoginInDropDownMenuAndClick() {
		if (login.isDisplayed())
			login.click();
	}
	public void verifyRegisterInDropDownMenuAndClick() {
		
		if (WebDriverUtility.isElementDisplayed(register))
			WebDriverUtility.clickOnElement(register); // this is the same as register.click
	}

	public boolean verifyReturningCustomerForm() {
		if (returningCustomer.isDisplayed())
			return true;
		else
			return false;

	}

	public void clickonLogin() {
		login.click();
	}

	public boolean verifyEmailFieldDisplayed() {
		return emailField.isDisplayed();
	}

	public void enterEmailAddress(String emailAddress) {
		WebDriverUtility.wait(2000);
		emailField.sendKeys(emailAddress);
	}

	public boolean verifyPasswordFieldDisplayed() {
		return passwordField.isDisplayed();
	}

	public void enterPassword(String password) {
		WebDriverUtility.wait(2000);
		passwordField.sendKeys(password);

	}

	public String getPasswordText() {

		return passwordField.getText();

	}

	public boolean loginButtonIsDisplayed() {
		return loginButton.isDisplayed();
	}

	public void clickOnLoginButton() {
		loginButton.click();
	}

	public String getPageTitle() {
		String pageTitle = driver.getTitle();
		return pageTitle;
	}
	

}