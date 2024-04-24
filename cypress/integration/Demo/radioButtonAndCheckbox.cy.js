describe('Understanding radio button and check boxes', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get('button').contains(' Login ').click()
        cy.get('span[class="oxd-topbar-header-breadcrumb"]').should("have.text", "Dashboard");
    })


    it.only('Radio button implementation', () => {
        cy.get('span').contains('My Info').click()
        cy.get('h6[class="oxd-text oxd-text--h6 orangehrm-main-title"]').contains('Personal Details')
            .should('have.text', 'Personal Details')
        cy.get("div[class='oxd-radio-wrapper']").contains('Male').should('be.visible')
        cy.get("div[class='oxd-radio-wrapper'] > label > input[type='radio']").first().check({ force: true }).should('be.checked');
        cy.get("div[class='oxd-radio-wrapper'] > label > input").last().check({ force: true }).should('be.checked');
        cy.get("div[class='oxd-radio-wrapper'] > label > input[type='radio']").first().should('not.be.checked')
    });


    it('checkbox implementation', () => {
        cy.get('span').contains('My Info').click()
        cy.get('h6[class="oxd-text oxd-text--h6 orangehrm-main-title"]').contains('Personal Details')
            .should('have.text', 'Personal Details')
      cy.get("div[class='oxd-checkbox-wrapper'] > label > input[type='checkbox']").first().check({force:true}).should('be.checked')
      cy.get("div[class='oxd-checkbox-wrapper'] > label > input[type='checkbox']").first().uncheck({force:true}).should('not.be.checked')
    });

})


