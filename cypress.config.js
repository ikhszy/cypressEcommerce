const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dqow5a',
  e2e: {
  baseUrl: 'https://automationteststore.com/index.php',
  chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
