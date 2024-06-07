
class editEmployeePage{
    elements= {
        searchEmpID : () => cy.xpath("//label[text()='Employee Id']/../following-sibling::div/input"),
        searchButton : () => cy.xpath("//button[text()=' Search ']"),
        searchResults : () => cy.get("div[class='oxd-table-card']"),
        editButton : () => cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon'),
        empNameOnEditPage : () => cy.get("div.orangehrm-edit-employee-name"),
        firstNameOnEditPage : () => cy.get("input[name='firstName']"),
        saveButtonOnEditPage : () => cy.get(".oxd-form-actions > :nth-child(2) "),
        checkbox: () => cy.get("div.oxd-table-card-cell-checkbox >div > label > input[type='checkbox']"),

    }
   searchByEmpID(empID){
    this.elements.searchEmpID().type(empID)
          this.elements.searchButton().click()
          this.elements.searchResults().should('contain',empID)
   }

   employeeDisplayedInSearchTable(empID){
    this.elements.searchResults().should('contain',empID)
    //this.elements.checkbox().first().check({ force: true })
   }

   clickEditButton(){
        
        this.elements.editButton().first().click()
    }
    
   
   empNameDispayedOnEditPage(name){
    this.elements.empNameOnEditPage().should('contain',name)
   }

    editFirstName(name){
        this.elements.firstNameOnEditPage().clear().type(name)
    }
}
        




 



module.exports = new editEmployeePage();