/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    logout(): Chainable<void>;
    login(email: string, password: string): Chainable<void>;
  }
}
