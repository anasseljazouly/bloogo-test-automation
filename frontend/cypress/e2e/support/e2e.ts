before(() => {
  Cypress.config('baseUrl', 'http://127.0.0.1:5173');

  cy.intercept('/docs', {
    headers: { 'content-type': 'text/html' },
    statusCode: 200
  }).visit('/docs');
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
