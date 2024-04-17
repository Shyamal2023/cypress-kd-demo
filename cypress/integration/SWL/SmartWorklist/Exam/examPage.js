class examPage {
    elements = {
        smartWorklist: () => cy.xpath('//div[text()=\'Smart Worklist\']/img'),
        advanceSearch: () => cy.xpath('//label[contains(text(),\'Advanced Search\')]'),
        shiftPopup: () => cy.xpath('(//div[contains(@class,\'x-toolbar-footer-docked-bottom\')]//a/span[@class=\'x-btn-icon-el  \'])[1]'),
        accessionSearchbox: () => cy.xpath('//input[@name=\'accession\']'),
        searchIcon: () => cy.xpath('//div[@id=\'navigation_search_button_Quick\']'),
        zvExtender: () => cy.xpath('//span[contains(text(),\'OK\')]'),
        examClick: () => cy.xpath('//div[@id=\'content_search_result_Grid-body\']//tbody/tr/td[10]'),
        patientNameVerify: () => cy.xpath('(//div[@id=\'content_search_result_Grid-body\']//tbody/tr/td[10]/div)[1]'),
        createClick: () => cy.xpath('//div[@id=\'content_patient_note_Main_header_create\']'),
        fileUpload: () => cy.xpath('//span[text()=\'File Upload\']'),
        fileType: () => cy.xpath('//li[text()=\'Insurance Card\']'),
        uploadPath: () => cy.xpath('//input[@name=\'fileName\']'),
        submit: () => cy.xpath('//span[text()=\'Submit\']/parent::a'),
        verifyUpload: () => cy.xpath('(//a[text()=\'PXL_20231207_182607461.jpg\'])[1]')

    }
    SmartWorklistApps() {
        cy.fixture('loginData').then(function (loginData) {
            this.loginData = loginData
            cy.visit(loginData.SmartWorklistSWL50);
        })
    }

    close_shift() {
        this.elements.shiftPopup()
            .should('be.visible')
            .click()
    }
    type_accession(accession) {
        this.elements.accessionSearchbox().type(accession)
    }

    click_search() {
        this.elements.searchIcon()
            .should('be.visible')
            .click()
    }
    click_exam() {
        this.elements.patientNameVerify()
            .should('be.visible')
            .click()
    }
    create_click_visible() {
        this.elements.createClick()
            .should('be.visible')
    }
    create_click() {
        this.elements.createClick()
            .should('be.visible')
            .click()
    }
    file_upload() {
        this.elements.fileUpload()
            .should('be.visible')
            .click()
    }

    select_filetype() {
        this.elements.fileType()
            .should('be.visible')
            .click()
    }

    upload_path() {
        this.elements.uploadPath().attachFile('PXL_20231207_182607461.jpg');
    }

    submit_click() {
        this.elements.submit()
            .should('be.visible')
            .click()
    }

    verify_upload() {
        this.elements.submit()
            .should('be.visible')
    }

    unCaught() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    }

}

export default new examPage;

import "cypress-xpath";