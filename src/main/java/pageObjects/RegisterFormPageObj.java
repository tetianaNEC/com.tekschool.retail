package pageObjects;




import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import core.Base;
import utilities.WebDriverUtility;

public class RegisterFormPageObj extends Base {
	// store webElements of Register form UI
	// we need to create a constructor
	public RegisterFormPageObj() {
		PageFactory.initElements(driver, this);
	}

	
	@FindBy(xpath = "//h1[contains(text(),'Register Account')]")
	private WebElement registerAccountFormName;
	@FindBy(xpath = "//legend[contains(text(),'Your Personal Details')]")
	private WebElement yourPersonalDetailsSection;
	@FindBy(xpath = "//label[contains(text(),'First Name')]")
	private WebElement labelFirstName;
	@FindBy(id = "input-firstname")
	private WebElement firstNameField;
	@FindBy(xpath = "//label[contains(text(),'Last Name')]")
	private WebElement labelLastName;
	@FindBy(id = "input-lastname")
	private WebElement lastNameField;
	@FindBy(xpath = "//label[contains(text(),'E-Mail')]")
	private WebElement labelEmail;
	@FindBy(id = "input-email")
	private WebElement emailField;
	@FindBy(xpath = "//label[contains(text(),'Telephone')]")
	private WebElement labelTelephone;
	@FindBy(id = "input-telephone")
	private WebElement phoneField;
	@FindBy(xpath = "//legend[contains(text(),'Your Password')]")
	private WebElement yourPasswordSection;
	@FindBy(xpath = "(//label[contains(text(),'Password')])[1]")
	private WebElement labelPassword;
	@FindBy(id = "input-password")
	private WebElement passwordField;
	@FindBy(xpath = "//label[contains(text(),'Password Confirm')]")
	private WebElement labelPasswordConfirm;
	@FindBy(id = "input-confirm")
	private WebElement passwordConfirmField;
	@FindBy(xpath = "//legend[contains(text(),'Newsletter')]")
	private WebElement newsletterSection;
	@FindBy(xpath = "(//input[@name='newsletter'])[1]")
	private WebElement yesSubscribe;
	@FindBy(xpath = "(//input[@name='newsletter'])[2]")
	private WebElement noSubscribe;
	@FindBy(xpath = "//input[@name='agree']")
	private WebElement privacyPolicy;
	@FindBy(xpath = "//input[@class='btn btn-primary']")
	private WebElement continueButton;
	@FindBy(how = How.XPATH, using = "//h1[contains(text(),'Your Account Has Been Created!')]")
	private WebElement yourAcctCreatedMessage;

	// we start writting methods for
	public boolean isRegisterAccountFormDisplayed() {
		return WebDriverUtility.isElementDisplayed(registerAccountFormName);
	}

	public boolean isYourPersonalDetailsSectionIsDisplayed() {
		return WebDriverUtility.isElementDisplayed(yourPersonalDetailsSection);
		
	}

	public boolean isLabelFirstNameIsDisplayed() {
		return WebDriverUtility.isElementDisplayed(labelFirstName);
	}

	public void enterFirstName(String fName) {
		firstNameField.sendKeys(fName);
	}

	public boolean isLabelLastNameIsDisplayed() {
		return WebDriverUtility.isElementDisplayed(labelLastName);
	}

	public void enterLastName(String lName) {
		lastNameField.sendKeys(lName);
	}

	public boolean isLabelEmailIsDisplayed() {
		return WebDriverUtility.isElementDisplayed(labelEmail);
	}

	public void enterEmail(String email) {
		emailField.sendKeys(email);
	}

	public boolean isLabelTelephoneIsDisplayed() {
		return WebDriverUtility.isElementDisplayed(labelTelephone);
	}

	public void enterPhone(String phone) {
		phoneField.sendKeys(phone);
	}

	public boolean isYourPasswordSectionIsDisplayed() {
		return WebDriverUtility.isElementDisplayed(yourPasswordSection);
	}

	public boolean isLabelPasswordIsDisplayed() {
		return WebDriverUtility.isElementDisplayed(labelPassword);
	}

	public void enterPassword(String password) {
		passwordField.sendKeys(password);
	}

	public boolean isLabelPassConfirmIsDisplayed() {
		return WebDriverUtility.isElementDisplayed(labelPasswordConfirm);

	}

	public void enterPasswordConfirm(String passwordConfirm) {
		passwordConfirmField.sendKeys(passwordConfirm);
	}

	public boolean isNewsletterSectionPresent() {
		return WebDriverUtility.isElementDisplayed(newsletterSection);

	}

	public boolean verifyNoOnSubscribeByDefault() {
		return noSubscribe.isSelected();

	}

	public void selectYesOnSubscribe() {
		if (!yesSubscribe.isSelected())
			yesSubscribe.click();
	}

	public boolean isContinueButtonPresent() {
		return continueButton.isDisplayed();

	}

	public boolean isPrivacyPolicyDisplayed() {
		return privacyPolicy.isDisplayed();
		
	}
	public String privacyPolicyLocation() {
		return privacyPolicy.getCssValue("display");
	}

	public void clickOnPrivacyPolicy() {
		privacyPolicy.click();
	}

	public void clickOnContinueButton() {
		continueButton.click();
	}

	public String getSuccessfullAccountCreationMessage() {
		String successMessage = yourAcctCreatedMessage.getText();
		return successMessage;
	}
}