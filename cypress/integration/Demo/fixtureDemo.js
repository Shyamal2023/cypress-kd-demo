describe('data driven testing', () => {
   
    it("User should login successfully", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('loginUser').then((data) => {
            cy.get("input[name='username']").type(data.username)
            cy.get("input[name='password']").type(data.password)
            cy.get('button').contains(' Login ').click()
            cy.get('span[class="oxd-topbar-header-breadcrumb"]').should("have.text", data.expected);
        })

        cy.get('span').contains('Admin').click();
        cy.get("h6[class*='oxd-topbar-header-breadcrumb-module']").should('have.text', 'Admin');
        cy.fixture('admin').then((user) => {
            user.forEach((ele) => {
                
          
            //select User name
            cy.xpath("//div[contains(@class,'-bottom-space')]/div/input[contains(@class,'input--active')]").clear().type(ele.username)

            //Clicks User Role drop down
            cy.xpath("//label[text()='User Role']/../following-sibling::div//div[@class='oxd-select-text--after']").click()

            //Selects options from User Role drop down
            cy.get('div.oxd-select-option').contains(ele.userRole).click()

            //Type Employee Name
            cy.xpath("//label[text()='Employee Name']/../following-sibling::div//input").clear().type(ele.employeeName)
            cy.get('div.oxd-autocomplete-option').contains(ele.employeeName).click()

            //Select Status
            cy.xpath("//label[text()='Status']/../following-sibling::div//div[@class='oxd-select-text--after']").click()

            //Select options from Status drop down
            cy.get('div.oxd-select-option').contains(ele.status).click()

            //Click Search
            cy.xpath("//button[contains(@class,'secondary orangehrm-left-space')]").click()
            })

        })

    })
})

