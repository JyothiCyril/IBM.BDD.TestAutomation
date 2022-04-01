package com.qa.testunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\Selenium Training\\IBM.BDD.TestAutomation\\src\\test\\java\\com\\qa\\DDT\\AmazonDDT.feature",
		glue="com.qa.DDT",
		dryRun=false,
		strict=true,
		monochrome=true,
		format= {"pretty","html:test-output"}
		//tags= {"~@End2EndTest","@RegressionalTest"}
		)

// @SmokeTest
// ~@SmokeTest
// "@SmokeTest,@End2EndTest"
// "@End2EndTest","@RegressionalTest"
//"~@End2EndTest","@RegressionalTest"
// "~@SmokeTest,@End2EndTest"
public class AmazonTestRunner {

}
