const { defineConfig } = require("cypress")

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  pageLoadTimeout: 120000,
  e2e: {
    baseUrl: 'https://automationteststore.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})