import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import addEmployeePage from '../AddEmployee/addEmployeePage'
//import editEmployeePage from "./editEmployeePage";
import deleteEmployeePage from "./deleteEmployeePage";
import '../AddEmployee/addEmployeeSteps'
import '../EditEmployee/editEmployeeSteps'

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
        cy.wait(1000)
    })
})

When("I click delete button for the employee", () => {
       deleteEmployeePage.checkTheCheckboxForEmployee()
       deleteEmployeePage.deleteEmployee()
       
})

Then("the employee should be deleted", () => {
    deleteEmployeePage.elements.deletemessage().should('include.text','Successfully Deleted')
})