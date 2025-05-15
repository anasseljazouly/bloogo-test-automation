import {
  Given,
  When,
  Then,
  AfterAll,
  Before
} from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';

let newUser = {
  email: '',
  password: 'ValidPass1*',
  isverified: true
};

const invalidUser = {
  email: 'invalid',
  password: '123',
  isverified: true
};

Before(() => {
  cy.intercept('POST', '/api/auth/register').as('register');
});

AfterAll(() => {
  if (newUser.email) {
    cy.task('deleteTestUser', { email: newUser.email });
  }
});

Given('I am on the registration page', () => {
  cy.visit('/signup');
});

Given('an account already exists with that email', () => {
  newUser.email = faker.internet.email();
  cy.task('createTestUser', {
    email: newUser.email,
    password: newUser.password,
    isverified: newUser.isverified
  });
});

When('I enter a valid email and password', () => {
  newUser.email = faker.internet.email();

  cy.get('input[name="email"]').type(newUser.email);
  cy.get('input[name="password"]').type(newUser.password);
  cy.get('input[name="repassword"]').type(newUser.password);
});

When('I enter an already registered email address', () => {
  cy.get('input[name="email"]').type(newUser.email);
  cy.get('input[name="password"]').type(newUser.password);
  cy.get('input[name="repassword"]').type(newUser.password);
});

When('I enter an invalid email and short password', () => {
  cy.get('input[name="email"]').type(invalidUser.email);
  cy.get('input[name="password"]').type(invalidUser.password);
  cy.get('input[name="repassword"]').type(invalidUser.password);
});

When('I click the {string} button', (buttonLabel: string) => {
  cy.contains('button', buttonLabel).click();
});

Then('I should see a success message', () => {
  cy.wait('@register');
  cy.contains(
    'Registration Successfull now login to Explore our Services'
  ).should('be.visible');
});

Then('I should be redirected to the login page', () => {
  cy.url().should('include', '/login');
});

Then('I should see an error message', () => {
  cy.contains('Email ID already Exists').should('be.visible');
});

Then('I should see validation errors for email and password', () => {
  cy.contains('Enter Valid Email').should('be.visible');
  cy.contains('Password must contain 8 Characters').should('be.visible');
});
