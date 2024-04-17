
Feature: Clario SWL Login

  I want to login Clario applications

  Scenario: A valid user can login SWL 50
    Given Clario application "https://devtest2-clario.intelerad.com/SWL50/" is launched
    When I login as user "atest"
    And I enter password "Clario1234%"
    And I click on login button
    Then "Clario - Home" page is loaded

 # Scenario: A valid user can login SWL 45
 #   Given Clario application "https://devtest2-clario.intelerad.com/45/" is launched
 #   When I login as user "admin"
 #   And I enter password "Clario1234%"
 #   And I click on login button
 #   Then "Clario - Home" page is loaded


#  Scenario: A valid user can login SaaS
#    Given Clario application "https://saas.clario.dev-clario.intelerad.com/" is launched
#    When I login as user "tester"
#    And I enter password "Clario1!"
#    And I click on login button
#    Then "Clario - Home" page is loaded
