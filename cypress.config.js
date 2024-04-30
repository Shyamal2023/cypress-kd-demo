const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  experimentalStudio: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    //excludeSpecPattern: '*.js',
    //specPattern: 'cypress/integration/**/*.{feature,features}',
    specPattern: 'cypress/integration',
  },
  retries: {
      openMode: 0
  },
  compilerOptions: {
    "types": ["cypress", "@4tw/cypress-drag-drop"]
    }

})
