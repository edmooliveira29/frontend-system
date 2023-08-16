import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    supportFile:'tests/e2e/cypress/support/e2e.ts',
    specPattern:'tests/e2e/cypress/e2e/**.cy.ts',
    video: false
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    }
  },
})
