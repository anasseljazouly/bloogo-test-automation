Feature: User Login

  As a registered user
  I want to login with my credentials
  So I can access my dashboard

  Background:
    Given a verified user exists with email "verified.user@example.com" and password "validPassword1*"
    And an unverified user exists with email "unverified.user@example.com" and password "validPassword1*"
    And I am on the login page

  Scenario: Successful login with valid credentials
    When I enter email "verified.user@example.com" and password "validPassword1*"
    And I click the "Login" button
    Then I should be redirected to the dashboard

  Scenario: Login fails with incorrect password
    When I enter email "verified.user@example.com" and password "wrongPassword1"
    And I click the "Login" button
    Then I should see an error message saying "Invalid credentials"

  Scenario: Login fails when account is unverified
    When I enter email "unverified.user@example.com" and password "validPassword1*"
    And I click the "Login" button
    Then I should see a message saying "Please verify your email"
