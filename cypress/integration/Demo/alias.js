describe("understanding alias ",() => {

    it("using alias", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").as('uname')
        cy.get('@uname').type('Admin')
        cy.get("input[name='password']").as('pwd')
        cy.get('@pwd').type('admin123')
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").as('login')
        cy.get('@login').click()

        })

        it("assigning alias during command chaining", () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get("input[name='username']").type('Admin').as('uname')
            cy.get('@uname').should('be.visible')
            cy.get("input[name='password']").type('admin123').as('pwd')
            cy.get('@pwd').should('be.visible')
            cy.get("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").as('login')
            cy.get('@login').click()
    
            })


})