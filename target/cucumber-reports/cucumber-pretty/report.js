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
  "duration": 7118339900,
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
  "duration": 3043146000,
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
        "loren@gmail.com",
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
  "duration": 3073831400,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.if_register_option_is_displayed_user_click_on_register()"
});
formatter.result({
  "duration": 866665200,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_should_see_Register_Account_form()"
});
formatter.result({
  "duration": 407723400,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_should_see_Your_Personal_Details_section_with_fields_First_Name_Last_Name_E_Mail_Telephone()"
});
formatter.result({
  "duration": 127227300,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_should_see_Your_Password_section_Password_and_Password_Confirm()"
});
formatter.result({
  "duration": 76520000,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_fill_out_Register_form_with_information_below(DataTable)"
});
formatter.result({
  "duration": 418522500,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.verify_newsletter_section_present()"
});
formatter.result({
  "duration": 29403900,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.verify_No_Radio_button_is_selected_by_default()"
});
formatter.result({
  "duration": 395924900,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_selects_Yes_to_subscribe()"
});
formatter.result({
  "duration": 426090400,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.verify_Continue_button_is_displayed_on_bottom_of_the_form()"
});
formatter.result({
  "duration": 27319600,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.verify_check_box_I_have_read_and_agree_to_the_Privacy_Policy_next_to_Continue_button()"
});
formatter.result({
  "duration": 24696800,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.click_on_check_box()"
});
formatter.result({
  "duration": 394949600,
  "status": "passed"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.click_on_Continue_button()"
});
formatter.result({
  "duration": 650604600,
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
  "duration": 5376016600,
  "status": "passed"
});
formatter.after({
  "duration": 648737500,
  "status": "passed"
});
formatter.before({
  "duration": 5981880500,
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
  "duration": 3148073900,
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
  "name": "User enter username \u0027loren@gmail.com\u0027 and password \u0027loren123\u0027",
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
  "duration": 3059785700,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 378338200,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_Login_form_Returning_customer_is_displayed()"
});
formatter.result({
  "duration": 32700800,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_Email_and_Password_fields_are_present()"
});
formatter.result({
  "duration": 48023000,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_Login_button_is_displayed()"
});
formatter.result({
  "duration": 370584600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loren@gmail.com",
      "offset": 21
    },
    {
      "val": "loren123",
      "offset": 52
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 953853000,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_password_is_hidden_when_typed_in()"
});
formatter.result({
  "duration": 22765100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 502126900,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.user_is_directed_to_My_Account_page_once_logged_in()"
});
formatter.result({
  "duration": 382152200,
  "status": "passed"
});
formatter.after({
  "duration": 708194000,
  "status": "passed"
});
formatter.before({
  "duration": 5721850000,
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
  "duration": 2399701900,
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
  "name": "User enter username \u0027loren@gmail.com\u0027 and password \u0027loren123\u0027",
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
  "duration": 3056763900,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 318683400,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_Login_form_Returning_customer_is_displayed()"
});
formatter.result({
  "duration": 34325100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loren@gmail.com",
      "offset": 21
    },
    {
      "val": "loren123",
      "offset": 52
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 527915800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 534475900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3086402300,
  "status": "passed"
});
formatter.match({
  "location": "C_LogOutStepDefinition.verify_that_Logout_sub_option_is_displayed_in_My_Account_drop_down_menu()"
});
formatter.result({
  "duration": 407744600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Logout()"
});
formatter.result({
  "duration": 907274400,
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
  "duration": 382054200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3048491000,
  "status": "passed"
});
formatter.match({
  "location": "C_LogOutStepDefinition.verify_My_Account_menu_has_two_options_Register_Login()"
});
formatter.result({
  "duration": 52968300,
  "status": "passed"
});
formatter.after({
  "duration": 646765100,
  "status": "passed"
});
formatter.before({
  "duration": 5517006200,
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
  "duration": 3832166400,
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
  "duration": 434953800,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_should_see_list_of_products_for_that_category()"
});
formatter.result({
  "duration": 1717934500,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 1724823600,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_Add_to_Cart_button_is_appeared_in_the_product_details()"
});
formatter.result({
  "duration": 25373900,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 5104433900,
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
  "duration": 561322100,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 5115532900,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 419472300,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_tablet_in_the_shopping_cart()"
});
formatter.result({
  "duration": 24556500,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_that_same_item_not_repeated_in_Shopping_Cart()"
});
formatter.result({
  "duration": 3362721600,
  "status": "passed"
});
formatter.after({
  "duration": 682163200,
  "status": "passed"
});
formatter.before({
  "duration": 5983391200,
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
  "duration": 2972580000,
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
  "duration": 453211800,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 2621936500,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 5121134000,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 554525500,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_tablet_in_the_shopping_cart()"
});
formatter.result({
  "duration": 29143800,
  "status": "passed"
});
formatter.match({
  "location": "E_RemoveProdFromShopCartStepDefinition.user_should_be_able_to_see_a_RED_X_button_for_each_item()"
});
formatter.result({
  "duration": 511933600,
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
  "duration": 21797600,
  "status": "passed"
});
formatter.match({
  "location": "E_RemoveProdFromShopCartStepDefinition.user_click_on_RED_X_button_to_remove_item_from_the_cart()"
});
formatter.result({
  "duration": 51274900,
  "status": "passed"
});
formatter.match({
  "location": "E_RemoveProdFromShopCartStepDefinition.verify_Item_is_removed_from_the_cart()"
});
formatter.result({
  "duration": 755876000,
  "status": "passed"
});
formatter.after({
  "duration": 655536400,
  "status": "passed"
});
formatter.before({
  "duration": 6064853400,
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
  "duration": 2644571100,
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
  "name": "User enter username \u0027loren@gmail.com\u0027 and password \u0027loren123\u0027",
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
  "duration": 535915700,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 1409960000,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.verify_an_Heart_icon_is_present()"
});
formatter.result({
  "duration": 425076600,
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
  "duration": 2868671800,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Heart_icon()"
});
formatter.result({
  "duration": 43090400,
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
  "duration": 548199000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3083496100,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 351653800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loren@gmail.com",
      "offset": 21
    },
    {
      "val": "loren123",
      "offset": 52
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 653688200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 841177100,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Menu_Wish_List_and_user_can_see_the_added_product()"
});
formatter.result({
  "duration": 493158900,
  "status": "passed"
});
formatter.after({
  "duration": 647625900,
  "status": "passed"
});
formatter.before({
  "duration": 5850708800,
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
  "duration": 2598450600,
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
  "name": "User enter username \u0027loren@gmail.com\u0027 and password \u0027loren123\u0027",
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
  "duration": 627336000,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Heart_icon()"
});
formatter.result({
  "duration": 62288100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3063719000,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 367655000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loren@gmail.com",
      "offset": 21
    },
    {
      "val": "loren123",
      "offset": 52
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 682942000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 505512500,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Menu_Wish_List_and_user_can_see_the_added_product()"
});
formatter.result({
  "duration": 474808600,
  "status": "passed"
});
formatter.match({
  "location": "G_RemoveProductFromWishListStepDefinition.user_can_see_a_Red_X_button_for_the_product()"
});
formatter.result({
  "duration": 381519400,
  "status": "passed"
});
formatter.match({
  "location": "G_RemoveProductFromWishListStepDefinition.user_click_on_Red_X_button_in_Wish_List()"
});
formatter.result({
  "duration": 787302200,
  "status": "passed"
});
formatter.match({
  "location": "G_RemoveProductFromWishListStepDefinition.item_should_be_removed_from_Wish_List()"
});
formatter.result({
  "duration": 25624200,
  "status": "passed"
});
formatter.after({
  "duration": 643646800,
  "status": "passed"
});
formatter.before({
  "duration": 5872936000,
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
  "duration": 2884480400,
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
  "name": "User enter username \u0027loren@gmail.com\u0027 and password \u0027loren123\u0027",
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
  "name": "User enter username \u0027loren@gmail.com\u0027 and password \u0027loren123\u0027",
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
  "duration": 418946300,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.us_Dollar_Currency_selected_by_default()"
});
formatter.result({
  "duration": 27451200,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.user_click_on_Currency_button()"
});
formatter.result({
  "duration": 46300900,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.verify_Currency_drop_down_menu_contains_Euro_Pound_Sterling_and_US_Dollar_options()"
});
formatter.result({
  "duration": 1806445000,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.user_selects_Pound_Sterling_currency()"
});
formatter.result({
  "duration": 963345000,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Tablets_product_Menu()"
});
formatter.result({
  "duration": 441168900,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 1448693500,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.verify_Price_of_the_Product_in_Pound_Sterling()"
});
formatter.result({
  "duration": 433846600,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Heart_icon()"
});
formatter.result({
  "duration": 53864700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3052322400,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 348528100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loren@gmail.com",
      "offset": 21
    },
    {
      "val": "loren123",
      "offset": 52
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 1551761400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 472699600,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Menu_Wish_List_and_user_can_see_the_added_product()"
});
formatter.result({
  "duration": 455309500,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.verify_Price_of_the_product_in_Pound_Sterling_in_the_Wish_List()"
});
formatter.result({
  "duration": 546970700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3059090000,
  "status": "passed"
});
formatter.match({
  "location": "C_LogOutStepDefinition.verify_that_Logout_sub_option_is_displayed_in_My_Account_drop_down_menu()"
});
formatter.result({
  "duration": 374749600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Logout()"
});
formatter.result({
  "duration": 3495286200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3048485600,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 354204300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loren@gmail.com",
      "offset": 21
    },
    {
      "val": "loren123",
      "offset": 52
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 879335000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 506799000,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Menu_Wish_List_and_user_can_see_the_added_product()"
});
formatter.result({
  "duration": 430780900,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.verify_Price_of_the_product_in_Pound_Sterling_in_the_Wish_List()"
});
formatter.result({
  "duration": 384814800,
  "status": "passed"
});
formatter.after({
  "duration": 639845500,
  "status": "passed"
});
formatter.before({
  "duration": 6557236000,
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
  "duration": 2621733000,
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
  "duration": 413831500,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 1775127400,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 5117135700,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 5099554800,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 411395500,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_that_same_item_not_repeated_in_Shopping_Cart()"
});
formatter.result({
  "duration": 3358188100,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_Unit_Price_and_Total_columns_are_displayed()"
});
formatter.result({
  "duration": 53519500,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_Total_price_should_be_the_number_equals_Quantity_times_Unit_Price()"
});
formatter.result({
  "duration": 6404630100,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_section_What_would_you_like_to_do_next_is_displayed()"
});
formatter.result({
  "duration": 347350200,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_Use_Coupon_Code_section_is_displayed()"
});
formatter.result({
  "duration": 28411300,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_Estimate_Shipping_Taxes_section_is_displayed()"
});
formatter.result({
  "duration": 23905900,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.select_shipping_destination_by_selecting_Shipping_country_State_and_Post_Code()"
});
formatter.result({
  "duration": 1396490100,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.user_click_get_Quotes_button()"
});
formatter.result({
  "duration": 395463500,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_flat_rate_is_displayed_and_check_radio_button_to_add_shipping_cost_to_total()"
});
formatter.result({
  "duration": 69131400,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.user_click_Apply_Shipping()"
});
formatter.result({
  "duration": 53104500,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_total_price_is_calculated_correctly_including_shipping_cost()"
});
formatter.result({
  "duration": 493318600,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_checkout_button_displayed()"
});
formatter.result({
  "duration": 520687100,
  "status": "passed"
});
formatter.after({
  "duration": 661333200,
  "status": "passed"
});
});