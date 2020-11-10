@Test
Feature: Test Environment Scenarios 

Background: 
	Given User is on Retail website 
Scenario: A) Register account for Test Environment 
	When User click  on MyAccount 
	When If Register option is displayed User click on Register 
	And  User should see Register Account form 
	And  User should see Your Personal Details section with fields: 'First Name', 'Last Name', 'E-Mail','Telephone' 
	And  User should see Your Password section: 'Password' and 'Password Confirm' 
	Then User fill out Register form with information below 
	
		|firstName|lastName|email|phone|password|
		|Loren|Mone|lory@gmail.com|1212121212|loren123|
	And  Verify 'Newsletter' section present 
	And  Verify 'No' Radio button is selected by default 
	Then User selects 'Yes' to subscribe 
	And  Verify 'Continue' button is displayed 
	And  Verify check box 'I have read and agree to the Privacy Policy' next to 'Continue' button 
	Then Click on check box 
	Then Click on 'Continue' button 
	And  Text should be displayed 'Your Account Has Been Created!' 
	
Scenario: B) User should be able to log in to their account 
	When User click  on MyAccount 
	When Verify that Login sub-option in My Account menu and click on Login 
	And Verify Login form Returning customer is displayed 
	And Verify Email and Password fields are present 
	And Verify Login button is displayed 
	And User enter username 'lory@gmail.com' and password 'loren123' 
	And Verify password is hidden when typed in 
	And User click on Login button 
	Then User is directed to My Account page once logged in 
		
Scenario: C) Logout option for Test Environment 
	When User click  on MyAccount 
	When Verify that Login sub-option in My Account menu and click on Login 
	And  Verify Login form Returning customer is displayed 
	And User enter username 'lory@gmail.com' and password 'loren123' 
	And User click on Login button 
	And  User click  on MyAccount 
	And  Verify that Logout sub-option is displayed in My Account drop-down menu 
	Then User click on Logout 
	And Verify Message appeared when user logged out - 'You have been logged off your account. It is now safe to leave the computer. Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.' 
	And User click  on MyAccount 
	And Verify My Account menu has two options: Register, Login 
	
	
Scenario: D) Add Products to the Shopping Cart 

	When User clicks on 'Tablets' product Menu 
	And  User should see list of products for that category 
	And User clicks on product 'Samsung Galaxy Tab 10.1' 
	And Verify 'Add to Cart' button is appeared in the product details 
	And User clicks on 'Add to Cart' button 
	And User can see the message 'Success: You have added Samsung Galaxy Tab 10.1 to your shopping cart!' 
	And User clicks on 'Add to Cart' button 
	Then User click on 'Shopping Cart' 
	And Verify 'Samsung Galaxy Tab 10.1' in the Shopping cart 
	And  Verify that same item not repeated in Shopping Cart 
	
Scenario: E) Remove Product from Shopping Cart 
#Unable to automate commented step as "Are you sure" message not present 
	When User clicks on 'Tablets' product Menu 
	And User clicks on product 'Samsung Galaxy Tab 10.1' 
	And User clicks on 'Add to Cart' button 
	Then User click on 'Shopping Cart' 
	And Verify 'Samsung Galaxy Tab 10.1' in the Shopping cart 
	And User should be able to see a RED X button for each item 
	And Verify button is red color in hex '#da4f49' 
	Then User click on RED X button to remove item from the cart 
	#And User should see the message 'Are you sure' 
	And Verify Item is removed from the cart 
	
	
Scenario: F) Add product to 'Wish List' 
	When User clicks on 'Tablets' product Menu 
	And User clicks on product 'Samsung Galaxy Tab 10.1' 
	And Verify an 'Heart' icon is present 
	And When user hover mouse over the Heart Icon it should show 'Add to Wish List' 
	Then User click on Heart icon 
	And User see the message 'You must login or create an account to save Samsung Galaxy Tab 10.1 to your wish list!' 
	When User click  on MyAccount 
	And  Verify that Login sub-option in My Account menu and click on Login 
	And User enter username 'lory@gmail.com' and password 'loren123' 
	And User click on Login button 
	And User click on Menu 'Wish List' and user can see the added product 
	
	
Scenario: G) Remove Product From Wish List 
#Unable to automate commented step as "Are you sure" message not present
	When User clicks on 'Tablets' product Menu 
	And  User click on Heart icon 
	And  User click  on MyAccount 
	And  Verify that Login sub-option in My Account menu and click on Login 
	And User enter username 'lory@gmail.com' and password 'loren123' 
	And  User click on Login button 
	Then  User click on Menu 'Wish List' and user can see the added product 
	And  User can see a Red X button for the product 
	And  User click on Red X button in Wish List 
	#And  User see 'Are you sure'  message and select 'Yes' 
	And  Item should be removed from Wish List 
	
	
Scenario: H) User should be able to change Currency of Product prices 

	When User see Currency button on the left of the page 
	And US Dollar Currency selected by default 
	And User click on Currency button 
	And Verify Currency drop-down menu contains 'Euro', 'Pound Sterling' and 'US Dollar' options 
	Then User selects Pound Sterling currency 
	When User clicks on 'Tablets' product Menu 
	And User clicks on product 'Samsung Galaxy Tab 10.1' 
	And Verify Price of the Product in Pound Sterling 
	And  User click on Heart icon 
	And  User click  on MyAccount 
	And  Verify that Login sub-option in My Account menu and click on Login 
	And User enter username 'lory@gmail.com' and password 'loren123' 
	And  User click on Login button 
	Then  User click on Menu 'Wish List' and user can see the added product 
	And Verify Price of the product in Pound Sterling in the Wish List 
	And  User click  on MyAccount 
	And  Verify that Logout sub-option is displayed in My Account drop-down menu 
	Then User click on Logout 
	And  User click  on MyAccount 
	And  Verify that Login sub-option in My Account menu and click on Login 
	And User enter username 'lory@gmail.com' and password 'loren123' 
	And  User click on Login button 
	Then  User click on Menu 'Wish List' and user can see the added product 
	And Verify Price of the product in Pound Sterling in the Wish List 
	
Scenario: I) Calculate total cost for Products in the Shopping Cart 
	When User clicks on 'Tablets' product Menu 
	And User clicks on product 'Samsung Galaxy Tab 10.1' 
	And User clicks on 'Add to Cart' button 
	And User clicks on 'Add to Cart' button 
	Then User click on 'Shopping Cart' 
	And  Verify that same item not repeated in Shopping Cart 
	And Verify Unit Price and Total columns are displayed 
	And Verify Total price should be the number equals Quantity times Unit Price 
	And Verify section 'What would you like to do next?' is displayed 
	And Verify 'Use Coupon Code' section is displayed 
	And Verify 'Estimate Shipping & Taxes' section is displayed 
	And Select shipping destination by selecting Shipping country 'United States', state 'North Carolina' and postCode '28277' 
	And User click get Quotes button 
	And Verify flat rate is displayed and check radio button to add shipping cost to total 
	Then User click Apply Shipping 
	And Verify total price is calculated correctly including shipping cost 
	And Verify checkout button displayed 
	
	
	
	
	
	
