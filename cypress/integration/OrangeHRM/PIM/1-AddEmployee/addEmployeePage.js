
class addEmployeePage{
    elements= {
        dashboardTitle :() => cy.get("h6[class$= 'oxd-topbar-header-breadcrumb-module']"),
        pimTitle : () => cy.get("h6[class$= 'oxd-topbar-header-breadcrumb-module']"),
        pimOption : () => cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']"),
        addEmployeeTab : () => cy.xpath("//a[text()='Add Employee']"),
        addEmployeeTitle : () => cy.get("h6[class='oxd-text oxd-text--h6 orangehrm-main-title']"),
        empFirstName : () => cy.xpath("//input[@name='firstName']"),
        empMiddleName : () => cy.get("input[name='middleName']"),
        empLastName : () => cy.get("input[name='lastName']"),
        empID : () => cy.get("div[class$='bottom-space'] > div > input[class$=' oxd-input--active']"),
        saveButton : () => cy.xpath("//button[text()=' Save ']"),
        emplyoeeListTab : () => cy.xpath("//a[text()='Employee List']"),
        searchEmpID : () => cy.xpath("//label[text()='Employee Id']/../following-sibling::div/input"),
        searchButton : () => cy.xpath("//button[text()=' Search ']"),
        searchResults : () => cy.get("div[class='oxd-table-card']"),
        saveEmpList : () => cy.xpath("(//button[text()=' Save '])[1]"),
    }

    addEmployeeTitleIsDisplayed()
    {
        this.elements.addEmployeeTitle().should('have.text','Add Employee')
    }
    enterFirstName(firstname){
        this.elements.empFirstName().clear().type(firstname)
    }

    enterMiddleName(middlename){
        this.elements.empMiddleName().clear().type(middlename)
    }

    enterLastName(lastname){
        this.elements.empLastName().clear().type(lastname)
    }

    enterEmpID(empid){
        this.elements.empID().clear().type(empid)
    }

    navigateToEmployeeListTab()    {
        this.elements.emplyoeeListTab().contains('Employee List').should('have.text','Employee List')
        .click()
    }

    newEmployeeAddedSuccessfully(empID){  

          this.elements.searchEmpID().type(empID)
          this.elements.searchButton().click()
          this.elements.searchResults().should('contain',empID)
        
    }

        }

 



module.exports = new addEmployeePage();