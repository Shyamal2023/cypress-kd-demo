
class deleteEmployeePage {
    elements = {
        checkbox: () => cy.get("div.oxd-table-card-cell-checkbox >div > label > input[type='checkbox']"),
        deleteSelectedButton: () => cy.xpath("//button[normalize-space()='Delete Selected']"),
        popupBox: () => cy.get("div[class$='orangehrm-dialog-popup']"),
        yesButton: () => cy.xpath("//button[normalize-space()='Yes, Delete']"),
        deletemessage: () => cy.get("div[class='oxd-toast-container oxd-toast-container--bottom']")
    }
    checkTheCheckboxForEmployee() {
        this.elements.checkbox().first().check({ force: true })
    }
    deleteEmployee() {
        this.elements.deleteSelectedButton().click()
        this.elements.popupBox().should('be.visible')
        this.elements.yesButton().click()
    }


}

module.exports = new deleteEmployeePage();