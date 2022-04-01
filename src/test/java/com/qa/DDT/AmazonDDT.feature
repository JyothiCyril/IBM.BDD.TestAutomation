Feature: Validate amazon web site

  Background: Launch the browser and run URL
    Given the browser should be invoked
    Then the url should be loaded

  @RegressionalTest @End2EndTest
  Scenario Outline: validate search an item functionality
    Given the user is on amazon home page
    Then select the category and itemname from sheet "<SheetName>" and rownumber <rowNum>
    When the magnifier button is clicked
    Then get the items published
    Then close the browser

    Examples: 
      | SheetName | rowNum |
      | Sheet1    |      0 |
      | Sheet1    |      1 |
      | Sheet1    |      2 |
      | Sheet1    |      3 |