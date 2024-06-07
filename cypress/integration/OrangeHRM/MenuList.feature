Feature: Orangehrmlive Menu after login

 Scenario: Admin page should load successfully
        Given Login to OrangeHRM
        When I click on Admin in side panel
        Then  Admin page should open

Scenario: PIM page should load successfully
        Given Login to OrangeHRM
        When I click on PIM in side panel
        Then  PIM page should open

Scenario: Leave page should load successfully
        Given Login to OrangeHRM
        When I click on Leave in side panel
        Then  Leave page should open

#Scenario: Time page should load successfully
       # Given Login to OrangeHRM
        #When I click on Time in side panel
        #Then Time page should open

Scenario: Recruitment page should load successfully
        Given Login to OrangeHRM
        When I click on Recruitment in side panel
        Then Recruitment page should open

Scenario: My Info page should load successfully
        Given Login to OrangeHRM
        When I click on My Info in side panel
        Then My Info page should open

Scenario: Performance page should load successfully
        Given Login to OrangeHRM
        When I click on Performance in side panel
        Then Performance page should open
    
Scenario: Dashboard page should load successfully
        Given Login to OrangeHRM
        When I click on Dashboard in side panel
        Then Dashboard page should open