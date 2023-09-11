const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '3t2gaq',
  e2e: {
    baseUrl: 'http://localhost:4321',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
  },
});
