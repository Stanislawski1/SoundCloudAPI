const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api-v2.soundcloud.com',
    env: {
      soundcloudClientId: 'qIsnuT4woy3zneMi00if66W55qF2zs7J'
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});