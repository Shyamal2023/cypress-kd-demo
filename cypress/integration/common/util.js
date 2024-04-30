export function selectOption(optionText) {
    // Custom function to select an option from a dropdown
    cy.get('span').contains(optionText).click();
  }
       