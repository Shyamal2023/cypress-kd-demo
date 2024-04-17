
class dashboardPage {

    dbElements = {

       homeAnalytics : () => cy.xpath("//div[contains(text(),'Analytics')]"),
       labelDashboard : () => cy.xpath("(//span[contains(text(),'Dashboard')])[2]"),
       examTurnaroundTime : () => cy.get("#treeview-1058-record-ext-record-18"),
       stackedTurnaroundTime : () => cy.get('#treeview-1058-record-ext-record-19 > td > div > span'),
       editButton : () => cy.xpath("//div[@data-qtip='Edit']"),
       modalityField : () => cy.xpath("(//label[contains(text(),'Modality:')])[1]"),
       modalityCheckBox : () => cy.get('.x-boundlist-item > div'),
       modalityValue : () => cy.xpath("//input[@name='F8']"),
       saveButton : () => cy.xpath("//span[contains(text(),'Save')]"),
       deleteButton : () => cy.xpath("//span[contains(text(),'Delete')]"),
       radioloProductivity : () => cy.get("#treeview-1058-record-ext-record-27 > td > div"),
       includeElement : () => cy.xpath("//input[@name='F167']"),
       examAndCredit : () => cy.xpath("//li[contains(text(),'Exams and Credits')]"),
       creditInclude : () => cy.xpath("(//li[contains(text(),'Credits')])[3]"),
       messageText : () => cy.get(".x-mask-msg.mask-chart > div > div"),
       examsInclude : () => cy.xpath("//input[@value='Exams']"),
    }

    AnalyticsApps(){
        cy.fixture('loginData').then(function (loginData) {
            this.loginData = loginData
            cy.visit(loginData.AnalyticsSWL50);
        })
    }

    clickOnDashboard(){
        this.dbElements.labelDashboard().should('be.visible').click();
    }
    clickOnTheExamTurnaroundTime(){
        this.dbElements.examTurnaroundTime().click();
    }
    clickOnStackedTurnaroundTime(){
        this.dbElements.stackedTurnaroundTime().click();
    }
    clickOnEditButton(){
        this.dbElements.editButton().click();
    }
    enterModalityName(modalityName){
        this.dbElements.modalityField().type(modalityName);
    }
    selectModalityName(){
        this.dbElements.modalityCheckBox().click();
    }
    clickOnSaveButton(){
        this.dbElements.saveButton().invoke('click');
    }
    clickOnDeleteButton(){
        this.dbElements.deleteButton().invoke('click');
    }
    modalityTextField(){
        this.dbElements.modalityField();
    }

    clickOnRadiologistProd(){
        this.dbElements.radioloProductivity().click();
    }
    clickOnInclude(){
        this.dbElements.includeElement().click();
    }
    selectExamAndCredit(){
        this.dbElements.examAndCredit().type(Cypress._.repeat('{downArrow}',2)).click(); 
    }
    selectCredit(){
        this.dbElements.creditInclude().type(Cypress._.repeat('{upArrow}',1));
    }
    validateMessage(){
        this.dbElements.messageText().should('be.visible');
    }
    selectModality(){
        cy.fixture('userData').then(function (userData) {
            this.userData = userData
            cy.xpath("(//label[contains(text(),'Modality:')])[1]").type(userData.ASangioscopy);
        })
    }

}

export default  new dashboardPage;