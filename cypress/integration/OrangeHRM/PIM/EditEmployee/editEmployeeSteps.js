import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import addEmployeePage from '../AddEmployee/addEmployeePage'
import '../AddEmployee/addEmployeeSteps'
import editEmployeePage from "./editEmployeePage";
import { click, verifyPageLoads } from "../../../common/util";

When("I navigate to Employee List tab", () => {
    addEmployeePage.navigateToEmployeeListTab()
})

And("I search with Employee ID", () => {
    cy.fixture('editEmployeeData').then((emp) => {
        
            editEmployeePage.searchByEmpID(emp.empID)
})
  
        })

Then("searched employee should display", () => {
    cy.fixture('editEmployeeData').then((emp) => {
    editEmployeePage.employeeDisplayedInSearchTable(emp.empID)
})
})

When("I click on Edit button", () => {
   
    editEmployeePage.clickEditButton()
})


Then("Edit page should open that displays employee name", () => {
    cy.fixture('editEmployeeData').then((emp) => {
    editEmployeePage.empNameDispayedOnEditPage(emp.name)
})

})

When("I edit the first name", () => {
    cy.fixture('editEmployeeData').then((emp) => {
        editEmployeePage.editFirstName(emp.editFirstName)
    })
    
    })

And("Click Save",() => {
    click(editEmployeePage.elements.saveButtonOnEditPage(), 'Save')
})

Then("updated name should display", () => {
    cy.fixture('editEmployeeData').then((emp) => {
    editEmployeePage.employeeDisplayedInSearchTable(emp.updatedName)
})
})

     
   