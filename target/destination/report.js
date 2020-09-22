$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetTitle.feature");
formatter.feature({
  "line": 1,
  "name": "GetTitle",
  "description": "",
  "id": "gettitle",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Get Title page",
  "description": "",
  "id": "gettitle;get-title-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "That I am a Chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on \"\u003cWebpage\u003e\" Home page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"\u003cWebsite\u003e\" on page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "gettitle;get-title-page;",
  "rows": [
    {
      "cells": [
        "Webpage",
        "Website"
      ],
      "line": 9,
      "id": "gettitle;get-title-page;;1"
    },
    {
      "cells": [
        "https://www.google.co.uk",
        "Google"
      ],
      "line": 10,
      "id": "gettitle;get-title-page;;2"
    },
    {
      "cells": [
        "https://www.HSBC.co.uk",
        "HSBC"
      ],
      "line": 11,
      "id": "gettitle;get-title-page;;3"
    },
    {
      "cells": [
        "https://www.debenhams.com",
        "Debenhams"
      ],
      "line": 12,
      "id": "gettitle;get-title-page;;4"
    },
    {
      "cells": [
        "https://www.Barclays.co.uk",
        "Barclays"
      ],
      "line": 13,
      "id": "gettitle;get-title-page;;5"
    },
    {
      "cells": [
        "https://www.amazon.co.uk",
        "Amazon"
      ],
      "line": 14,
      "id": "gettitle;get-title-page;;6"
    },
    {
      "cells": [
        "https://www.Next.co.uk",
        "Next"
      ],
      "line": 15,
      "id": "gettitle;get-title-page;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4158748063,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Get Title page",
  "description": "",
  "id": "gettitle;get-title-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "That I am a Chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on \"https://www.google.co.uk\" Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"Google\" on page title",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetTitle.that_I_am_a_Chrome_user()"
});
formatter.result({
  "duration": 279796896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.co.uk",
      "offset": 9
    }
  ],
  "location": "GetTitle.i_am_on_Home_page(String)"
});
formatter.result({
  "duration": 3463413396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google",
      "offset": 11
    }
  ],
  "location": "GetTitle.i_can_see_on_page_title(String)"
});
formatter.result({
  "duration": 113767803,
  "status": "passed"
});
formatter.after({
  "duration": 98848583,
  "status": "passed"
});
formatter.before({
  "duration": 2792039582,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Get Title page",
  "description": "",
  "id": "gettitle;get-title-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "That I am a Chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on \"https://www.HSBC.co.uk\" Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"HSBC\" on page title",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetTitle.that_I_am_a_Chrome_user()"
});
formatter.result({
  "duration": 40623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.HSBC.co.uk",
      "offset": 9
    }
  ],
  "location": "GetTitle.i_am_on_Home_page(String)"
});
formatter.result({
  "duration": 4540814326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HSBC",
      "offset": 11
    }
  ],
  "location": "GetTitle.i_can_see_on_page_title(String)"
});
formatter.result({
  "duration": 100957581,
  "status": "passed"
});
formatter.after({
  "duration": 90412320,
  "status": "passed"
});
formatter.before({
  "duration": 3307773813,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get Title page",
  "description": "",
  "id": "gettitle;get-title-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "That I am a Chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on \"https://www.debenhams.com\" Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"Debenhams\" on page title",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetTitle.that_I_am_a_Chrome_user()"
});
formatter.result({
  "duration": 47847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.debenhams.com",
      "offset": 9
    }
  ],
  "location": "GetTitle.i_am_on_Home_page(String)"
});
formatter.result({
  "duration": 6538026880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Debenhams",
      "offset": 11
    }
  ],
  "location": "GetTitle.i_can_see_on_page_title(String)"
});
formatter.result({
  "duration": 134996909,
  "status": "passed"
});
formatter.after({
  "duration": 105665783,
  "status": "passed"
});
formatter.before({
  "duration": 4547739079,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get Title page",
  "description": "",
  "id": "gettitle;get-title-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "That I am a Chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on \"https://www.Barclays.co.uk\" Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"Barclays\" on page title",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetTitle.that_I_am_a_Chrome_user()"
});
formatter.result({
  "duration": 64440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.Barclays.co.uk",
      "offset": 9
    }
  ],
  "location": "GetTitle.i_am_on_Home_page(String)"
});
formatter.result({
  "duration": 4758025785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Barclays",
      "offset": 11
    }
  ],
  "location": "GetTitle.i_can_see_on_page_title(String)"
});
formatter.result({
  "duration": 151049003,
  "status": "passed"
});
formatter.after({
  "duration": 100807431,
  "status": "passed"
});
formatter.before({
  "duration": 3616146058,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get Title page",
  "description": "",
  "id": "gettitle;get-title-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "That I am a Chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on \"https://www.amazon.co.uk\" Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"Amazon\" on page title",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetTitle.that_I_am_a_Chrome_user()"
});
formatter.result({
  "duration": 51793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.co.uk",
      "offset": 9
    }
  ],
  "location": "GetTitle.i_am_on_Home_page(String)"
});
formatter.result({
  "duration": 5149495196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon",
      "offset": 11
    }
  ],
  "location": "GetTitle.i_can_see_on_page_title(String)"
});
formatter.result({
  "duration": 148118448,
  "status": "passed"
});
formatter.after({
  "duration": 104700542,
  "status": "passed"
});
formatter.before({
  "duration": 4230316148,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get Title page",
  "description": "",
  "id": "gettitle;get-title-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "That I am a Chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on \"https://www.Next.co.uk\" Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"Next\" on page title",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetTitle.that_I_am_a_Chrome_user()"
});
formatter.result({
  "duration": 45770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.Next.co.uk",
      "offset": 9
    }
  ],
  "location": "GetTitle.i_am_on_Home_page(String)"
});
formatter.result({
  "duration": 10018057975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 11
    }
  ],
  "location": "GetTitle.i_can_see_on_page_title(String)"
});
formatter.result({
  "duration": 620933008,
  "status": "passed"
});
formatter.after({
  "duration": 107063768,
  "status": "passed"
});
});