import {selectOption} from "../common/util";
describe("Login", () => {
    it("should login with valid credentials", () => {
        cy.login("Admin", "admin123");
        cy.title().should('eq', 'OrangeHRM')

    });

    it("helper function", () => {

     cy.login("Admin", "admin123");
     selectOption('Leave');

});
});