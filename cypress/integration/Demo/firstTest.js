describe('My First Test', () => {

    it('Launch Browser and Navigate', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.title().should('eq', 'OrangeHRM')
    
 })
    
    })
    