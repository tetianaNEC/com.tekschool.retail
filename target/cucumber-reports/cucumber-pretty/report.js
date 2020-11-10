$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/AssignmentTestEnvironment.feature");
formatter.feature({
  "line": 2,
  "name": "Test Environment Scenarios",
  "description": "",
  "id": "test-environment-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.before({
  "duration": 6581674200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2801351500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "A) Register account for Test Environment",
  "description": "",
  "id": "test-environment-scenarios;a)-register-account-for-test-environment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User click  on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "If Register option is displayed User click on Register",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should see Register Account form",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should see Your Personal Details section with fields: \u0027First Name\u0027, \u0027Last Name\u0027, \u0027E-Mail\u0027,\u0027Telephone\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should see Your Password section: \u0027Password\u0027 and \u0027Password Confirm\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User fill out Register form with information below",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "phone",
        "password"
      ],
      "line": 14
    },
    {
      "cells": [
        "Loren",
        "Mone",
        "loro@gmail.com",
        "1212121212",
        "loren123"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \u0027Newsletter\u0027 section present",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify \u0027No\u0027 Radio button is selected by default",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User selects \u0027Yes\u0027 to subscribe",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify \u0027Continue\u0027 button is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify check box \u0027I have read and agree to the Privacy Policy\u0027 next to \u0027Continue\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on check box",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027Continue\u0027 button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Text should be displayed \u0027Your Account Has Been Created!\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3064939000,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.if_register_option_is_displayed_user_click_on_register()"
});
formatter.result({
  "duration": 910225900,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_should_see_Register_Account_form()"
});
formatter.result({
  "duration": 415075600,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_should_see_Your_Personal_Details_section_with_fields_First_Name_Last_Name_E_Mail_Telephone()"
});
formatter.result({
  "duration": 132426700,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_should_see_Your_Password_section_Password_and_Password_Confirm()"
});
formatter.result({
  "duration": 76365400,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_fill_out_Register_form_with_information_below(DataTable)"
});
formatter.result({
  "duration": 403431100,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.verify_newsletter_section_present()"
});
formatter.result({
  "duration": 34304800,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.verify_No_Radio_button_is_selected_by_default()"
});
formatter.result({
  "duration": 368679700,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_selects_Yes_to_subscribe()"
});
formatter.result({
  "duration": 465661700,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.verify_Continue_button_is_displayed_on_bottom_of_the_form()"
});
formatter.result({
  "duration": 32132800,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.verify_check_box_I_have_read_and_agree_to_the_Privacy_Policy_next_to_Continue_button()"
});
formatter.result({
  "duration": 23476100,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.click_on_check_box()"
});
formatter.result({
  "duration": 379894200,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.click_on_Continue_button()"
});
formatter.result({
  "duration": 551469100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 26
    }
  ],
  "location": "A_RegisterAccountStepDefinition.text_should_be_displayed_Your_Account_Has_Been_Created(String)"
});
formatter.result({
  "duration": 5386592700,
  "status": "passed"
});
formatter.after({
  "duration": 678464300,
  "status": "passed"
});
formatter.before({
  "duration": 5777523500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 3316661600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "B) User should be able to log in to their account",
  "description": "",
  "id": "test-environment-scenarios;b)-user-should-be-able-to-log-in-to-their-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User click  on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Verify that Login sub-option in My Account menu and click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Verify Login form Returning customer is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify Email and Password fields are present",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify Login button is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enter username \u0027loro@gmail.com\u0027 and password \u0027loren123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify password is hidden when typed in",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User is directed to My Account page once logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3057736500,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 349799200,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_Login_form_Returning_customer_is_displayed()"
});
formatter.result({
  "duration": 29729200,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_Email_and_Password_fields_are_present()"
});
formatter.result({
  "duration": 50785800,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_Login_button_is_displayed()"
});
formatter.result({
  "duration": 26430000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loro@gmail.com",
      "offset": 21
    },
    {
      "val": "loren123",
      "offset": 51
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 4655550100,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_password_is_hidden_when_typed_in()"
});
formatter.result({
  "duration": 21561300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 493728000,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.user_is_directed_to_My_Account_page_once_logged_in()"
});
formatter.result({
  "duration": 395164100,
  "status": "passed"
});
formatter.after({
  "duration": 655296800,
  "status": "passed"
});
formatter.before({
  "duration": 5398606200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 3269866100,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "C) Logout option for Test Environment",
  "description": "",
  "id": "test-environment-scenarios;c)-logout-option-for-test-environment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "User click  on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Verify that Login sub-option in My Account menu and click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Verify Login form Returning customer is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enter username \u0027loro@gmail.com\u0027 and password \u0027loren123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Verify that Logout sub-option is displayed in My Account drop-down menu",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User click on Logout",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Verify Message appeared when user logged out - \u0027You have been logged off your account. It is now safe to leave the computer. Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Verify My Account menu has two options: Register, Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3067468600,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 498205400,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_Login_form_Returning_customer_is_displayed()"
});
formatter.result({
  "duration": 32266500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loro@gmail.com",
      "offset": 21
    },
    {
      "val": "loren123",
      "offset": 51
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 4555503000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 738732000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3056730100,
  "status": "passed"
});
formatter.match({
  "location": "C_LogOutStepDefinition.verify_that_Logout_sub_option_is_displayed_in_My_Account_drop_down_menu()"
});
formatter.result({
  "duration": 403890100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Logout()"
});
formatter.result({
  "duration": 811797800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have been logged off your account. It is now safe to leave the computer. Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.",
      "offset": 48
    }
  ],
  "location": "C_LogOutStepDefinition.verify_Message_appeared_when_user_logged_out(String)"
});
formatter.result({
  "duration": 741344400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3051229100,
  "status": "passed"
});
formatter.match({
  "location": "C_LogOutStepDefinition.verify_My_Account_menu_has_two_options_Register_Login()"
});
formatter.result({
  "duration": 71436100,
  "status": "passed"
});
formatter.after({
  "duration": 638361500,
  "status": "passed"
});
formatter.before({
  "duration": 5369216900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 4631584800,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "D) Add Products to the Shopping Cart",
  "description": "",
  "id": "test-environment-scenarios;d)-add-products-to-the-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "User clicks on \u0027Tablets\u0027 product Menu",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "User should see list of products for that category",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User clicks on product \u0027Samsung Galaxy Tab 10.1\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Verify \u0027Add to Cart\u0027 button is appeared in the product details",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User clicks on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User can see the message \u0027Success: You have added Samsung Galaxy Tab 10.1 to your shopping cart!\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User clicks on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User click on \u0027Shopping Cart\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Verify \u0027Samsung Galaxy Tab 10.1\u0027 in the Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Verify that same item not repeated in Shopping Cart",
  "keyword": "And "
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Tablets_product_Menu()"
});
formatter.result({
  "duration": 435980100,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_should_see_list_of_products_for_that_category()"
});
formatter.result({
  "duration": 569647600,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 2324758400,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_Add_to_Cart_button_is_appeared_in_the_product_details()"
});
formatter.result({
  "duration": 53431600,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 6104226400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added Samsung Galaxy Tab 10.1 to your shopping cart!",
      "offset": 26
    }
  ],
  "location": "D_AddProdToShopCartStepDefinition.user_can_see_the_message_Success_You_have_added_Samsung_Galaxy_Tab_to_your_shopping_cart(String)"
});
formatter.result({
  "duration": 584818800,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 6072430100,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 484740300,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_tablet_in_the_shopping_cart()"
});
formatter.result({
  "duration": 74555100,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_that_same_item_not_repeated_in_Shopping_Cart()"
});
formatter.result({
  "duration": 3364574800,
  "status": "passed"
});
formatter.after({
  "duration": 632256500,
  "status": "passed"
});
formatter.before({
  "duration": 6160351200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 4706372300,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "E) Remove Product from Shopping Cart",
  "description": "",
  "id": "test-environment-scenarios;e)-remove-product-from-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 64,
      "value": "#Unable to automate commented step as \"Are you sure\" message not present"
    }
  ],
  "line": 65,
  "name": "User clicks on \u0027Tablets\u0027 product Menu",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "User clicks on product \u0027Samsung Galaxy Tab 10.1\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User clicks on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User click on \u0027Shopping Cart\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Verify \u0027Samsung Galaxy Tab 10.1\u0027 in the Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User should be able to see a RED X button for each item",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Verify button is red color in hex \u0027#da4f49\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User click on RED X button to remove item from the cart",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 73,
      "value": "#And User should see the message \u0027Are you sure\u0027"
    }
  ],
  "line": 74,
  "name": "Verify Item is removed from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Tablets_product_Menu()"
});
formatter.result({
  "duration": 676552400,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 1603646500,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 6103322700,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 542744900,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_tablet_in_the_shopping_cart()"
});
formatter.result({
  "duration": 55895400,
  "status": "passed"
});
formatter.match({
  "location": "E_RemoveProdFromShopCartStepDefinition.user_should_be_able_to_see_a_RED_X_button_for_each_item()"
});
formatter.result({
  "duration": 454965700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#da4f49",
      "offset": 35
    }
  ],
  "location": "E_RemoveProdFromShopCartStepDefinition.verify_button_is_red_color_in_hex_da_f(String)"
});
formatter.result({
  "duration": 23983700,
  "status": "passed"
});
formatter.match({
  "location": "E_RemoveProdFromShopCartStepDefinition.user_click_on_RED_X_button_to_remove_item_from_the_cart()"
});
formatter.result({
  "duration": 54015000,
  "status": "passed"
});
formatter.match({
  "location": "E_RemoveProdFromShopCartStepDefinition.verify_Item_is_removed_from_the_cart()"
});
formatter.result({
  "duration": 759992200,
  "status": "passed"
});
formatter.after({
  "duration": 649561700,
  "status": "passed"
});
formatter.before({
  "duration": 5351531200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 4835300200,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "F) Add product to \u0027Wish List\u0027",
  "description": "",
  "id": "test-environment-scenarios;f)-add-product-to-\u0027wish-list\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 78,
  "name": "User clicks on \u0027Tablets\u0027 product Menu",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "User clicks on product \u0027Samsung Galaxy Tab 10.1\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Verify an \u0027Heart\u0027 icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "When user hover mouse over the Heart Icon it should show \u0027Add to Wish List\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User click on Heart icon",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "User see the message \u0027You must login or create an account to save Samsung Galaxy Tab 10.1 to your wish list!\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "User click  on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "Verify that Login sub-option in My Account menu and click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User enter username \u0027loro@gmail.com\u0027 and password \u0027loren123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User click on Menu \u0027Wish List\u0027 and user can see the added product",
  "keyword": "And "
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Tablets_product_Menu()"
});
formatter.result({
  "duration": 434912300,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 2394028500,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.verify_an_Heart_icon_is_present()"
});
formatter.result({
  "duration": 391626200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add to Wish List",
      "offset": 58
    }
  ],
  "location": "F_AddProductToWishListStepDefinition.when_user_hover_mouse_over_the_Heart_Icon_it_should_show_Add_to_Wish_List(String)"
});
formatter.result({
  "duration": 661691200,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Heart_icon()"
});
formatter.result({
  "duration": 47171400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You must login or create an account to save Samsung Galaxy Tab 10.1 to your wish list!",
      "offset": 22
    }
  ],
  "location": "F_AddProductToWishListStepDefinition.user_should_see_the_message_you_must_login_or_create_an_account_to_save_Samsung_Galaxy_Tab_to_your_wish_list(String)"
});
formatter.result({
  "duration": 550884900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3074953200,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 353249300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loro@gmail.com",
      "offset": 21
    },
    {
      "val": "loren123",
      "offset": 51
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 4502714500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 503195700,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Menu_Wish_List_and_user_can_see_the_added_product()"
});
formatter.result({
  "duration": 485527700,
  "status": "passed"
});
formatter.after({
  "duration": 666813800,
  "status": "passed"
});
formatter.before({
  "duration": 5569848400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2741071200,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "G) Remove Product From Wish List",
  "description": "",
  "id": "test-environment-scenarios;g)-remove-product-from-wish-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 92,
      "value": "#Unable to automate commented step as \"Are you sure\" message not present"
    }
  ],
  "line": 93,
  "name": "User clicks on \u0027Tablets\u0027 product Menu",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "User click on Heart icon",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Verify that Login sub-option in My Account menu and click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User enter username \u0027loro@gmail.com\u0027 and password \u0027loren123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "User click on Menu \u0027Wish List\u0027 and user can see the added product",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "User can see a Red X button for the product",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "User click on Red X button in Wish List",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 102,
      "value": "#And  User see \u0027Are you sure\u0027  message and select \u0027Yes\u0027"
    }
  ],
  "line": 103,
  "name": "Item should be removed from Wish List",
  "keyword": "And "
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Tablets_product_Menu()"
});
formatter.result({
  "duration": 419667700,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Heart_icon()"
});
formatter.result({
  "duration": 60585700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3054170300,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 361949400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loro@gmail.com",
      "offset": 21
    },
    {
      "val": "loren123",
      "offset": 51
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 4524539000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 799675000,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Menu_Wish_List_and_user_can_see_the_added_product()"
});
formatter.result({
  "duration": 473518100,
  "status": "passed"
});
formatter.match({
  "location": "G_RemoveProductFromWishListStepDefinition.user_can_see_a_Red_X_button_for_the_product()"
});
formatter.result({
  "duration": 384542500,
  "status": "passed"
});
formatter.match({
  "location": "G_RemoveProductFromWishListStepDefinition.user_click_on_Red_X_button_in_Wish_List()"
});
formatter.result({
  "duration": 832498000,
  "status": "passed"
});
formatter.match({
  "location": "G_RemoveProductFromWishListStepDefinition.item_should_be_removed_from_Wish_List()"
});
formatter.result({
  "duration": 28789200,
  "status": "passed"
});
formatter.after({
  "duration": 650838300,
  "status": "passed"
});
formatter.before({
  "duration": 5618740200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 3307163200,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "H) User should be able to change Currency of Product prices",
  "description": "",
  "id": "test-environment-scenarios;h)-user-should-be-able-to-change-currency-of-product-prices",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 108,
  "name": "User see Currency button on the left of the page",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "US Dollar Currency selected by default",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User click on Currency button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Verify Currency drop-down menu contains \u0027Euro\u0027, \u0027Pound Sterling\u0027 and \u0027US Dollar\u0027 options",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "User selects Pound Sterling currency",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "User clicks on \u0027Tablets\u0027 product Menu",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "User clicks on product \u0027Samsung Galaxy Tab 10.1\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "Verify Price of the Product in Pound Sterling",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User click on Heart icon",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "Verify that Login sub-option in My Account menu and click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "User enter username \u0027loro@gmail.com\u0027 and password \u0027loren123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "User click on Menu \u0027Wish List\u0027 and user can see the added product",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "Verify Price of the product in Pound Sterling in the Wish List",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "Verify that Logout sub-option is displayed in My Account drop-down menu",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User click on Logout",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "Verify that Login sub-option in My Account menu and click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "User enter username \u0027loro@gmail.com\u0027 and password \u0027loren123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User click on Menu \u0027Wish List\u0027 and user can see the added product",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "Verify Price of the product in Pound Sterling in the Wish List",
  "keyword": "And "
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.user_see_Currency_button_on_the_left_of_the_page()"
});
formatter.result({
  "duration": 433147800,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.us_Dollar_Currency_selected_by_default()"
});
formatter.result({
  "duration": 29391300,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.user_click_on_Currency_button()"
});
formatter.result({
  "duration": 44943000,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.verify_Currency_drop_down_menu_contains_Euro_Pound_Sterling_and_US_Dollar_options()"
});
formatter.result({
  "duration": 510866100,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.user_selects_Pound_Sterling_currency()"
});
formatter.result({
  "duration": 1002967200,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Tablets_product_Menu()"
});
formatter.result({
  "duration": 1429864700,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 1740697400,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.verify_Price_of_the_Product_in_Pound_Sterling()"
});
formatter.result({
  "duration": 405331100,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Heart_icon()"
});
formatter.result({
  "duration": 58801600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3073500300,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 682264900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loro@gmail.com",
      "offset": 21
    },
    {
      "val": "loren123",
      "offset": 51
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 4848567300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 532263700,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Menu_Wish_List_and_user_can_see_the_added_product()"
});
formatter.result({
  "duration": 535040800,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.verify_Price_of_the_product_in_Pound_Sterling_in_the_Wish_List()"
});
formatter.result({
  "duration": 899021900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3087880900,
  "status": "passed"
});
formatter.match({
  "location": "C_LogOutStepDefinition.verify_that_Logout_sub_option_is_displayed_in_My_Account_drop_down_menu()"
});
formatter.result({
  "duration": 381798000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Logout()"
});
formatter.result({
  "duration": 814852200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3054046600,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 328107200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loro@gmail.com",
      "offset": 21
    },
    {
      "val": "loren123",
      "offset": 51
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 4505805200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 487357200,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Menu_Wish_List_and_user_can_see_the_added_product()"
});
formatter.result({
  "duration": 432602000,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.verify_Price_of_the_product_in_Pound_Sterling_in_the_Wish_List()"
});
formatter.result({
  "duration": 356422900,
  "status": "passed"
});
formatter.after({
  "duration": 673070600,
  "status": "passed"
});
formatter.before({
  "duration": 5256614300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2841201500,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "I) Calculate total cost for Products in the Shopping Cart",
  "description": "",
  "id": "test-environment-scenarios;i)-calculate-total-cost-for-products-in-the-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 134,
  "name": "User clicks on \u0027Tablets\u0027 product Menu",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "User clicks on product \u0027Samsung Galaxy Tab 10.1\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "User clicks on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "User clicks on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "User click on \u0027Shopping Cart\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "Verify that same item not repeated in Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Verify Unit Price and Total columns are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Verify Total price should be the number equals Quantity times Unit Price",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Verify section \u0027What would you like to do next?\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Verify \u0027Use Coupon Code\u0027 section is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Verify \u0027Estimate Shipping \u0026 Taxes\u0027 section is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "Select shipping destination by selecting Shipping country \u0027United States\u0027, state \u0027North Carolina\u0027 and postCode \u002728277\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "User click get Quotes button",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Verify flat rate is displayed and check radio button to add shipping cost to total",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "User click Apply Shipping",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "Verify total price is calculated correctly including shipping cost",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "Verify checkout button displayed",
  "keyword": "And "
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Tablets_product_Menu()"
});
formatter.result({
  "duration": 573207800,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 1734146000,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 6101905200,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 6101328700,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 1020526700,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_that_same_item_not_repeated_in_Shopping_Cart()"
});
formatter.result({
  "duration": 3362748400,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_Unit_Price_and_Total_columns_are_displayed()"
});
formatter.result({
  "duration": 54847000,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_Total_price_should_be_the_number_equals_Quantity_times_Unit_Price()"
});
formatter.result({
  "duration": 6431533500,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_section_What_would_you_like_to_do_next_is_displayed()"
});
formatter.result({
  "duration": 345700700,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_Use_Coupon_Code_section_is_displayed()"
});
formatter.result({
  "duration": 30099500,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_Estimate_Shipping_Taxes_section_is_displayed()"
});
formatter.result({
  "duration": 25487700,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.select_shipping_destination_by_selecting_Shipping_country_State_and_Post_Code()"
});
formatter.result({
  "duration": 957722300,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.user_click_get_Quotes_button()"
});
formatter.result({
  "duration": 387674500,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_flat_rate_is_displayed_and_check_radio_button_to_add_shipping_cost_to_total()"
});
formatter.result({
  "duration": 67352800,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.user_click_Apply_Shipping()"
});
formatter.result({
  "duration": 55166000,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_total_price_is_calculated_correctly_including_shipping_cost()"
});
formatter.result({
  "duration": 566025500,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_checkout_button_displayed()"
});
formatter.result({
  "duration": 403340100,
  "status": "passed"
});
formatter.after({
  "duration": 667581600,
  "status": "passed"
});
});