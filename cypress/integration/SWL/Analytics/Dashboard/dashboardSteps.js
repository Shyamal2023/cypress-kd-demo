import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import dashboardPage from "./dashboardPage";

Given('Launched Analytics application',()=>{
    dashboardPage.AnalyticsApps();
})

When('User click on the dashboard',()=>{
    dashboardPage.clickOnDashboard();
})

When('User click on the Exam turnaround time widget',()=>{
    dashboardPage.clickOnTheExamTurnaroundTime();
})

When('User click on the edit button',()=>{
    dashboardPage.clickOnEditButton();
})

When('Type the modality name',()=>{
   dashboardPage.selectModality();
})

When('Select the modality from the list',()=>{
    dashboardPage.selectModalityName();
})

When('click on the save button',()=>{
    dashboardPage.clickOnSaveButton();
})

When('click on the edit button',()=>{
    dashboardPage.clickOnEditButton();
})

Then('User verify the selected modality name',()=>{
    dashboardPage.dbElements.modalityValue().should('be.visible');
})

When('User click on the delete button',()=>{
    dashboardPage.clickOnDeleteButton();
})

When('User click on the stacked turnaround time widget',()=>{
    dashboardPage.clickOnStackedTurnaroundTime();
})

Then('Verify stacked turnaound time widget is not available',()=>{
    dashboardPage.dbElements.editButton().should('have.length',0);
})

When('Click on the radiologist productivity widget',()=>{
    dashboardPage.clickOnRadiologistProd();
    cy.wait(2000);
})

When('Click on the include',()=>{
    dashboardPage.clickOnInclude();
})

When('Select exam and credit option',()=>{
    dashboardPage.selectExamAndCredit();
})

Then('Validate the message for exam and credit option',()=>{
    dashboardPage.validateMessage();
})

When('Select credit option',()=>{
    dashboardPage.selectCredit();
})

Then('Validate the message for the credit option',()=>{
    dashboardPage.validateMessage();
})
