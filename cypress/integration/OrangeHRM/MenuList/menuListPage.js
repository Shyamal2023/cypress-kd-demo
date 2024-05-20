
class menuListPage
{
   elements = {
    ele : () => cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']"),
    heading : () => cy.get("h6[class$= 'oxd-topbar-header-breadcrumb-module']"),
    
   }

   clickAdminMenu(){
    this.elements.ele().contains('Admin').click()
   }

   verifyAdminPageLoads(){
     this.elements.heading().should('have.text','Admin')
   }

   clickPIMMenu(){
    this.elements.ele().contains('PIM').click()
   }

   verifyPIMPageLoads(){
     this.elements.heading().should('have.text','PIM')
   }


   clickLeaveMenu(){
    this.elements.ele().contains('Leave').click()
   }

   verifyLeavePageLoads(){
     this.elements.heading().should('have.text','Leave')
   }

  
}

module.exports = new menuListPage();