export function selectOption(optionText) {
    // Custom function to select an option from a dropdown
    cy.get('span').contains(optionText).click();
  }
       
  export function click(locator,name){

     locator.contains(name).click();
  }

  export function verifyPageLoads(locator,name){
    locator.should('have.text',name)
  }