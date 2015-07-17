exports.config = {
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  jasmineOpts: {
    defaultTimeoutInterval: 450000
  },
  specs: [
    'tests/CreateRaceBasic.js'
  ]
};
