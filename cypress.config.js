const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    path: '',
    baseUrl: 'https://api-v2.soundcloud.com',
    env: {
      soundcloudClientId: 'qIsnuT4woy3zneMi00if66W55qF2zs7J',
      soundcloudAuthToken: '2-310702-1588398354-gkXTtpzWKoCwc'
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});