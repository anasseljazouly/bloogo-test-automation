import './commands';

before(() => {
  Cypress.config('baseUrl', 'http://localhost:5173');

  cy.intercept('/docs', {
    headers: { 'content-type': 'text/html' },
    statusCode: 200
  }).visit('/');
});

Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes('Request failed with status code 401') ||
    err.message.includes('Request failed with status code 403') ||
    err.message.includes('undefined')
  ) {
    return false;
  }

  return true;
});
