describe("Selectors and actions",() => {

    it("using selectors and actions", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        //cy.get("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()
        // cy.get("button[class*='medium oxd-button']").click()
        // cy.get("button[class^='oxd-button oxd-button']").click()
        //cy.get("button[class$='main orangehrm-login-button']").click()

        cy.get('button').contains(' Login ').click();
    })

    it("using sibling selectors", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //cy.get("input[class='oxd-input oxd-input--active']").first().type('Admin')
        //cy.get("input[class='oxd-input oxd-input--active']").last().type('admin123')
        //cy.get('button').contains(' Login ').click()

        //cy.get("form[class='oxd-form']").find("div[class='oxd-form-row']") //finds child elements of parent element
        //cy.get("form[class='oxd-form']").find("div[class='oxd-form-row']").last() //finds last child element of parent element
       // cy.get("form[class='oxd-form']").find("div[class='oxd-form-row']").eq(0)  //finds element with specific index

    })

})
