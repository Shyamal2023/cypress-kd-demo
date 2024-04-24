Cypress.Commands.add("login", (username, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    // Enter the username and password
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
  
    // Submit the login form
    cy.get('button[type="submit"]').click();
  });