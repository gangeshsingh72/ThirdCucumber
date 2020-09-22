Feature: GetTitle

  Scenario Outline: Get Title page
    Given That I am a Chrome user
    When I am on "<Webpage>" Home page
    Then I can see "<Website>" on page title

  Examples:
    |Webpage|Website|
    |https://www.google.co.uk|Google|
    |https://www.HSBC.co.uk|HSBC|
    |https://www.debenhams.com|Debenhams|
    |https://www.Barclays.co.uk|Barclays|
    |https://www.amazon.co.uk|Amazon|
    |https://www.Next.co.uk|Next|
