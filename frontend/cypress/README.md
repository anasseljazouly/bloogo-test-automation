# 🧪 Cypress + Cucumber E2E Tests (Bloogo Frontend)

This directory contains end-to-end (E2E) tests for the Bloogo frontend using [Cypress](https://www.cypress.io/) and the [`@badeball/cypress-cucumber-preprocessor`](https://github.com/badeball/cypress-cucumber-preprocessor).

Tests are written in Gherkin (`.feature` files) and paired with TypeScript step definitions.

---

## 🧩 Setup Instructions

Make sure all dependencies are installed before running tests:

From the `frontend` directory:

```bash
npm install
cd cypress
npm install
```

---

## 🚀 Running the Tests

### ✅ Open Cypress in Interactive Mode

To open the Cypress UI and run tests interactively:

```bash
npx cypress open
```

This will launch the Cypress UI, where you can select `.feature` files located in `cypress/e2e/features`.

---

### ⚙️ Run All Tests in Headless Mode

To execute all tests in the terminal (without the UI):

```bash
npx cypress run
```

---

### 🧪 Run a Specific Feature File

To run a specific `.feature` file:

```bash
npx cypress run --spec "e2e/features/<folder>/<subFolder>/<file>.feature"
```

#### Example:

```bash
npx cypress run --spec "e2e/features/Authentication/Login/01-user-login.feature"
```

This will run only the `01-user-login.feature` tests.

---

## 📊 Test Reports

After running the tests, results are stored in the `cypress/e2e/results` directory. These include:

- **📝 JSON report** – can be synchronized with **Xray for Jira**
- **📸 Screenshots** – captured on test failure
- **🎥 Videos** – recorded for all test runs

### Default Paths

- Screenshots: `cypress/e2e/results/screenshots/`
- Videos: `cypress/e2e/results/videos/`
- JSON reports (for Xray): `cypress/e2e/results/reports/`
