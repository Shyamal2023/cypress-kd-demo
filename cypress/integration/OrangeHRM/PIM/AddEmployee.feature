Feature: Add New Employee

Scenario: Navigate to PIM
Given Login to OrangeHRM
Then Dashboard page is loaded
When I click on PIM in side panel
Then PIM page should display

Scenario: Navigate to Add Employee page
Given Login to OrangeHRM
When I click on PIM in side panel
Then PIM page should display
When I click on Add Employee tab
Then Add Employee Title should display

Scenario: Add new Employee
Given Login to OrangeHRM
When I click on PIM in side panel
When  I click on Add Employee tab
And I enter Employee Full name
Then New Employee should be added 

     

    