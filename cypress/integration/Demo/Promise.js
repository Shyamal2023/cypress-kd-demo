describe('Handling Asynchronous behavior', () => {

    it('Using wait', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/');

        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get('button').contains(' Login ').click()
        cy.wait(1000)
        cy.get('h6[class*="h6 oxd-topbar-header-breadcrumb-module"]').should('contain', 'Dashboard')

    });



    it('Using Then', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/');

        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get('button').contains(' Login ').click()

        let expName = 'Dashboard'
        cy.get('h6[class*="h6 oxd-topbar-header-breadcrumb-module"]').then((name) => {
            let actName = name.text()
            expect(actName).to.be.equal(actName)

        });

    });

    it('Using wrap', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/');

        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get('button').contains(' Login ').then(($button) => {
            cy.wrap($button).click()

        })

    });
})
