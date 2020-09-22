package StepDefinitions;

import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.net.URL;

public class GetTitle {

    public static WebDriver driver;

    @Given("^That I am a Chrome user$")
    public void that_I_am_a_Chrome_user() {
        // Write code here that turns the phrase above into concrete actions

    }

    @When("^I am on \"([^\"]*)\" Home page$")
    public void i_am_on_Home_page(String Webpage) {
        // Write code here that turns the phrase above into concrete actions
  //      System.setProperty("webdriver.chrome.driver","src/test/java/Utilities/chromedriver");
        driver = new ChromeDriver();
        driver.get(Webpage);

    }

    @Then("^I can see \"([^\"]*)\" on page title$")
    public void i_can_see_on_page_title(String Website) {
        // Write code here that turns the phrase above into con crete actions
//        Assert.assertEquals(driver.getTitle(),Website);
//          Assert.assertEquals(driver.getTitle().contains(Website));
          Assert.assertTrue(driver.getTitle().contains(Website));
        driver.quit();

    }


/*
    public static WebDriver driver;

    @Given("^I am on \"([^\"]*)\" Home page$")
    public void i_am_on_Home_page(String Webpage)  {
        // Write code here that turns the phrase above into concrete actions

        System.setProperty("webdriver.chrome.driver","src/test/java/Utilities/chromedriver");
        driver = new ChromeDriver();
        driver.get(Webpage);
    }

    @When("^I am on \"([^\"]*)\" Home page$")
    public void i_access_the_site() {
        // Write code here that turns the phrase above into concrete actions
    }

    @Then("^I see \"([^\"]*)\" on page title$")
    public void i_see_on_page_title(String Website)  {
        // Write code here that turns the phrase above into concrete actions

        Assert.assertEquals(driver.getTitle(),Website);
        driver.quit();
      //  driver.quit();

    }
*/


}
