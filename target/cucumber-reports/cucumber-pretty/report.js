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
  "duration": 8466384600,
  "error_message": "org.openqa.selenium.WebDriverException: Access is denied. (os error 5)\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-RSTO0AN\u0027, ip: \u0027192.168.86.26\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: \r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat stepDefinitions.Initializer.beforeHooks(Initializer.java:41)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
        "karen@gmail.com",
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
  "status": "skipped"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.if_register_option_is_displayed_user_click_on_register()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_should_see_Register_Account_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_should_see_Your_Personal_Details_section_with_fields_First_Name_Last_Name_E_Mail_Telephone()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_should_see_Your_Password_section_Password_and_Password_Confirm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_fill_out_Register_form_with_information_below(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.verify_newsletter_section_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.verify_No_Radio_button_is_selected_by_default()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.user_selects_Yes_to_subscribe()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.verify_Continue_button_is_displayed_on_bottom_of_the_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.verify_check_box_I_have_read_and_agree_to_the_Privacy_Policy_next_to_Continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.click_on_check_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "A_RegisterAccountStepDefinition.click_on_Continue_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 102400,
  "error_message": "java.lang.NullPointerException\r\n\tat core.Base.tearDown(Base.java:102)\r\n\tat stepDefinitions.Initializer.afterHooks(Initializer.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 31169030300,
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
  "duration": 6666121400,
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
  "name": "User enter username \u0027karen@gmail.com\u0027 and password \u0027loren123\u0027",
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
  "duration": 3605834600,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 410052000,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_Login_form_Returning_customer_is_displayed()"
});
formatter.result({
  "duration": 31892400,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_Email_and_Password_fields_are_present()"
});
formatter.result({
  "duration": 49409500,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_Login_button_is_displayed()"
});
formatter.result({
  "duration": 24048400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karen@gmail.com",
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
  "duration": 4478060800,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_password_is_hidden_when_typed_in()"
});
formatter.result({
  "duration": 23604700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 489996500,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.user_is_directed_to_My_Account_page_once_logged_in()"
});
formatter.result({
  "duration": 119986500,
  "status": "passed"
});
formatter.after({
  "duration": 1917697900,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-RSTO0AN\u0027, ip: \u0027192.168.86.26\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 81.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20201012085804, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 20972, moz:profile: C:\\Users\\tetiana\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 108080a2-537f-492a-9347-fd03919e6c76\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:496)\r\n\tat core.Base.tearDown(Base.java:103)\r\n\tat stepDefinitions.Initializer.afterHooks(Initializer.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 5924318800,
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
  "duration": 3614797000,
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
  "name": "User enter username \u0027karen@gmail.com\u0027 and password \u0027loren123\u0027",
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
  "duration": 3254356100,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 3064230800,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_Login_form_Returning_customer_is_displayed()"
});
formatter.result({
  "duration": 44178400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karen@gmail.com",
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
  "duration": 4204808900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 462780800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3239052800,
  "status": "passed"
});
formatter.match({
  "location": "C_LogOutStepDefinition.verify_that_Logout_sub_option_is_displayed_in_My_Account_drop_down_menu()"
});
formatter.result({
  "duration": 125590900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Logout()"
});
formatter.result({
  "duration": 562334200,
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
  "duration": 116074800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3249919100,
  "status": "passed"
});
formatter.match({
  "location": "C_LogOutStepDefinition.verify_My_Account_menu_has_two_options_Register_Login()"
});
formatter.result({
  "duration": 61363100,
  "status": "passed"
});
formatter.after({
  "duration": 2401326600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-RSTO0AN\u0027, ip: \u0027192.168.86.26\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 81.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20201012085804, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 16824, moz:profile: C:\\Users\\tetiana\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 692edd3c-94c3-4212-a91e-1d41620c7cce\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:496)\r\n\tat core.Base.tearDown(Base.java:103)\r\n\tat stepDefinitions.Initializer.afterHooks(Initializer.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 6277469300,
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
  "duration": 3620026100,
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
  "duration": 583326000,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_should_see_list_of_products_for_that_category()"
});
formatter.result({
  "duration": 131650000,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 1650471600,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_Add_to_Cart_button_is_appeared_in_the_product_details()"
});
formatter.result({
  "duration": 31036700,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 6288957500,
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
  "duration": 119920800,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 6264988800,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 412916600,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_tablet_in_the_shopping_cart()"
});
formatter.result({
  "duration": 54936900,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_that_same_item_not_repeated_in_Shopping_Cart()"
});
formatter.result({
  "duration": 3117650400,
  "status": "passed"
});
formatter.after({
  "duration": 1469000300,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-RSTO0AN\u0027, ip: \u0027192.168.86.26\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 81.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20201012085804, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 24876, moz:profile: C:\\Users\\tetiana\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 915f0ef4-90e3-4eb2-81db-2bb1bfea44ef\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:496)\r\n\tat core.Base.tearDown(Base.java:103)\r\n\tat stepDefinitions.Initializer.afterHooks(Initializer.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 5284458000,
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
  "duration": 3470961600,
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
  "duration": 432879900,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 1598884100,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 6282536800,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 415796000,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_tablet_in_the_shopping_cart()"
});
formatter.result({
  "duration": 58637800,
  "status": "passed"
});
formatter.match({
  "location": "E_RemoveProdFromShopCartStepDefinition.user_should_be_able_to_see_a_RED_X_button_for_each_item()"
});
formatter.result({
  "duration": 237765100,
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
  "duration": 15715500,
  "status": "passed"
});
formatter.match({
  "location": "E_RemoveProdFromShopCartStepDefinition.user_click_on_RED_X_button_to_remove_item_from_the_cart()"
});
formatter.result({
  "duration": 471306800,
  "status": "passed"
});
formatter.match({
  "location": "E_RemoveProdFromShopCartStepDefinition.verify_Item_is_removed_from_the_cart()"
});
formatter.result({
  "duration": 182841900,
  "status": "passed"
});
formatter.after({
  "duration": 2001432600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-RSTO0AN\u0027, ip: \u0027192.168.86.26\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 81.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20201012085804, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 2400, moz:profile: C:\\Users\\tetiana\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2aa4d2ed-8bfc-4b97-af47-b64983f0a52a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:496)\r\n\tat core.Base.tearDown(Base.java:103)\r\n\tat stepDefinitions.Initializer.afterHooks(Initializer.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 6229577200,
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
  "duration": 3383569100,
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
  "name": "User enter username \u0027karen@gmail.com\u0027 and password \u0027loren123\u0027",
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
  "duration": 479798900,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 1619580800,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.verify_an_Heart_icon_is_present()"
});
formatter.result({
  "duration": 147897800,
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
  "duration": 320836300,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Heart_icon()"
});
formatter.result({
  "duration": 224764600,
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
  "duration": 129235900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3234249800,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 604200300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karen@gmail.com",
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
  "duration": 4192738900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1090683900,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Menu_Wish_List_and_user_can_see_the_added_product()"
});
formatter.result({
  "duration": 464512400,
  "status": "passed"
});
formatter.after({
  "duration": 2257216700,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-RSTO0AN\u0027, ip: \u0027192.168.86.26\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 81.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20201012085804, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 24264, moz:profile: C:\\Users\\tetiana\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 78cb7426-1540-432b-9622-b106b57cc004\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:496)\r\n\tat core.Base.tearDown(Base.java:103)\r\n\tat stepDefinitions.Initializer.afterHooks(Initializer.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 4717509000,
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
  "duration": 4148929600,
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
  "name": "User enter username \u0027karen@gmail.com\u0027 and password \u0027loren123\u0027",
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
  "duration": 525971000,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Heart_icon()"
});
formatter.result({
  "duration": 237122100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3235777700,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 350850400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karen@gmail.com",
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
  "duration": 4256615700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 501487700,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Menu_Wish_List_and_user_can_see_the_added_product()"
});
formatter.result({
  "duration": 452942100,
  "status": "passed"
});
formatter.match({
  "location": "G_RemoveProductFromWishListStepDefinition.user_can_see_a_Red_X_button_for_the_product()"
});
formatter.result({
  "duration": 118436900,
  "status": "passed"
});
formatter.match({
  "location": "G_RemoveProductFromWishListStepDefinition.user_click_on_Red_X_button_in_Wish_List()"
});
formatter.result({
  "duration": 774961600,
  "status": "passed"
});
formatter.match({
  "location": "G_RemoveProductFromWishListStepDefinition.item_should_be_removed_from_Wish_List()"
});
formatter.result({
  "duration": 25970600,
  "status": "passed"
});
formatter.after({
  "duration": 1904796700,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-RSTO0AN\u0027, ip: \u0027192.168.86.26\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 81.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20201012085804, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 8380, moz:profile: C:\\Users\\tetiana\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0e18e579-1919-43a1-a47b-487be185eabb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:496)\r\n\tat core.Base.tearDown(Base.java:103)\r\n\tat stepDefinitions.Initializer.afterHooks(Initializer.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 5168459600,
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
  "duration": 3508177600,
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
  "name": "User enter username \u0027karen@gmail.com\u0027 and password \u0027loren123\u0027",
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
  "name": "User enter username \u0027karen@gmail.com\u0027 and password \u0027loren123\u0027",
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
  "duration": 181626100,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.us_Dollar_Currency_selected_by_default()"
});
formatter.result({
  "duration": 24022500,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.user_click_on_Currency_button()"
});
formatter.result({
  "duration": 237620000,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.verify_Currency_drop_down_menu_contains_Euro_Pound_Sterling_and_US_Dollar_options()"
});
formatter.result({
  "duration": 210687800,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.user_selects_Pound_Sterling_currency()"
});
formatter.result({
  "duration": 700300800,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Tablets_product_Menu()"
});
formatter.result({
  "duration": 819773800,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 2110257300,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.verify_Price_of_the_Product_in_Pound_Sterling()"
});
formatter.result({
  "duration": 137441600,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Heart_icon()"
});
formatter.result({
  "duration": 241274100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3242274900,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 439201300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karen@gmail.com",
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
  "duration": 4221492200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 512152800,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Menu_Wish_List_and_user_can_see_the_added_product()"
});
formatter.result({
  "duration": 433392100,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.verify_Price_of_the_product_in_Pound_Sterling_in_the_Wish_List()"
});
formatter.result({
  "duration": 94054800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3235090200,
  "status": "passed"
});
formatter.match({
  "location": "C_LogOutStepDefinition.verify_that_Logout_sub_option_is_displayed_in_My_Account_drop_down_menu()"
});
formatter.result({
  "duration": 115587400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Logout()"
});
formatter.result({
  "duration": 525826400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3260341500,
  "status": "passed"
});
formatter.match({
  "location": "B_LoginStepDefinition.verify_that_Login_sub_option_in_My_Account_menu_and_click_on_Login()"
});
formatter.result({
  "duration": 329768000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karen@gmail.com",
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
  "duration": 4176276000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 519819500,
  "status": "passed"
});
formatter.match({
  "location": "F_AddProductToWishListStepDefinition.user_click_on_Menu_Wish_List_and_user_can_see_the_added_product()"
});
formatter.result({
  "duration": 426290700,
  "status": "passed"
});
formatter.match({
  "location": "H_ChangeCurrencyStepDefinition.verify_Price_of_the_product_in_Pound_Sterling_in_the_Wish_List()"
});
formatter.result({
  "duration": 194303200,
  "status": "passed"
});
formatter.after({
  "duration": 2016653600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-RSTO0AN\u0027, ip: \u0027192.168.86.26\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 81.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20201012085804, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 7972, moz:profile: C:\\Users\\tetiana\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6b59d2e3-74ef-438d-b183-ec2d7a26d7c6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:496)\r\n\tat core.Base.tearDown(Base.java:103)\r\n\tat stepDefinitions.Initializer.afterHooks(Initializer.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 6225992400,
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
  "duration": 3439643500,
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
  "duration": 417792100,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_product_Samsung_Galaxy_Tab()"
});
formatter.result({
  "duration": 1568071800,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 6278815000,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_clicks_on_Add_to_Cart_button_two_times()"
});
formatter.result({
  "duration": 6263493000,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.user_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 424784900,
  "status": "passed"
});
formatter.match({
  "location": "D_AddProdToShopCartStepDefinition.verify_that_same_item_not_repeated_in_Shopping_Cart()"
});
formatter.result({
  "duration": 3115863600,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_Unit_Price_and_Total_columns_are_displayed()"
});
formatter.result({
  "duration": 46545200,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_Total_price_should_be_the_number_equals_Quantity_times_Unit_Price()"
});
formatter.result({
  "duration": 6136942800,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_section_What_would_you_like_to_do_next_is_displayed()"
});
formatter.result({
  "duration": 106550600,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_Use_Coupon_Code_section_is_displayed()"
});
formatter.result({
  "duration": 20934300,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_Estimate_Shipping_Taxes_section_is_displayed()"
});
formatter.result({
  "duration": 21909700,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.select_shipping_destination_by_selecting_Shipping_country_State_and_Post_Code()"
});
formatter.result({
  "duration": 920943800,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.user_click_get_Quotes_button()"
});
formatter.result({
  "duration": 313733600,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_flat_rate_is_displayed_and_check_radio_button_to_add_shipping_cost_to_total()"
});
formatter.result({
  "duration": 229254500,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.user_click_Apply_Shipping()"
});
formatter.result({
  "duration": 465482000,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_total_price_is_calculated_correctly_including_shipping_cost()"
});
formatter.result({
  "duration": 40114800,
  "status": "passed"
});
formatter.match({
  "location": "I_CalculateTotalCostStepDefinition.verify_checkout_button_displayed()"
});
formatter.result({
  "duration": 118232000,
  "status": "passed"
});
formatter.after({
  "duration": 2176151000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-RSTO0AN\u0027, ip: \u0027192.168.86.26\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 81.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20201012085804, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 24720, moz:profile: C:\\Users\\tetiana\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 59610d3b-b49c-49be-aa4f-ac6ad6c905b8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:496)\r\n\tat core.Base.tearDown(Base.java:103)\r\n\tat stepDefinitions.Initializer.afterHooks(Initializer.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
});