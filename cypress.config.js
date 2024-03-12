const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://onetrack.industrack.com/login',
    specPattern: 'cypress/e2e/**/*.test.{js,jsx,ts,tsx}',
    chromeWebSecurity : false
  },
});
