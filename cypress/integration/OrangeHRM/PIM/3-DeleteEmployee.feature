
Feature: Delete Employee

Scenario: Delete employee id
Given Login to OrangeHRM
When I click on PIM in side panel
Then PIM page should display
When I navigate to Employee List tab
And I search with Employee ID 
Then searched employee should display
When I click delete button for the employee
Then the employee should be deleted