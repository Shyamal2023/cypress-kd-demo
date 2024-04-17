 Feature: Analytics application valiadtion

 Scenario: User select modality for the widget
  Given Login to Clario application 
  Given Launched Analytics application
  When User click on the dashboard
  When User click on the Exam turnaround time widget
  When User click on the edit button
  When Type the modality name
  When Select the modality from the list
  When click on the save button
  When click on the edit button
  Then User verify the selected modality name
  Then User click on the delete button
  
Scenario: User delete the widget
  Given Login to Clario application 
  Given Launched Analytics application
  When User click on the dashboard
  When User click on the stacked turnaround time widget
  When User click on the edit button
  When User click on the delete button
  Then Verify stacked turnaound time widget is not available

Scenario: User validate the radiologist productivity widget
  Given Login to Clario application 
  Given Launched Analytics application
  When User click on the dashboard
  When Click on the radiologist productivity widget
  When User click on the edit button
  When Click on the include 
  When Select exam and credit option
  When click on the save button
  Then Validate the message for exam and credit option
  When User click on the edit button
  When Click on the include
  When Select credit option
  When click on the save button
  Then Validate the message for the credit option
  When User click on the edit button
  When User click on the delete button