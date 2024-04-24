describe('implementation for Login page', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Launch Browser and Navigate to orange HRM', () => {

        cy.title().should('eq', 'OrangeHRM')

    })


    it("User should login successfully", () => {
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get('button').contains(' Login ').click()
        cy.get('span[class="oxd-topbar-header-breadcrumb"]').should("have.text", "Dashboard");
    });


    it("Invalid username and password", () => {
        cy.get("input[name='username']").type('Admin-1')
        cy.get("input[name='password']").type('admin123-1')
        cy.get('button').contains(' Login ').click()

        cy.get("div[class='oxd-alert oxd-alert--error']").should("have.text", "Invalid credentials");
    });

    it("valid username and invalid password", () => {
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123-1')
        cy.get('button').contains(' Login ').click()

        cy.get("div[class='oxd-alert oxd-alert--error']").should("have.text", "Invalid credentials");
    });

    it("invalid username and valid password", () => {
        cy.get("input[name='username']").type('Admin-1')
        cy.get("input[name='password']").type('admin123')
        cy.get('button').contains(' Login ').click()

        cy.get("div[class='oxd-alert oxd-alert--error']").should("have.text", "Invalid credentials");
    });

    it(" empty username field message", () => {
        cy.get("input[name='username']").type('  ')
        cy.get("input[name='password']").type('admin123')
        cy.get('button').contains(' Login ').click()
        cy.get("span[class*=' oxd-input-field-error-message ']")
            .should("have.text", "Required")
    })

    it("empty password field message", () => {
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type(' ')
        cy.get('button').contains(' Login ').click()
        cy.get("span[class*=' oxd-input-field-error-message ']")
            .should("have.text", "Required")
    })


})