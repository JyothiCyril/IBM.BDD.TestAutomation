package com.qa.stepdefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import com.qa.pages.AmazonPages;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AmazonStepDefinition {
	@Before
	public void setUp() {
		System.out.println("Starting test...");
	}

	@After
	public void tearDown() {
		System.out.println("Stopping test...");
	}


	WebDriver driver;
	AmazonPages AmazonOR;

	@Given("^the browser should be invoked$")
	public void the_browser_should_be_invoked() {		
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		AmazonOR = new AmazonPages(driver);		
	}

	@Then("^the url should be loaded$")
	public void the_url_should_be_loaded() {
		driver.get("https://www.amazon.in/");		
	}

	@Given("^the user is on amazon home page$")
	public void the_user_is_on_amazon_home_page() {
		boolean contains = driver.getTitle().contains("Amazon");
		Assert.assertTrue(contains);
	}
	/*
	@Then("^select books as category$")
	public void select_books_as_category() {
		AmazonOR.getCategory().selectByVisibleText("Books");
	}

	@Then("^type da vinci code in the search field$")
	public void type_da_vinci_code_in_the_search_field() {
		AmazonOR.getSearchTxtField().sendKeys("Da vinci code"); 
	}*/



	@Then("^select the value \"([^\"]*)\" as category$")
	public void select_the_value_as_category(String Category) {
		AmazonOR.getCategory().selectByVisibleText(Category);
	}

	@Then("^type the valu as \"([^\"]*)\" in the search field$")
	public void type_the_valu_as_in_the_search_field(String ItemName){
		AmazonOR.getSearchTxtField().sendKeys(ItemName);
	}
	
	@When("^the magnifier button is clicked$")
	public void the_magnifier_button_is_clicked() {
		AmazonOR.getMagnifierBtn().click();
	}

	@Then("^get the items published$")
	public void get_the_items_published() {
		List<WebElement> allItems = AmazonOR.getAllItems();
		for(WebElement item:allItems) {
			System.out.println(item.getText());
		}
	}

	@Then("^close the browser$")
	public void close_the_browser() {
		driver.close();
	}

	@Then("^get all the footer links present on the page$")
	public void get_all_the_footer_links_present_on_the_page() {
		List<WebElement> AllLinks = AmazonOR.getfooterLinks();
		for(WebElement link:AllLinks) {
			System.out.println(link.getText());
		}
	}

	@When("^user has to mouseover on accountandlist$")
	public void user_has_to_mouseover_on_accountandlist() {
		Actions act =  new Actions(driver);
		WebElement ele = AmazonOR.getAccountsandLists();
		act.moveToElement(ele).build().perform();

	}

	@When("^click start here link$")
	public void click_start_here_link() {
		AmazonOR.getstarthereLink().click();
	}

	@Then("^check if the user is landed on registration page$")
	public void check_if_the_user_is_landed_on_registration_page() {
		boolean contains = driver.getCurrentUrl().contains("register");
		Assert.assertTrue(contains);
	}

	@Then("^type \"([^\"]*)\" as customer name$")
	public void type_as_customer_name(String customerName) throws InterruptedException {
		AmazonOR.getcustomerID().sendKeys(customerName);
		Thread.sleep(3000);
	}


	@Then("^type value in the as customer name$")
	public void type_value_in_the_as_customer_name(DataTable CustomerName) throws InterruptedException {

		List<String> values = CustomerName.asList(String.class);
		for(String name:values) {
			AmazonOR.getcustomerID().sendKeys(name);
			Thread.sleep(3000);
			AmazonOR.getcustomerID().clear();
		}

	}
}
