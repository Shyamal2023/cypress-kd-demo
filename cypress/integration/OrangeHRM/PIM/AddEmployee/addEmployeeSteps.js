import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import addEmployeePage from './addEmployeePage'
import { click, verifyPageLoads } from "../../../../integration/common/util";

Then("Dashboard page is loaded",() =>{
    verifyPageLoads(addEmployeePage.elements.dashboardTitle(), 'Dashboard')
})


When("I click on PIM in side panel",() => {
   click(addEmployeePage.elements.pimOption(), 'PIM')
})

Then("PIM page should display",() => {
   verifyPageLoads(addEmployeePage.elements.pimTitle(), 'PIM')
})

When("I click on Add Employee tab",() => {
    click(addEmployeePage.elements.addEmployeeTab(),'Add Employee')
})

Then("Add Employee Title should display", () =>{
   addEmployeePage.addEmployeeTitleIsDisplayed()
})

And("I enter Employee Full name", () => {
   cy.fixture('addEmployeeData').then((emp) => {
      emp.forEach((data) => {
         addEmployeePage.enterFirstName(data.firstName)
      addEmployeePage.enterMiddleName(data.middleName)
    
      addEmployeePage.enterLastName(data.lastName)
      addEmployeePage.enterEmpID(data.empID)
      click(addEmployeePage.elements.saveButton(),'Save')
      cy.wait(5000)
      addEmployeePage.elements.emplyoeeListTab().should('be.visible')
      click(addEmployeePage.elements.saveEmpList(),'Save')
      //.navigateToEmployeeListTab()
      //addEmployeePage.newEmployeeAddedSuccessfully(data.empID)
      click(addEmployeePage.elements.addEmployeeTab(),'Add Employee')
     
      });
      
   })
})


Then("New Employee should be added",() => {
 
   cy.fixture('addEmployeeData').then((emp) => {
      emp.forEach((data) => {
         addEmployeePage.navigateToEmployeeListTab()
      addEmployeePage.newEmployeeAddedSuccessfully(data.empID)
   
})
   })
})
