import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import searchPage from "./searchPage";
import userData from "../../../../fixtures/userData.json";


Given('Launched Worklist application', () => {
    searchPage.SmartWorklistAppsSearch();
})

Given('User close the Shift pop up box', () => {
    searchPage.close_shift();

})

When('click and enter firstname', () => {
    searchPage.type_quickfirstname(userData.firstName);
})

When('click and enter lastname', () => {
    searchPage.type_quicklastname(userData.lastName);
})

When('User click on the quick search icon', () => {
    searchPage.click_search();
})

Then('verify patient has been displayed', () => {
    searchPage.verify_patient_name_text(userData.patientFullname);
})

When('click and enter mrn', () => {
    searchPage.type_quickmrn(userData.mrn);
})

When('click and enter accession no', () => {
    searchPage.type_quickAccession(userData.accessionNo);
})

When('click and enter site', () => {
    searchPage.type_quickSite(userData.site);
})

When('click and enter firstname with wildcard characters', () => {
    searchPage.type_quickfirstname(userData.firstNameWildcharacter);
})

When('click and enter lastname with wildcard characters', () => {
    searchPage.type_quicklastname(userData.lastNameWildcharacter);
})

Then('verify patient has been displayed that satisfied wildcard characters', () => {
    searchPage.verify_patient_name_text(userData.patientFullnameWildcharacter);
})

When('click and enter mrn with wildcard characters', () => {
    searchPage.type_quickmrn(userData.mrnWildcharacter);
})

When('click and enter accession no with wildcard characters', () => {
    searchPage.type_quickAccession(userData.accessionNoWildcharacter);

})