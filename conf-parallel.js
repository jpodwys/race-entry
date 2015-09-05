exports.config = {
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  jasmineOpts: {
    defaultTimeoutInterval: 450000
  },
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 3
  },
  specs: [
    'tests/CreateAccount.js',
    'tests/CreateRaceIndividual.js',
    'tests/CreateRaceTeam.js'
  ]
};
