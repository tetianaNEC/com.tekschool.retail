#@loginRegression -this tag will run all scenarios in this feature file
Feature: Login to Retail Website 

#any steps which are repeated at the beginning of all scenarios in one feature file can be placed 
#under Background keyword and it will reduce code dublicate and writing same steps over and over
Background:
    Given User is on Retail website 
	When User click  on MyAccount 
@login
Scenario: Login to MyAccount 
	
	And  User click on Login 
	And User enter username 'sdet@tekschool.us' and password 'sdet' 
	And User click on Login button 
	Then User should be logged in to MyAccount dashboard
	#if i want to run same scenario with multiple userName and Password 
	# Should i copy and past same scenario with multiple user and pass ? 
	
	@login
Scenario: Login to MyAccount 
 
	When  User click on Login 
	And User enter username 'sdet@tekschool.us' and password 'sdet' 
	And User click on Login button 
	And User should be logged in to MyAccount dashboard
	And User click on Logout
	Then User Should be logged out from my Account
	
	@loginExamples
Scenario Outline: Login to Retail Site with multiple users

	When  User click on Login 
	And User enter username '<userName>' and password '<password>' 
	And User click on Login button 
	Then User should be logged in to MyAccount dashboard
	Examples:
	|userName|password|
	|sdet@tekschool.us|sdet|
	|consumer@tekschool.us|JBond|
	|students@tekschool.us|TEST|
	