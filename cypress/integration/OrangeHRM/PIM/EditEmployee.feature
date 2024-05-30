Feature: Edit Employee

Scenario: Edit employee id
Given Login to OrangeHRM
When I click on PIM in side panel
Then PIM page should display
When I navigate to Employee List tab
And I search with Employee ID 
Then searched employee should display
When I click on Edit button
Then Edit page should open that displays employee name
When I edit the first name
And Click Save
When I navigate to Employee List tab
And I search with Employee ID 
Then updated name should display


    