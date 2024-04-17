const managementPage = "https://devtest2-clario.intelerad.com/TrunkSWL/?manage"
let dataIndex
class SubspecialtyPage {

    elements = {

        management_image: () => cy.xpath("//div[text()='Management']"),
        group_management_button: () => cy.xpath("//span[text()='Group Management']"),
        group_management_menu_list: () => cy.get('#Menu_list-btnInnerEl'),
        subspecialty_tab: () => cy.xpath("//div[contains(@class,'x-btn-default-toolbar-small-pressed')]/div/a/span[2]"),
        new_subspecialty_button: () => cy.get('#menu_group_group_Grid_create-btnIconEl'),
        create_new_subspecialty_label: () => cy.xpath("//div[@class = 'x-box-target']/label[text()='Create New Subspecialty']"),
        subspecialty_name_field: () => cy.xpath("//input[@id='menu_group_group_Form_name-inputEl']"),
        description_field: () => cy.get('#menu_group_group_Form_description-inputEl'),
        save_button: () => cy.xpath("//span[@id = 'menu_group_group_Form_save-btnIconEl']"),
        subspecialty_grid: () => cy.get('#menu_group_group_Grid_view'),
        subspecialty_table: () => cy.get('#menu_group_group_Grid_view-table'),
        filter_input_field: () => cy.xpath("//div[@id='menu_group_group_Grid_pageSearch-targetEl']/table//td[2]"),
        logout_button: () => cy.xpath("//span[text()='Logout']"),
        edit_button: () => cy.xpath("//span[@id='menu_group_group_Form_edit-btnIconEl']"),
        delete_button: () => cy.xpath("//span[@id='menu_group_group_Form_delete-btnIconEl']"),
        cancel_button: () => cy.get('#menu_group_group_Form_cancel'),
        clear_button_on_filter: () => cy.xpath("//div[@id='menu_group_group_Grid_pageSearch-targetEl']/table//td[2]/div"),
        confirm_dialogBox_title: () => cy.xpath("//span[text()='Confirm']"),
        Yes_ConfirmWindow_button: () => cy.xpath("//div[contains(@class,'x-btn-noicon x-btn-default-small-noicon')]/div/a/span[text()='Yes']"),
        next_page_button: () => cy.xpath("//div[contains(@class,'x-btn x-unselectable x-box-item ')]/div/a[@data-qtip='Next Page']"),
        previous_page_button: () => cy.xpath("//div[contains(@class,'x-btn x-unselectable x-box-item ')]/div/a[@data-qtip='Previous Page']"),
        last_page_button: () => cy.xpath("//div[contains(@class,'x-btn x-unselectable x-box-item ')]/div/a[@data-qtip='Last Page']"),
        first_page_button: () => cy.xpath("//div[contains(@class,'x-btn x-unselectable x-box-item ')]/div/a[@data-qtip='First Page']"),
        refresh_button_subspecialty_table: () => cy.xpath("//div[@id='menu_group_group_Grid_pageSearch-innerCt']//div/a[@data-qtip='Refresh']"),
        edit_sort_order_button: () => cy.xpath("//a[@data-qtip='Edit Sort Order']"),
        save_button_on_subspecialty_grid: () => cy.xpath("//a[@data-qtip='Save']"),
        cancel_button_on_subspecialty_grid: () => cy.get("#menu_group_group_Grid_cancelReorder-btnEl")

    }

    navigateManagementPage() {
        cy.visit(managementPage)
    }

