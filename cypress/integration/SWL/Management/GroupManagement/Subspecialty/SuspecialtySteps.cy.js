import {Given, When, Then, And, Before, After} from "cypress-cucumber-preprocessor/steps";
import SubspecialtyPage from "./SubspecialtyPage";
import { should } from "chai";
const subspecialty = new SubspecialtyPage();
const homePage = 'https://devtest2-clario.intelerad.com/TrunkSWL/?home'

When('I navigate to Management page',() => {
    subspecialty.navigateManagementPage()
})

Then('Management page {string} should load',(url) => {
    cy.url().should('contain',url) 
})

When('I click Group Management button',() => {
    subspecialty.clickGroupManagement()
})

Then('Group Management page should open',()=>{
    subspecialty.validateGroupManagementPageOpen()
})

When('I click on Subspecialty tab',()=>{

    subspecialty.clickSubspecialtyTab()
    
})

//Create new subspecialty

And("I click Create New Subspecialty button",() => {
    subspecialty.clickCreateNewSubspecialtyButton()
      
})

Then('Create New Subspecialty form should open in right pane',() =>{
    subspecialty.elements.create_new_subspecialty_label().should('have.text','Create New Subspecialty')
      
})
When('I enter Subspecialty name {string} in Name field',(name) =>{
    subspecialty.enterSubspecialtyName(name)
    
})

And('I enter description {string} in the description field',(description) =>{
    subspecialty.enterSubspecialtyDescription(description)
})

And('I click Save button',() =>{
    subspecialty.clickSaveButton()
    
     })

And('I search subspecialty {string} in the list of subspecialties',(name) => {
    subspecialty.searchSubspecialty(name)
})

Then("new Subspecialty {string} should be displayed", (name) => {
    subspecialty.elements.subspecialty_table().contains('td',name)
    .should('be.visible')
    
})    

//edit newsubspecialty
And('I select the subspecialty {string} to edit',(name) => {
    subspecialty.selectSubspecialtyFromList(name)
 })

And('I click the edit button',() =>{
   subspecialty.clickEditButton()
})

And('I update the name to {string}', (name) =>{
    subspecialty.updateSubspecialtyName(name)
})

And('I clear the filter field',() =>{
subspecialty.clearFilterField()    
})

Then('subspecialty should display in the list with updated name {string}',(name) => {
    subspecialty.elements.subspecialty_table().contains('td',name)
    .should('be.visible')
})

//CL-159: Delete subspecialty
And('I select the subspecialty {string} to delete',(name) => {
    subspecialty.selectSubspecialtyFromList(name)
})

And('I click delete button',() => {
    subspecialty.clickDeleteButton()
})

Then('window with title {string} should open', (name) => {
    subspecialty.elements.confirm_dialogBox_title().should('have.text',name)
})
 
When('I click Yes button in the Confirm window', () => {
    subspecialty.clickYesInConfirmWindow()
})

Then('subspecialty {string} should be deleted',(name) => {
    subspecialty.elements.subspecialty_table().contains(name).should('not.exist')
})

//CL-350 and CL-328 - Search/Filter Subspecialty
Then("Filter field should be visible",() => {
    subspecialty.verifyFilterFieldIsDisplayed()
})

When("I type Subspecialty name {string} in Filter field",(name) => {
    subspecialty.enterSubspecialtyInSearchFilter(name)
})

Then("Subspecialty {string} should be filtered and displayed in the list",(name) => {
    subspecialty.searchResultForSubspecialty(name)

})

When("I clear the Filter field",() =>{
    subspecialty.clearFilterField()
})

When("I type Subspecialty description {string} in the Filter field",(description) => {
    subspecialty.enterSubspecialtyDescriptionInSearchFilter(description)
})

Then("Subspecialty with description {string} should be filtered and displayed in the list",(description) => {
    subspecialty.searchResultForSubspecialtyDescription(description)
})

//CL-705
Then("Next page toggle button should be enabled", () => {
    subspecialty.verifyNextPageButtonIsEnabled()
})

When("I click Next page toggle button", () => {
    subspecialty.clickNextPageButton()
})
Then("Next page should load", () => {
    subspecialty.verifyNextSubspecialtyPageLoads()
})

And("Previous page toggle button should be enabled", () => {
    subspecialty.verifyPreviousPageButtonIsEnabled()
})

When("I click Previous page toggle button", () => {
    subspecialty.clickPreviousPageButton()
}) 
    
Then("Previous page should load", () => {
   subspecialty.verifyPreviousSubspecialtyPageLoads()
}) 

And("Last page toggle button should be enabled", () => {
    subspecialty.verifyLastPageButtonIsEnabled()
})

When("I click Last page toggle button", () => {
    subspecialty.clickLastPageButton()
})

Then("Last page should load", () => {
    subspecialty.verifyLastSubspecialtyPageLoads()
})

And("First page toggle button should be enabled", () => {
    subspecialty.verifyFirstPageButtonIsEnabled()
})

When("I click First page toggle button", () => {
    subspecialty.clickFirstPageButton()
})

Then("First page should load", () => {
    subspecialty.verifyFirsttSubspecialtyPageLoads()
})

And("Refresh button should be enabled", () => {
     subspecialty.verifyRefreshButtonisEnabled()
})

When("I click Refresh button", () => {
    subspecialty.clickRefreshButton()
})

Then("the Subspecialty page should load", () => {
    subspecialty.verifyFirsttSubspecialtyPageLoads()
})

//CL-790
And("Next page should contain {string} in the list of subspecialties", (name)=>{
     subspecialty.verifySubspecialtyExistInTable(name)
})

When("I type Subspecialty name {string} from last page in Filter field", (name) => {
    subspecialty.enterSubspecialtyInSearchFilter(name)
})

//CL-817
And("Navigate to last page", () => {
    subspecialty.navigateToLastPage()
})

Then("Last page should contain {string} in the list of subspecialties", (name) => {
    subspecialty.verifySubspecialtyExistInTable(name)
})

When("I click Edit Sort Order button", () => {
    subspecialty.clickEditSortOrderButton()
})

Then("Subspecialty page should open in edit mode", () => {
   subspecialty.verifySubspecialtyPageOpensInEditMode()
})

When("I drag subspecialty {string}", (name) => {
   //subspecialty.getIndexOfSubspecialty(name)
   subspecialty.dragAndDropSubspecialty(name)
})


//CL-117

When("I get the rowcount of the result table",() => {
    subspecialty.navigateToLastPage()

    subspecialty.elements.last_page_button().should('be.visible')
    //subspecialty.verifyLastSubspecialtyPageLoads()
    subspecialty.verifyLastPageButtonIsDisabled()
    subspecialty.getTableLength()
  })

When("I enter space in the Filter field and search",() =>{
  subspecialty.enterSpaceInFilterField()
  })

Then("No changes are displayed in the results",() => {
    subspecialty.clickLastPageButton()
    subspecialty.verifyLastSubspecialtyPageLoads()
    subspecialty.verifyTableLengthIsUnchanged()
})








