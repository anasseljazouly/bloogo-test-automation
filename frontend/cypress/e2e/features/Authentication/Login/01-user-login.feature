Feature: User Login

  As a registered user
  I want to login with my credentials
  So I can access my dashboard

  Background:
    Given I am on the login page

  Scenario: Successful login with valid credentials
    When I enter email "verified.user@example.com" and password "validPassword1*"
    And I click the "Login" button
    Then I should be redirected to the home page

  Scenario: Login fails with incorrect password
    When I enter email "verified.user@example.com" and password "wrongPassword1*"
    And I click the "Login" button
    Then I should see an error message saying "Invalid Password !"

  Scenario: Login fails when account is unverified
    When I enter email "unverified.user@example.com" and password "validPassword1*"
    And I click the "Login" button
    Then I should see a message saying "Verify Email ID" 
