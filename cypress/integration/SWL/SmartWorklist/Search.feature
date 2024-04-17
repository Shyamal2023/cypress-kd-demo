Feature: Clario Search testcase
Background: Before Each
    # this step in common
    Given Login to Clario application 
    And Launched Worklist application
    And User close the Shift pop up box

Scenario: CL-229-Quick Search using First Name and Last Name
    When click and enter firstname
    And click and enter lastname
    And User click on the quick search icon
    Then verify patient has been displayed  

Scenario: CL-357-Perform quick search on the applicable fields
    When click and enter firstname
    And click and enter lastname
    And click and enter mrn
    And click and enter accession no
    And click and enter site
    And User click on the quick search icon
    Then verify patient has been displayed

Scenario: CL-1030-Worklist - Quick Search wildcard characters
    When click and enter firstname with wildcard characters
    And click and enter lastname with wildcard characters
    And click and enter mrn with wildcard characters
    And click and enter accession no with wildcard characters
    And click and enter site
    And User click on the quick search icon
    Then verify patient has been displayed that satisfied wildcard characters



