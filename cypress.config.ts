import { defineConfig } from "cypress"

export default defineConfig({
  projectId: 'bxvjsf',

  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://localhost:5000',
    supportFile: 'tests/e2e/cypress/support/e2e.ts',
    specPattern: 'tests/e2e/cypress/e2e/**/*.cy.ts',
    video: false,
    screenshotOnRunFailure: false,
    fixturesFolder: false,
    defaultCommandTimeout: 60000,
  },
  downloadsFolder: 'cypress/downloads',
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
})
