Feature: Clario exam testcase

Background: Before Each
    # this step in common
    Given Login to Clario application 
    And Launched Worklist application
    And User close the Shift pop up box

Scenario: CL-7520-Verify that Users are able to upload an image
    When Search an exam
    And User click on the search icon
    And Open an exam and go to Notes section
    And Verify Notes page is loaded
    And Select File Upload from Create drop down
    And Select File Type
    And Upload an image that is smaller
    Then Verify that the image is uploaded successfully