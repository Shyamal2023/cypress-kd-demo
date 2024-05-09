describe('Screenshot and video', () => {

    it('Capture Screenshot', () => {
    //capture screenshot using cy.screenshot command
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('div.orangehrm-login-slot > h5').should('have.text', 'Login')
   // cy.wait(2000)
    cy.screenshot("login_page")
    
    //capture screenshot by chanining the command
    cy.get('div.orangehrm-login-branding > img').screenshot('OrangeHRM_logo')
    
    
 })

 it('automatically capture screenshot and videos on test failure', () => {
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('div.orangehrm-login-slot > h5').should('have.text', 'Login')  //Change to 'Submit to intentionally fail the test case
    //Run the file in CLI using  "npx cypress run --spec cypress\integration\Demo\screenshotAndVideos.js"
 })
    
    })
    