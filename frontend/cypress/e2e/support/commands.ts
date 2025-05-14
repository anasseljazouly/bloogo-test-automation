Cypress.Commands.add('logout', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
});