    unCaught() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    }

    clickGroupManagement() {
        this.elements.group_management_button().click()
    }

    validateGroupManagementPageOpen() {
        this.elements.group_management_menu_list().should('have.text', 'Group Management')
    }

    clickSubspecialtyTab() {
        this.elements.subspecialty_tab().should('be.visible')
        this.elements.subspecialty_tab().click()
        cy.wait(5000)
    }

    clickCreateNewSubspecialtyButton() {
        this.elements.new_subspecialty_button().should('be.visible')
        this.elements.new_subspecialty_button().invoke('click')
        this.elements.save_button().should('be.visible')
        this.elements.cancel_button().should('be.visible')
    }

    enterSubspecialtyName(name) {
        this.elements.subspecialty_name_field().type(name)
    }

    enterSubspecialtyDescription(description) {
        this.elements.description_field().type(description)
    }

    clickSaveButton() {
        this.elements.save_button().click()
        this.elements.subspecialty_table().should('exist')
    }

    searchSubspecialty(name) {
        this.elements.filter_input_field().type(name)
    }

    selectSubspecialtyFromList(name) {
        this.elements.subspecialty_table().contains(name).click()
    }

    clickEditButton() {
        this.elements.edit_button().click()
    }

    updateSubspecialtyName(name) {
        this.elements.subspecialty_name_field().clear().type(name)
    }

    clearFilterField() {
        this.elements.filter_input_field().click()
        this.elements.clear_button_on_filter().click()
        this.elements.filter_input_field().should('have.value', '')
    }

    clickDeleteButton() {
        this.elements.delete_button().click()
    }

    clickYesInConfirmWindow() {
        this.elements.Yes_ConfirmWindow_button().invoke('click')
    }

    verifyFilterFieldIsDisplayed() {
        this.elements.filter_input_field().should('be.visible')
    }

    enterSubspecialtyInSearchFilter(name) {
        this.elements.filter_input_field().type(name)
    }

    searchResultForSubspecialty(name) {
        this.elements.subspecialty_table().should('contain', name)
    }

    enterSubspecialtyDescriptionInSearchFilter(description) {
        this.elements.filter_input_field().type(description)
    }

    searchResultForSubspecialtyDescription(name) {
        this.elements.subspecialty_table().should('contain', name)
    }

    //CL-705
    verifyNextPageButtonIsEnabled() {
        this.elements.next_page_button().should('not.be.disabled')
    }

    clickNextPageButton() {
        this.elements.next_page_button().click()
    }

    verifyNextSubspecialtyPageLoads() {
        this.elements.subspecialty_table()
            .should('exist')
            .should('have.length.gt', 0)
    }

    verifyPreviousPageButtonIsEnabled() {
        this.elements.previous_page_button().should('not.be.disabled')
    }

    clickPreviousPageButton() {
        this.elements.previous_page_button().click()
    }

    verifyPreviousSubspecialtyPageLoads() {
        this.elements.subspecialty_table()
            .should('exist')
            .should('have.length.gt', 0)
    }

    verifyLastPageButtonIsEnabled() {
        this.elements.last_page_button().should('not.be.disabled')
    }
    verifyLastPageButtonIsDisabled() {
        this.elements.last_page_button().should('be.disabled')
           }



    clickLastPageButton() {
        this.elements.last_page_button().click()
        
    }

    verifyLastSubspecialtyPageLoads() {
       
        this.elements.subspecialty_table()
            .should('exist')
            .should('have.length.gt', 0)
        
    }

    verifyFirstPageButtonIsEnabled() {
        this.elements.first_page_button().should('not.be.disabled')
    }

    clickFirstPageButton() {
        this.elements.first_page_button().click()
    }

    verifyFirsttSubspecialtyPageLoads() {
        this.elements.subspecialty_table()
            .should('exist')
            .should('have.length.gt', 0)
    }

    verifyRefreshButtonisEnabled() {
        this.elements.refresh_button_subspecialty_table().should('not.be.disabled')
    }

    clickRefreshButton() {
        this.elements.refresh_button_subspecialty_table().click()
    }

    //CL-790
    verifySubspecialtyExistInTable(name) {
        this.elements.subspecialty_table()
        .should('contain.text',name)
    }

    //Cl-817
    navigateToLastPage(){
        this.elements.last_page_button().should('not.be.disabled').then($button => {
            if($button){
                this.elements.last_page_button().click()
            }
            
        })
    }

    clickEditSortOrderButton() {
         this.elements.edit_sort_order_button().click()
    }

    verifySubspecialtyPageOpensInEditMode() {
        this.elements.save_button_on_subspecialty_grid().should('be.visible')
        this.elements.cancel_button_on_subspecialty_grid().should('be.visible')
        this.elements.edit_sort_order_button().should('not.be.visible')
    }
    
    
    // getIndexOfSubspecialty(name) {
    //     this.elements.subspecialty_table().each(($li, i) => {
    //     if ($li.text().includes(name)){
    //     index = i
    //     return false //exit the loop if name is found
    //     }
    //     })
    // }

    dragAndDropSubspecialty(name) {
     
         this.elements.subspecialty_table().contains(name).as('dragItem')
         cy.wait(2000)
        //  this.elements.subspecialty_table().contains(name).invoke('attr','data-recordindex').then((index) => {
        //    const index1 = parseInt(index,10)
        //     cy.log('index:',index1)
        //  const dropIndex = index1-1
        //  cy.log('dropIndex:',dropIndex)
        // })
        // const dropLocation = dataIndex - 2
        // cy.log('dropLocation index: ',dropLocation)
    
        //  cy.xpath("//table[@id='menu_group_group_Grid_view-table']/tbody/tr[@data-recordindex='${dropIndex}']").as('dropLocation')
        //  cy.wait(2000)
        //  cy.get('@dragItem').trigger('mousedown', {which: 1})
        //  cy.wait(2000)
        // this.elements.subspecialty_table().trigger('mousemove')
        // cy.wait(2000)
        // cy.get('@dropLocation').trigger('mouseup')
        // cy.wait(2000)
        // this.elements.subspecialty_table().contains(name).invoke('attr','data-recordindex').as('recordIndex')
        // cy.get('@recordIndex').then((currentIndex) => {
        //     const newIndex = parseInt(currentIndex) - 1
        //     cy.xpath('//table//tr[@data-recordindex= "${newIndex}"]').invoke('attr','data-recordindex').as('targetElemet') 
        //     //const {left, top} = $targetElemet[0].getBoundingClientRect();
            
        //     cy.get('@dragItem').trigger('mousedown', {which: 1})
        //     this.elements.subspecialty_table().trigger('mousemove')
        //     cy.get('@targetElemet').trigger('mouseup')
       
            
       
      cy.get('#menu_group_group_Grid_view-record-266').as('source')
      cy.get('#menu_group_group_Grid_view-record-269').as('target')
      cy.get('@source').drag('@target')
               
        }

    // CL-117
    enterSpaceInFilterField(){
        this.elements.filter_input_field().click()
        this.elements.filter_input_field().type(' ', {delay:100}).type('{enter}')
    }

    getTableLength(){
        this.elements.subspecialty_grid().find('tr').filter(':not(:empty)').its('length').as('initialRowCount')
        
    }
    
    verifyTableLengthIsUnchanged(){
       cy.get('@initialRowCount').then(initialRowCount => {
        this.elements.subspecialty_grid().find('tr').filter(':not(:empty)').its('length').should('eq', initialRowCount);
    })
    }
}


    
        




export default SubspecialtyPage;
module.exports = SubspecialtyPage;

