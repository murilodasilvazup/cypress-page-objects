const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    env: {
        "USERNAME": "Admin",
        "PASSWORD": "admin123"
    }
    
  }
})
