import { defineConfig } from "cypress"

export default defineConfig({
  projectId: 'bxvjsf',

  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://localhost:5000',
    supportFile: 'tests/e2e/cypress/support/e2e.ts',
    specPattern: 'tests/e2e/cypress/e2e/**/*.cy.ts',
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 60000,
  }
})
