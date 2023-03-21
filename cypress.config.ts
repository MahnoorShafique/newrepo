import { defineConfig } from 'cypress'

export default defineConfig({
        projectId: '4rysa7',
        "chromeWebSecurity": false,
        "reporter": "mochawesome",
      "reporterOptions": {
        "charts": true,
        "overwrite": false,
        "html": false,
        "json": true,
        "reportDir": "cypress/report"
  },
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      // bind to the event we care about
        on('task', {
            setGlobal(value: any) {
                config.env.data = value
                return null;
            },

            getGlobal() {
                return config.env.data
            },
        })
    },
    //projectId: "4rysa7"
  }
})
