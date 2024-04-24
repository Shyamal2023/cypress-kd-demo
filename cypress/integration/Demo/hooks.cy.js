describe('implementation for Login page', () => {
    before(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get('button').contains(' Login ').click();
        
        cy.get('span[class="oxd-topbar-header-breadcrumb"]').should("have.text", "Dashboard");
    });

    afterEach(() => {
        //cy.get("i[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
        cy.get("li[class='oxd-userdropdown'] > span > i").click()
        cy.wait(3000)
        cy.get("a[class='oxd-userdropdown-link']").contains('Logout').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        
       
    });

    after(() => {
        cy.clearCookies()
    })

    it("should display the dashboard after login", () => {
        cy.get('span[class="oxd-topbar-header-breadcrumb"]').should("have.text", "Dashboard");
    });

    it("Admin should display", () => {
        cy.get('span').contains('Admin').click();
        cy.get("h6[class*='oxd-topbar-header-breadcrumb-module']").should('have.text', 'Admin');
    });

    it("PIM should display", () => {
        cy.get('span').contains('PIM').click();
        cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains('PIM').should('have.text', 'PIM');
    });
});
