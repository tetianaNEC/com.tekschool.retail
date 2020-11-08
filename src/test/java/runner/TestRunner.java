package runner;
import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;//start engine for the project
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(  //used to run test cases
		features ="classpath:Features", // Features tells cucumber options where feature files are stored
		glue = {"stepDefinitions"}, // glue tells cucumber options where all Step Definitions class and hooks are stored
		tags = {"@Test"},//we can run all scenarios or one scenario with help of tags; tilde ~ symbol will skip the scenario
		dryRun = false, // dryRun sets false will check if all steps in scenario has step definition
		monochrome = true, // if set to true, makes console output readable
		strict =false, // if set to false will fail the execution if there are any pending or undefined steps
		format = {"pretty", //used to specify the formatting options for the output reports		       
				"html:target/cucumber-reports/cucumber-pretty",
		        "json:target/cucumber-reports/CucumberTestReport.json",
		        "rerun:target/cucumber-reports/rerun.txt"},
		plugin = "json:target/cucumber-reports/CucumberTestReport.json"
		)
public class TestRunner {
}