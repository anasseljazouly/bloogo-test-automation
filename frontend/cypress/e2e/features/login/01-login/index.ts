import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the home page', () => {
  cy.visit('/');
});

Then('I should see {string}', (text: string) => {
  cy.contains(text).should('be.visible');
});
