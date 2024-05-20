import {
    Before,
    Given,
    When,
    And,
    Then,
  } from "cypress-cucumber-preprocessor/steps";

import loginPage from "./loginPage"

Given("Navigate to OrangeHRM",() =>{
   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When("I enter a username {string}",(username) =>{
   loginPage.typeUsername(username)
})
And("I enter a password {string}", (password) => {
    loginPage.typePassword(password)
})

When("I enter an empty username {string}",(username) =>{
    loginPage.typeEmptyUsername(username)
 })
 And("I enter an empty password {string}", (password) => {
     loginPage.typeEmptyPassword(password)
 })
And("I click on the login button", () => {
    loginPage.clickLogin()
})

Then("Dashboard page should open",() => {
    loginPage.verifyDashboardPageOpens()
})
Then("I should be presented with the following message {string}",(message) => {
    loginPage.getErrorMsg(message)
})

Then("I should be presented with the required message for username {string}",(message) => {
    loginPage.getEmptyUsenameMsg(message)
    
})
Then("I should be presented with the required message for password {string}",(message) => {
    
    loginPage.getEmptyPasswordMsg(message)
})

When("I click Forget password link",() => {
   loginPage.clickForgotPasswordBtn()
})

Then('Reset password box should display',() => {
    loginPage.verifyResetPasswordBoxDisplay()
})