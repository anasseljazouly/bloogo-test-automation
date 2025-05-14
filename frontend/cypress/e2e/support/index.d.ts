/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      logout(): Chainable<void>;
    }
  }
  