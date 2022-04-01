$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Selenium Training/IBM.BDD.TestAutomation/src/test/java/com/qa/DDT/AmazonDDT.feature");
formatter.feature({
  "line": 1,
  "name": "Validate amazon web site",
  "description": "",
  "id": "validate-amazon-web-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "validate search an item functionality",
  "description": "",
  "id": "validate-amazon-web-site;validate-search-an-item-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@RegressionalTest"
    },
    {
      "line": 7,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "select the category and itemname from sheet \"\u003cSheetName\u003e\" and rownumber \u003crowNum\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the magnifier button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "get the items published",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "validate-amazon-web-site;validate-search-an-item-functionality;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "rowNum"
      ],
      "line": 16,
      "id": "validate-amazon-web-site;validate-search-an-item-functionality;;1"
    },
    {
      "cells": [
        "Sheet1",
        "0"
      ],
      "line": 17,
      "id": "validate-amazon-web-site;validate-search-an-item-functionality;;2"
    },
    {
      "cells": [
        "Sheet1",
        "1"
      ],
      "line": 18,
      "id": "validate-amazon-web-site;validate-search-an-item-functionality;;3"
    },
    {
      "cells": [
        "Sheet1",
        "2"
      ],
      "line": 19,
      "id": "validate-amazon-web-site;validate-search-an-item-functionality;;4"
    },
    {
      "cells": [
        "Sheet1",
        "3"
      ],
      "line": 20,
      "id": "validate-amazon-web-site;validate-search-an-item-functionality;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 414400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch the browser and run URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the browser should be invoked",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the url should be loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDDTStepDef.the_browser_should_be_invoked()"
});
formatter.result({
  "duration": 88347418800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.the_url_should_be_loaded()"
});
formatter.result({
  "duration": 37818640000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "validate search an item functionality",
  "description": "",
  "id": "validate-amazon-web-site;validate-search-an-item-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@RegressionalTest"
    },
    {
      "line": 7,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "select the category and itemname from sheet \"Sheet1\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the magnifier button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "get the items published",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDDTStepDef.the_user_is_on_amazon_home_page()"
});
formatter.result({
  "duration": 107845900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sheet1",
      "offset": 45
    },
    {
      "val": "0",
      "offset": 67
    }
  ],
  "location": "AmazonDDTStepDef.select_the_category_and_itemname_from_sheet_and_rownumber(String,Integer)"
});
formatter.result({
  "duration": 2641779300,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.the_magnifier_button_is_clicked()"
});
formatter.result({
  "duration": 3910325500,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.get_the_items_published()"
});
formatter.result({
  "duration": 779370500,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.close_the_browser()"
});
formatter.result({
  "duration": 225677100,
  "status": "passed"
});
formatter.before({
  "duration": 163100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch the browser and run URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the browser should be invoked",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the url should be loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDDTStepDef.the_browser_should_be_invoked()"
});
formatter.result({
  "duration": 3467144400,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.the_url_should_be_loaded()"
});
formatter.result({
  "duration": 11962585600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "validate search an item functionality",
  "description": "",
  "id": "validate-amazon-web-site;validate-search-an-item-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@RegressionalTest"
    },
    {
      "line": 7,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "select the category and itemname from sheet \"Sheet1\" and rownumber 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the magnifier button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "get the items published",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDDTStepDef.the_user_is_on_amazon_home_page()"
});
formatter.result({
  "duration": 196186800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sheet1",
      "offset": 45
    },
    {
      "val": "1",
      "offset": 67
    }
  ],
  "location": "AmazonDDTStepDef.select_the_category_and_itemname_from_sheet_and_rownumber(String,Integer)"
});
formatter.result({
  "duration": 1061722400,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.the_magnifier_button_is_clicked()"
});
formatter.result({
  "duration": 3814293200,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.get_the_items_published()"
});
formatter.result({
  "duration": 1298388900,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.close_the_browser()"
});
formatter.result({
  "duration": 238778800,
  "status": "passed"
});
formatter.before({
  "duration": 138800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch the browser and run URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the browser should be invoked",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the url should be loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDDTStepDef.the_browser_should_be_invoked()"
});
formatter.result({
  "duration": 3375119300,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.the_url_should_be_loaded()"
});
formatter.result({
  "duration": 20769952400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "validate search an item functionality",
  "description": "",
  "id": "validate-amazon-web-site;validate-search-an-item-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@RegressionalTest"
    },
    {
      "line": 7,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "select the category and itemname from sheet \"Sheet1\" and rownumber 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the magnifier button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "get the items published",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDDTStepDef.the_user_is_on_amazon_home_page()"
});
formatter.result({
  "duration": 224163500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sheet1",
      "offset": 45
    },
    {
      "val": "2",
      "offset": 67
    }
  ],
  "location": "AmazonDDTStepDef.select_the_category_and_itemname_from_sheet_and_rownumber(String,Integer)"
});
formatter.result({
  "duration": 863332400,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.the_magnifier_button_is_clicked()"
});
formatter.result({
  "duration": 4128627500,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.get_the_items_published()"
});
formatter.result({
  "duration": 314631200,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.close_the_browser()"
});
formatter.result({
  "duration": 278864000,
  "status": "passed"
});
formatter.before({
  "duration": 171400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch the browser and run URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the browser should be invoked",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the url should be loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDDTStepDef.the_browser_should_be_invoked()"
});
formatter.result({
  "duration": 3355441200,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.the_url_should_be_loaded()"
});
formatter.result({
  "duration": 9529675800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "validate search an item functionality",
  "description": "",
  "id": "validate-amazon-web-site;validate-search-an-item-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@RegressionalTest"
    },
    {
      "line": 7,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "select the category and itemname from sheet \"Sheet1\" and rownumber 3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the magnifier button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "get the items published",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDDTStepDef.the_user_is_on_amazon_home_page()"
});
formatter.result({
  "duration": 155320200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sheet1",
      "offset": 45
    },
    {
      "val": "3",
      "offset": 67
    }
  ],
  "location": "AmazonDDTStepDef.select_the_category_and_itemname_from_sheet_and_rownumber(String,Integer)"
});
formatter.result({
  "duration": 868444000,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.the_magnifier_button_is_clicked()"
});
formatter.result({
  "duration": 7681620300,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.get_the_items_published()"
});
formatter.result({
  "duration": 558431100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonDDTStepDef.close_the_browser()"
});
formatter.result({
  "duration": 4248072400,
  "status": "passed"
});
});