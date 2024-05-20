describe('implementation for Login page', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Launch Browser and Navigate to orange HRM', () => {

        cy.title().should('eq', 'OrangeHRM')

    })


    it("menu displayed", () => {
        //Login
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get('button').contains(' Login ').click()
        cy.get("a[class='oxd-main-menu-item active']>span").should("have.text", "Dashboard")
        cy.log("logged in successfully")

        //side panel menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("have.text", "Admin")
        cy.get(':nth-child(2) > .oxd-main-menu-item').should("have.text", "PIM")
        cy.get(':nth-child(3) > .oxd-main-menu-item').should("have.text", "Leave")

        cy.task("log","Leave menu displayed")   //console.log()

        cy.get(':nth-child(4) > .oxd-main-menu-item').should("have.text", "Time")
        cy.get(':nth-child(4) > .oxd-main-menu-item').then(($selectedElement)=>{
        //debugger; //need to open developers' tool while the test is execution in cypress app
          cy.wrap($selectedElement).click()
          cy.log('elem clicked')
          cy.task("log","Time page loaded")   //console/log()
          cy.get("i[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
          cy.get("ul[class='oxd-dropdown-menu'] > :nth-child(4)").debug().click()  //debug()
        })

    });

})