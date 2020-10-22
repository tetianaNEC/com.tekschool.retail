Feature: Retail Test Scenarios 

Background: 
	Given User is on Retail website 
	When User click  on MyAccount
@RegisterForm	
Scenario: Register Account  for new Retail user 
	 
	When User click on Register
	And User fill out Register form with below information
	# we can store our date in the data table
	|firstName|lastName|email|phone|password|
	|Jame|Cocomeloon|cocomeloonjamess@test.com|1212121212|coco1|

	And User select 'yes' for Subscribe
	And User click on privacy and policy check box
	And User click on Continue button
	Then User Should see message 'Your Account Has Been Created!'
	