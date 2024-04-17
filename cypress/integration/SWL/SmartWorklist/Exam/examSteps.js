import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import examPage from "./examPage";
import userData from "../../../../fixtures/userData.json";

Given('Launched Worklist application', () => {
    examPage.SmartWorklistApps();
})

Given('User close the Shift pop up box', () => {
    examPage.close_shift();
})

When('Search an exam', () => {
    examPage.type_accession(userData.accessionNo);
})

When('User click on the search icon', () => {
    examPage.click_search();
})

When('Open an exam and go to Notes section', () => {
    examPage.click_exam();
    examPage.unCaught();
    examPage.create_click();
})

When('Verify Notes page is loaded', () => {
    examPage.create_click_visible();

})

When('Select File Type', () => {
    examPage.select_filetype();
})

When('Select File Upload from Create drop down', () => {
    examPage.file_upload();
})

When('Upload an image that is smaller', () => {
    examPage.upload_path();
    examPage.submit_click();

})

Then('Verify that the image is uploaded successfully', () => {
    examPage.verify_upload();
})