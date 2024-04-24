
Feature: Orangehrmlive Login Page

    Scenario: Login using valid credentails
        Given Navigate to OrangeHRM 
        When I enter a username "Admin"
        And I enter a password "admin123"
        And I click on the login button
        Then Dashboard page should open

    Scenario Outline: Login using invalid credentails
        Given Navigate to OrangeHRM 
        When I enter a username "<username>"
        And I enter a password "<password>"
        And I click on the login button
        Then I should be presented with the following message "<message>"

        Examples:
            | username   | password      | message             |
            | Admin      | admin155      | Invalid credentials |
            | Magda      | admin123      | Invalid credentials |
            | dummyAdmin | dummyPassword | Invalid credentials |
            | admin      | Admin123      | Invalid credentials |

    Scenario: Login using empty username credentails
        Given Navigate to OrangeHRM 
        When I enter a username "  "
        And I enter a password "admin123"
        And I click on the login button
        Then I should be presented with the required message for username "Required"

    
    Scenario: Login using empty password credentails
        Given Navigate to OrangeHRM 
        When I enter a username "Admin"
        And I enter a password " "
        And I click on the login button
        Then I should be presented with the required message for password "Required"

    @focus
    Scenario: Forget Passwrod button
    Given Navigate to OrangeHRM  
    When I click Forget password link
    Then Reset password box should display
       

 