Feature: Group Management-Subspecialty

    Background:
        Given Login to Clario application "https://devtest2-clario.intelerad.com/TrunkSWL/login.php" with username "test_user" and password "Clario1234%"
        When I navigate to Management page
        Then Management page "https://devtest2-clario.intelerad.com/TrunkSWL/?manage" should load
        When I click Group Management button
        Then Group Management page should open
        When I click on Subspecialty tab
    

    @CL-364 
    Scenario: create new Subspecialty
        # Given Login to Clario application "https://devtest2-clario.intelerad.com/TrunkSWL/login.php" with username "test_user" and password "Clario1234%"
        # When I navigate to Management page
        # Then Management page "https://devtest2-clario.intelerad.com/TrunkSWL/?manage" should load
        # When I click Group Management button
        # Then Group Management page should open
        # When I click on Subspecialty tab
        And I click Create New Subspecialty button
        Then Create New Subspecialty form should open in right pane
        When I enter Subspecialty name "test-subspecialty-create" in Name field
        And I enter description "create new subspecialty-test" in the description field
        And I click Save button
        And I search subspecialty "test-subspecialty-create" in the list of subspecialties
        Then new Subspecialty "test-subspecialty-create" should be displayed

    @CL-172 
    Scenario: Edit Subspecialty
        # When I navigate to Management page
        # Then Management page "https://devtest2-clario.intelerad.com/TrunkSWL/?manage" should load
        # When I click Group Management button
        # Then Group Management page should open
        # When I click on Subspecialty tab
        And I search subspecialty "test-subspecialty-create" in the list of subspecialties
        And I select the subspecialty "test-subspecialty-create" to edit
        And I click the edit button
        And I update the name to "test-subspecialty-edit"
        And I click Save button
        And I clear the filter field
        And I search subspecialty "test-subspecialty-edit" in the list of subspecialties
        Then subspecialty should display in the list with updated name "test-subspecialty-edit"

    @CL-159
    Scenario: Delete Subspecialty
        And I search subspecialty "test-subspecialty-edit" in the list of subspecialties
        And I select the subspecialty "test-subspecialty-edit" to delete
        And I click the edit button
        And I click delete button
        Then window with title "Confirm" should open
        When I click Yes button in the Confirm window
        Then subspecialty "test-subspecialty-edit" should be deleted

    @CL-350 
    Scenario: Search/Filter Subspecialty
        And I click Create New Subspecialty button
        Then Create New Subspecialty form should open in right pane
        When I enter Subspecialty name "search-subspecialty" in Name field
        And I enter description "Testing-search-subspecialty" in the description field
        And I click Save button
        Then Filter field should be visible
        When I type Subspecialty name "search-subspecialty" in Filter field
        Then Subspecialty "search-subspecialty" should be filtered and displayed in the list
        Then I clear the Filter field
        When I type Subspecialty description "Testing-search-subspecialty" in the Filter field
        Then Subspecialty with description "Testing-search-subspecialty" should be filtered and displayed in the list

    @CL-328 
    Scenario Outline: Search/Filter Subspecialty with special characters
        And I click Create New Subspecialty button
        Then Create New Subspecialty form should open in right pane
        When I enter Subspecialty name "<name>" in Name field
        And I enter description "<description>" in the description field
        And I click Save button
        Then Filter field should be visible
        When I type Subspecialty name "<name>" in Filter field
        Then Subspecialty "<name>" should be filtered and displayed in the list
        Then I clear the Filter field
        When I type Subspecialty description "<description>" in the Filter field
        Then Subspecialty with description "<description>" should be filtered and displayed in the list

        Examples:
            | name                 | description                |
            | subspecialty_-46     | Testing-test5-subspecialty |
            | subspecialty -57     | testing test1_subspecialty |
            | clario  subspecialty | clario    subspecialty     |

    @CL-705
    Scenario: Paging works on Subspecialty Group
        Then Next page toggle button should be enabled
        When I click Next page toggle button
        Then Next page should load
        And Previous page toggle button should be enabled
        When I click Previous page toggle button
        Then Previous page should load
        And Last page toggle button should be enabled
        When I click Last page toggle button
        Then Last page should load
        And First page toggle button should be enabled
        When I click First page toggle button
        Then First page should load
        And Refresh button should be enabled
        When I click Refresh button
        Then the Subspecialty page should load

    @CL-790 
    Scenario: Subspecialty search on last page
        And I click Create New Subspecialty button
        Then Create New Subspecialty form should open in right pane
        When I enter Subspecialty name "Neuro CT-test" in Name field
        And I enter description "Neuro CT-testing" in the description field
        And I click Save button
        And I click Refresh button
        And Navigate to last page
        Then Last page should contain "Neuro CT-test" in the list of subspecialties
        Then Filter field should be visible
        When I type Subspecialty name "Neuro CT-test" from last page in Filter field
        Then Subspecialty "Neuro CT-test" should be filtered and displayed in the list

@CL-817  
Scenario: Rearrange the Subspecialty rank
    # And I click Create New Subspecialty button
    # Then Create New Subspecialty form should open in right pane
    # When I enter Subspecialty name "test-rank-sort" in Name field
    # And I enter description "test rank sort order" in the description field
    # And I click Save button
    When I click Edit Sort Order button
    Then Subspecialty page should open in edit mode
    When I drag subspecialty "test-rank-sort"
    # And I drop subspecialty "test-rank-sort" at rank 1
    # Then rank of subspecialty "test-rank-sort" should change to rank 1

@CL-117 @focus
Scenario: Empty Subspecialty search
Then Filter field should be visible
When I get the rowcount of the result table
#And  I enter space in the Filter field and search
#Then No changes are displayed in the results







