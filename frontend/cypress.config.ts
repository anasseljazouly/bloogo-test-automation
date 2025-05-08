import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

const reporter = await import('cypress-multi-reporters').then(
  (mod) => mod.default
);

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  e2e: {
    excludeSpecPattern: ['*.js', '*.ts', '*.md'],
    reporter,
    reporterOptions: {
      configFile: `reporter-config.js`
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );
      return config;
    },
    fixturesFolder: 'cypress/e2e/fixtures',
    supportFile: 'cypress/e2e/support/e2e.ts',
    specPattern: 'cypress/e2e/features/**/*.feature'
  },
  execTimeout: 10000,
  requestTimeout: 10000,
  retries: 0,
  screenshotsFolder: `cypress/results/screenshots`,
  video: true,
  videoCompression: 0,
  videosFolder: `cypress/results/videos`
});
