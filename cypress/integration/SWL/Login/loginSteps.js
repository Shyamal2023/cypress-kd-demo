import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import loginPage from "./loginPage";
loginPage.login(); //initialize
// const {When} = require("cucumber");

const SaaS = "https://saas.clario.dev-clario.intelerad.com/";
const SWL45 = "http://localhost/SWL45/";
const SWL50 = "https://devtest2-clario.intelerad.com/SWL50/";


Given(`I open SWL login page`, () => {
    cy.visit(SaaS);
});


Given(`The login page is loaded`, () => {

    // loginPage.login(); //initialize
    // loginPage.elements.usernameInput().type('atest');
    // loginPage.elements.passwordInput().type('test123');
    // loginPage.elements.loginButton().click();
    loginPage.type_username('atest');
    loginPage.type_password('test123');
    loginPage.click_login();



    // loginPage.loginBtn.should('have.text','Login');
})

Given('Clario application {string} is launched', (url) => {
    cy.visit(url);
});
When(/^I login as user "([^"]*)"$/, (username) => {
    loginPage.elements.usernameInput().type(username);
});
When(/^I enter password "([^"]*)"$/, (password) => {
    loginPage.elements.passwordInput().type(password);
});
When(/^I click on login button$/, () => {
    cy.wait(2000)
    loginPage.elements.loginButton().click({force:true});
});
Then(/^I am logged in as user "([^"]*)"$/, (user) => {
    console.log(user);
    cy.title().should("include", 'Clario - Home');
});
Then('{string} page is loaded', (title) => {
    cy.title().should("include", title);
});