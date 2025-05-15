import {
  Given,
  When,
  Then,
  DataTable,
  BeforeAll,
  AfterAll
} from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';

const verifiedUser = {
  email: faker.internet.email(),
  password: 'validPassword1*',
  isverified: true
};

let tags: string[][];
let blog = {
  title: '',
  content: '',
  tag: '',
  thumbnail: ''
};

BeforeAll(() => {
  cy.task('createTestUser', verifiedUser);
});

beforeEach(() => {
  cy.intercept('POST', '/api/blog/new').as('createBlog');
  cy.intercept('GET', '/api/blogs/user').as('getUserBlogs');
});

AfterAll(() => {
  cy.task('deleteTestUser', verifiedUser.email);
});

afterEach(() => {
  tags.forEach((tag) => {
    cy.task('deleteTag', { name: tag[0] });
  });
});

Given('the following tags exist in the database:', (dataTable: DataTable) => {
  tags = dataTable.raw();

  tags.forEach((tag) => {
    cy.task('createTag', { name: tag[0] });
  });
});

Given('I am logged in', () => {
  cy.login(verifiedUser.email, verifiedUser.password);
});

Given('I am not logged in', () => {
  cy.logout();
});

When('I go to the create blog page', () => {
  cy.visit('/blog/new');
});

When('I enter a valid title and content in Markdown', () => {
  blog.title = faker.lorem.sentence();
  blog.content = `# ${faker.lorem.words(3)}\n\n${faker.lorem.paragraphs(2)}`;

  cy.get('input[placeholder="Enter Blog Title"]').type(blog.title);
  cy.get('div[data-language="markdown"]').type(blog.content, { delay: 0 });
});

When('I add tags and upload a thumbnail', () => {
  blog.tag = tags[0][0];
  blog.thumbnail = 'e2e/fixtures/sample-image.png';

  cy.contains('Select...').parent().click();
  cy.contains(blog.tag).click();
  cy.get('input[type="file"]').selectFile(blog.thumbnail, { force: true });
});

When('I click the {string} button', (buttonText: string) => {
  cy.contains('button', buttonText).click();
});

When('I leave the title empty and fill other fields', () => {
  blog.content = `# ${faker.lorem.words(3)}\n\n${faker.lorem.paragraphs(2)}`;
  blog.tag = tags[0][0];
  blog.thumbnail = 'e2e/fixtures/sample-image.png';

  cy.get('div[data-language="markdown"]').type(blog.content, { delay: 0 });
  cy.contains('Select...').parent().click();
  cy.contains(blog.tag).click();
  cy.get('input[type="file"]').selectFile(blog.thumbnail, { force: true });
});

When('I try to visit the create blog page', () => {
  cy.visit('/blog/new');
});

Then('I should see a success message', () => {
  cy.wait('@createBlog');
  cy.contains('Blog Added Successfully').should('be.visible');
});

Then('the blog should appear on the homepage', () => {
  cy.wait('@getUserBlogs');
  cy.get('div')
    .contains(blog.title)
    .closest('div.px-3')
    .within(() => {
      cy.contains('a', blog.tag).should('exist');
    });
});

Then('I should see a validation error', () => {
  cy.contains(
    'Check The Title, Content and Tag if you left it Blank or Not.'
  ).should('be.visible');
});

Then('I should be redirected to the home page', () => {
  cy.location('pathname').should('eq', '/');
});
