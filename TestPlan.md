# TEST PLAN

## 1. Project Overview

**Bloogo** is a full-stack blogging application built using the FARM stack (FastAPI, React, MongoDB). It enables users to register, authenticate, create and publish blog posts using Markdown, upload images, manage profiles, and explore posts using a robust search and tagging system.

This test plan outlines the strategy for verifying the critical functionality and performance of the app.

---

## 2. Test Scope and Objectives

### Scope

- End-to-end testing of the frontend user flows using Cypress.
- API testing of backend endpoints using Robot Framework.
- Gherkin-based test case tracking with Xray for Jira integration.
- Testing both functional and negative cases.
- Ensure that authentication, blog creation, tagging, uploading, and search functionalities work as expected.

### Objectives

- Ensure critical features are working without regressions.
- Validate API responses and error handling.
- Confirm secure access control using JWT and email verification.
- Provide visibility of test coverage and execution in Jira via Xray.
- Provide confidence in production deployments.

---

## 3. Test Approach

| Area               | Tool            | Type          | Status      |
| ------------------ | --------------- | ------------- | ----------- |
| Frontend (UI)      | Cypress         | Automated E2E | ✅ Planned  |
| Backend (API)      | Robot Framework | Automated API | ✅ Planned  |
| Test Case Mgmt     | Gherkin + Xray  | Traceability  | ✅ Planned  |
| Manual Exploratory | None            | Manual        | ✅ Optional |

- Automated tests will be prioritized.
- Manual tests will be done for new feature smoke tests before automation is added.
- Test scenarios will be written in Gherkin format and synchronized with Jira/Xray.

---

## 4. Test Environment Requirements

### Backend

- Python 3.10+
- FastAPI running on `http://localhost:8000`
- MongoDB instance
- Cloudinary and email credentials set up in `.env`

### Frontend

- Node.js and npm
- React dev server running on `http://localhost:5173`

### Testing Tools

- **Cypress** (installed locally via npm or globally)
- **Robot Framework** with `RequestsLibrary`
- **Xray for Jira** (Cloud version or server version)
- CI/CD integration (e.g., GitHub Actions) for syncing test results

---

## 5. Gherkin + Xray Integration Strategy

### Purpose

We use Gherkin syntax (`.feature` files) to define business-readable acceptance criteria. These files are integrated with **Xray for Jira**, enabling:

- Traceability of requirements to test scenarios.
- Execution tracking directly in Jira.
- Automated generation of test execution reports.
- Alignment between QA, product, and development teams.

### Workflow

1. Write `.feature` files for each major user story or feature.
2. Commit `.feature` files.
3. Sync feature files with Jira using Xray's REST API or CI/CD plugin.
4. Execute tests locally or in CI using Cypress or Robot Framework.
5. Upload test execution results to Xray in Jira using supported format (e.g., JSON, JUnit, or Cucumber).
6. Link execution to corresponding Jira issues for visibility.

### Reporting

- Test execution reports will be automatically uploaded to Xray after CI runs.
- Dashboards in Jira will show:
  - Pass/fail status per test
  - Coverage by feature/module
  - Execution history
  - Defects linked to failed scenarios

---

## 6. Critical User Flow Test Cases

| #   | Title                   | Description                                                | Type      |
| --- | ----------------------- | ---------------------------------------------------------- | --------- |
| 1   | User Registration       | Ensure a new user can register with valid input            | E2E + API |
| 2   | User Login              | Validate login with correct and incorrect credentials      | E2E + API |
| 3   | Email Verification      | Ensure user cannot login before verifying account          | API       |
| 4   | JWT Authenticated Route | Access protected routes with/without JWT                   | API       |
| 5   | Blog Creation           | User creates a blog using Markdown with tags and thumbnail | E2E       |
| 6   | Blog Visibility         | Blog appears on homepage after creation                    | E2E       |
| 7   | Search Blogs            | Users can search blogs by title, content, or tag           | E2E       |
| 8   | Profile Update          | User updates profile image and bio                         | E2E + API |
| 9   | Tag Filtering           | Filter blogs by clicking on tags                           | E2E       |
| 10  | Logout                  | User is logged out and cannot access protected routes      | E2E       |

---

## 7. Risk Assessment and Test Prioritization

| Feature         | Risk Level | Priority | Reason                              |
| --------------- | ---------- | -------- | ----------------------------------- |
| Auth System     | High       | High     | Affects access control and security |
| Blog Creation   | High       | High     | Core user action                    |
| Search & Tags   | Medium     | Medium   | Impacts discoverability             |
| Profile Editing | Low        | Low      | Not critical to core function       |
| UI Animations   | Low        | Low      | Purely aesthetic                    |

---

## 8. Defect Reporting Procedure

1. **Identification**: If a test fails, collect error details (stack trace, logs, screenshot).
2. **Documentation**: Report the issue on GitHub under the **Issues** tab with:
   - Title
   - Steps to reproduce
   - Expected vs. actual behavior
   - Screenshot/video if applicable
3. **Severity Tagging**:
   - `critical`: Breaks core user flow (e.g., login fails)
   - `high`: Major functionality broken (e.g., blog creation fails)
   - `medium`: Non-core functionality fails (e.g., profile update)
   - `low`: Minor UI or UX issue
4. **Assignment & Tracking**: Assign the issue to a developer and set appropriate labels (`bug`, `frontend`, `backend`, etc.).

---
