import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import menuListPage from './menuListPage'
import { click, verifyPageLoads } from "../../../integration/common/util";

When("I click on Admin in side panel", () => {
  menuListPage.clickAdminMenu()
})
Then("Admin page should open", () => {
  menuListPage.verifyAdminPageLoads()
})

When("I click on PIM in side panel", () => {
  menuListPage.clickPIMMenu()
})
Then("PIM page should open", () => {
  menuListPage.verifyPIMPageLoads()
})

When("I click on Leave in side panel", () => {
  menuListPage.clickLeaveMenu()
})
Then("Leave page should open", () => {
  menuListPage.verifyLeavePageLoads()
})

When("I click on Leave in side panel", () => {
  menuListPage.clickLeaveMenu()
})
Then("Leave page should open", () => {
  menuListPage.verifyLeavePageLoads()
})

When("I click on Time in side panel", () => {
  click(menuListPage.elements.ele(), 'Time')
})

Then("Time page should open", () => {
  verifyPageLoads(menuListPage.elements.heading(), 'Time')
})

When("I click on Recruitment in side panel", () => {
  click(menuListPage.elements.ele(), 'Recruitment')
})

Then("Recruitment page should open", () => {
  verifyPageLoads(menuListPage.elements.heading(), 'Recruitment')
})

When("I click on My Info in side panel", () => {
  click(menuListPage.elements.ele(), 'My Info')
})

Then("My Info page should open", () => {
  verifyPageLoads(menuListPage.elements.heading(), 'PIM')
})

When("I click on Performance in side panel", () => {
  click(menuListPage.elements.ele(), 'Performance')
})

Then("Performance page should open", () => {
  verifyPageLoads(menuListPage.elements.heading(), 'Performance')
})

When("I click on Dashboard in side panel", () => {
  click(menuListPage.elements.ele(), 'Dashboard')
})

Then("Dashboard page should open", () => {
  verifyPageLoads(menuListPage.elements.heading(), 'Dashboard')
})