
class loginPage {
    elements = {
        // usernameInput : () =>  cy.xpath('//input[@name=\'username\']'),
        usernameInput : () =>  cy.get('#userid-inputEl'),
        passwordInput : () =>  cy.xpath('//input[@name=\'password\']'),
        loginButton : () => cy.get('#splitbutton-1012-btnEl'),
        //loginButton : () => cy.xpath("//a[span[text()='Login']]"),
        logoutButton : () => cy.xpath("//a[span[text()='Logout']]"),
    }

    login() {
    }

    type_username(username) {
        this.elements.usernameInput().type(username)
    }
    type_password(password){
        this.elements.passwordInput().type(password)
    }
    click_login() {
       this.elements.loginButton().invoke('dblclick').dblclick();
       this.elements.loginButton().should('be.visible').click().click();
    }
}

export default new loginPage();

import "cypress-xpath";