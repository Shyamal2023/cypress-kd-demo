describe('Understanding assertion', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Implicit assertion', () => {

         cy.title().should('eq', 'OrangeHRM')
        // cy.url().should('include', 'orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrmlive')
       
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')
    })


    it('explicit assertion', () => {

        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get('button').contains(' Login ').click()
        let expectedName = 'mandaTest Vaish'
        cy.get('p[class="oxd-userdropdown-name"]').then((name) => {
            let actualName = name.text()
            expect(actualName).not.to.be.equal(expectedName)
            assert.notEqual(actualName,expectedName)

        })
      let expName = 'Dashboard'
        cy.get('h6[class*="h6 oxd-topbar-header-breadcrumb-module"]').then((name) => {
             let actName = name.text()
             expect(actName).to.be.equal(actName)
             expect(actName).to.be.a('string')
             assert.typeOf(actName,"string")
        })
    
   })
})
