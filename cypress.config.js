const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',//for HTML reports
  projectId: "tsa67f",
  defaultCommandTimeout: 30000,
  experimentalStudio: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  reporterOptions: {
    charts: true,  //It will Generates Chart in HTML report.
    reportPageTitle: 'Cypress Inline Reporter', //It will setReport title.
    embeddedScreenshots: true, 
    videoOnFailOnly: false,
    inlineAssets: true, //Adds the asserts inline
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config),
      //on = cypressOnFix(on),
      require('cypress-mochawesome-reporter/plugin')(on),
      require('cypress-failed-log/on')(on)
      },
    //excludeSpecPattern: '*.js',
    //specPattern: 'cypress/integration/**/*.{feature,features}',
    specPattern: 'cypress/integration',
  },
  retries: {
      openMode: 2
  },
  compilerOptions: {
    "types": ["cypress", "@4tw/cypress-drag-drop"]
    }

})
