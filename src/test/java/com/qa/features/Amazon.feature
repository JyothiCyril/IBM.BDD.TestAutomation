Feature: Validate amazon web site

  Background: Launch the browser and run URL
    Given the browser should be invoked
    Then the url should be loaded

  @RegressionalTest @End2EndTest
  Scenario Outline: validate search an item functionality
    Given the user is on amazon home page
    Then select the value "<Category>" as category
    And type the valu as "<ItemName>" in the search field
    When the magnifier button is clicked
    Then get the items published
    Then close the browser

    Examples: 
      | Category    | ItemName      |
      | Books       | Da Vinci Code |
      | Electronics | Mobile phones |
      | Furniture   | Wooden tables |

  @SmokeTest
  Scenario: validate footer links
    Given the user is on amazon home page
    Then get all the footer links present on the page
    Then close the browser

  @SmokeTest @End2EndTest
  Scenario: validate new user registration
    Given the user is on amazon home page
    When user has to mouseover on accountandlist
    And click start here link
    Then check if the user is landed on registration page
    Then type "King Blake" as customer name
    Then close the browser

  @RegressionalTest
  Scenario: validate new user for multiple inputs registration
    Given the user is on amazon home page
    When user has to mouseover on accountandlist
    And click start here link
    Then check if the user is landed on registration page
    Then type value in the as customer name
      | Kim Smith  |
      | Roger      |
      | King Blake |
    Then close the browser
