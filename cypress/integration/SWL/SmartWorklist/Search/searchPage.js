class searchPage {
    elements = {
        smartWorklist: () => cy.xpath('//div[text()=\'Smart Worklist\']/img'),
        advanceSearch: () => cy.xpath('//div[@id=\'navigation_search_button_Advanced\']'),
        shiftPopup: () => cy.xpath('(//div[contains(@class,\'x-toolbar-footer-docked-bottom\')]//a/span[@class=\'x-btn-icon-el  \'])[1]'),
        accessionSearchbox: () => cy.xpath('//input[@name=\'accession\']'),
        searchIcon: () => cy.xpath('//div[@id=\'navigation_search_button_Quick\']'),
        quicklastname: () => cy.xpath('//input[@name=\'lastName\']'),
        quickfirstname: () => cy.xpath('//input[@name=\'firstName\']'),
        quickAccession: () => cy.xpath('//input[@name=\'accession\']'),
        quickMrn: () => cy.xpath('//input[@name=\'mrn\']'),
        quicksite: () => cy.xpath('//input[@name=\'site\']'),
        zvExtender: () => cy.xpath('//span[contains(text(),\'OK\')]'),
        patientName: () => cy.xpath('//div[@id=\'content_search_result_Grid-body\']//tbody/tr/td[10]'),
        patientNameVerify: () => cy.xpath('//div[@id=\'content_search_result_Grid-body\']//tbody/tr/td[10]/div'),

    }

    SmartWorklistAppsSearch() {
        cy.fixture('loginData').then(function (loginData) {
            this.loginData = loginData
            cy.visit(loginData.SmartWorklistSWL50);
        })
    }

    type_quickfirstname(firstname) {
        this.elements.quickfirstname().type(firstname)
    }

    type_quicklastname(lastname) {
        this.elements.quicklastname().type(lastname)
    }

    type_quickmrn(mrn) {
        this.elements.quickMrn().type(mrn)
    }

    type_quickAccession(accession) {
        this.elements.quickAccession().type(accession)
    }

    type_quickSite(site) {
        this.elements.quicksite().type(site)
    }

    close_shift() {
        this.elements.shiftPopup()
            .should('be.visible')
            .click()
    }

    click_search() {
        this.elements.searchIcon()
            .should('be.visible')
            .click()
    }

    click_advance_search() {
        this.elements.accessionSearchbox()
            .should('be.visible')
            .click()
    }

    verify_patient_name_text(fullName) {
        this.elements.patientNameVerify()
            .invoke('text').then((text1) => {
                expect(text1).to.eq(fullName);
            })
    }
}


export default new searchPage;