/* eslint-disable no-undef */
module.exports = {
  mochawesomeReporterOptions: {
    consoleReporter: 'none',
    html: false,
    json: true,
    overwrite: true,
    reportDir: 'e2e/results/reports',
    reportFilename: '[name]-report.json'
  },
  reporterEnabled: `mochawesome,${require.resolve(
    '@badeball/cypress-cucumber-preprocessor/pretty-reporter'
  )}`
};
