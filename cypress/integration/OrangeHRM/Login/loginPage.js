

class loginPage {
  elements = {
    loginTitle: () => cy.get(".oxd-text--h5"),
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button[type="submit"]'),
    dashboardPage: () => cy.get('span[class="oxd-topbar-header-breadcrumb"]'),
    errorMsg: () => cy.get('div[role="alert"]'),
    emptyUsernameFieldMsg: () => cy.get(".oxd-input-group > .oxd-text"),
    emptyPasswordFieldMsg: () => cy.get(".oxd-input-group > .oxd-text"),
    forgotPasswordBtn: () => cy.contains("Forgot your password?"),
    dropdownAboutAlert: () => cy.get(".orangehrm-modal-header > .oxd-text"),
    resetPasswordBox: () => cy.get("form[class='oxd-form'] > h6")
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typeEmptyUsername(username) {
    this.elements.usernameInput().type('  ');
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  typeEmptyPassword(password) {
    this.elements.passwordInput().type(' ');
  }


  clickLogin() {
    this.elements.loginBtn().click();
  }

  verifyDashboardPageOpens()
  {
    this.elements.dashboardPage().should('have.text',"Dashboard")
  }

  clickForgotPasswordBtn() {
    this.elements.forgotPasswordBtn().click();
  }

  getErrorMsg(message) {
    this.elements.errorMsg(message).should('have.text','Invalid credentials');
  }

  getEmptyUsenameMsg(message){
    this.elements.emptyUsernameFieldMsg(message).should('have.text','Required')
  }

  getEmptyPasswordMsg(message){
    this.elements.emptyPasswordFieldMsg(message).should('have.text','Required')
}
  clickForgotPasswordBtn(){
    this.elements.forgotPasswordBtn().click()
  }

  verifyResetPasswordBoxDisplay(){
    this.elements.resetPasswordBox().should('have.text','Reset Password')
  }
}


module.exports = new loginPage();