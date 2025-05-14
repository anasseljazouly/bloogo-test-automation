import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import { createTestUser, deleteTestUser } from './e2e/support/tasks';

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  e2e: {
    excludeSpecPattern: ['*.js', '*.ts', '*.md'],
    reporter: require.resolve('cypress-multi-reporters'),
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
      on('task', {
        createTestUser,
        deleteTestUser
      });
      return config;
    },
    fixturesFolder: 'e2e/fixtures',
    supportFile: 'e2e/support/e2e.ts',
    specPattern: 'e2e/features/**/*.feature'
  },
  execTimeout: 10000,
  requestTimeout: 10000,
  retries: 0,
  screenshotsFolder: `e2e/results/screenshots`,
  video: true,
  videoCompression: 0,
  videosFolder: `e2e/results/videos`
});
