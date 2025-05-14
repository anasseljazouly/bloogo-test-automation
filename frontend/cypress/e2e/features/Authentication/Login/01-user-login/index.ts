import {
  Given,
  When,
  Then,
  AfterAll,
  BeforeAll
} from '@badeball/cypress-cucumber-preprocessor';

const verifiedUser = {
  email: 'verified.user@example.com',
  password: 'validPassword1*',
  isverified: true
};

const unverifiedUser = {
  email: 'unverified.user@example.com',
  password: 'validPassword1*',
  isverified: false
};

BeforeAll(() => {
  // Creating users
  cy.task('createTestUser', verifiedUser);
  cy.task('createTestUser', unverifiedUser);
});

beforeEach(() => {
  cy.intercept({
    method: 'POST',
    url: '/api/auth/login'
  }).as('login');
});

AfterAll(() => {
  // Cleanup the users created during the test
  cy.task('deleteTestUser', { email: verifiedUser.email });
  cy.task('deleteTestUser', { email: unverifiedUser.email });
});

afterEach(() => {
  cy.logout();
});

Given('I am on the login page', () => {
  cy.visit('/login');
});

When(
  'I enter email {string} and password {string}',
  (email: string, password: string) => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
  }
);

When('I click the {string} button', (buttonText: string) => {
  cy.contains('button', buttonText).click();
  cy.wait('@login');
});

Then('I should be redirected to the home page', () => {
  cy.contains('Create Your First Blog');
});

Then('I should see an error message saying {string}', (message: string) => {
  cy.contains(message).should('be.visible');
});

Then('I should see a message saying {string}', (message: string) => {
  cy.wait(5000);
  cy.visit('/');

  cy.contains(message);
});
