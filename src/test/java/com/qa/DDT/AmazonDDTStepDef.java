package com.qa.DDT;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;

import com.qa.pages.AmazonPages;
import com.qa.utility.ExcelReader;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AmazonDDTStepDef {
	WebDriver driver;
	AmazonPages AmazonOR;
	FileInputStream fileLoc;
	Properties prop;
	
	@Before
	public void setUp() throws IOException {
		fileLoc = new FileInputStream("D:\\Selenium Training\\IBM.BDD.TestAutomation\\src\\test\\java\\com\\qa\\testdata\\Utilities.properties");
		prop = new Properties();
		prop.load(fileLoc);
	}
	
	public void tearDown() throws IOException {
		fileLoc.close();
	}
	
	@Given("^the browser should be invoked$")
	public void the_browser_should_be_invoked() {
		String browser = prop.getProperty("Browser");
		
		if(browser.equalsIgnoreCase("Chrome")) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		}else if(browser.equalsIgnoreCase("Edge")) {
			WebDriverManager.edgedriver().setup();
			driver = new EdgeDriver();
		}
		
		AmazonOR = new AmazonPages(driver);
		driver.manage().window().maximize();
		
	}

	@Then("^the url should be loaded$")
	public void the_url_should_be_loaded() {
		driver.get(prop.getProperty("Url"));
	}

	@Given("^the user is on amazon home page$")
	public void the_user_is_on_amazon_home_page() {
		boolean contains = driver.getTitle().contains("Amazon");
		if(contains) {
			System.out.println("Title has Amazon keyword");
			Assert.assertTrue(contains);
		}else {
			System.out.println("Title doesn't have Amazon keyword");
			Assert.assertTrue(contains);
		}
	}

	@Then("^select the category and itemname from sheet \"([^\"]*)\" and rownumber (\\d+)$")
	public void select_the_category_and_itemname_from_sheet_and_rownumber(String SheetName, Integer rowNum) throws InvalidFormatException, IOException {
		
		ExcelReader reader = new ExcelReader();
		List<Map<String, String>> testdata = reader.getData("D:\\Selenium Training\\IBM.BDD.TestAutomation\\src\\test\\java\\com\\qa\\testdata\\TestData.xlsx", SheetName);
		String Category = testdata.get(rowNum).get("Category");
		String ItemName = testdata.get(rowNum).get("ItemName");		
		AmazonOR.getCategory().selectByVisibleText(Category);
		AmazonOR.getSearchTxtField().sendKeys(ItemName);
		
	}

	@When("^the magnifier button is clicked$")
	public void the_magnifier_button_is_clicked() {
		AmazonOR.getMagnifierBtn().click();
	}

	@Then("^get the items published$")
	public void get_the_items_published(){
		List<WebElement> allItems = AmazonOR.getAllItems();
		
		for(WebElement item : allItems) {
			System.out.println(item.getText());
		}
	}

	@Then("^close the browser$")
	public void close_the_browser() {
		driver.close();
	}



}
