Feature: Blog Creation

  As a logged-in user
  I want to create a blog post with Markdown, tags, and a thumbnail
  So that others can read my content

   Background:
    Given the following tags exist in the database:
      | Cypress |
      | Testing |
    And I am logged in

  Scenario: Successful blog post creation
    When I go to the create blog page
    And I enter a valid title and content in Markdown
    And I add tags and upload a thumbnail
    And I click the "Publish" button
    Then I should see a success message
    And the blog should appear on the homepage

  Scenario: Blog post creation fails with empty title
    When I go to the create blog page
    And I leave the title empty and fill other fields
    And I click the "Publish" button
    Then I should see a validation error

  Scenario: Blog post creation fails when not logged in
    Given I am not logged in
    When I try to visit the create blog page
    Then I should be redirected to the home page
