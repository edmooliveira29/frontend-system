import { defineConfig } from "cypress"

export default defineConfig({
  projectId: 'bxvjsf',
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    supportFile: 'tests/e2e/cypress/support/e2e.ts',
    specPattern: 'tests/e2e/cypress/e2e/**/*.cy.ts',
    video: false,
    screenshotOnRunFailure: false,
    fixturesFolder: false,
    defaultCommandTimeout: 60000
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
})
