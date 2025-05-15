Feature: User Registration

  As a new user
  I want to register on the Bloogo platform
  So that I can create and publish blogs

  Background:
    Given I am on the registration page

  Scenario: Successful registration with valid data
    When I enter a valid email and password
    And I click the "Sign Up" button
    Then I should see a success message
    And I should be redirected to the login page

  Scenario: Registration fails with already used email
    Given an account already exists with that email
    When I enter an already registered email address
    And I click the "Sign Up" button
    Then I should see an error message

  Scenario: Registration fails with invalid input
    When I enter an invalid email and short password
    And I click the "Sign Up" button
    Then I should see validation errors for email and password
