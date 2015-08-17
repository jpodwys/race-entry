exports.config = {
  seleniumServerJar: '../protractor/selenium/selenium-server-standalone-2.45.0.jar',
  jasmineOpts: {
    defaultTimeoutInterval: 450000
  },
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1
  },
  specs: [
    'tests/CreateRaceIndividual.js',
    'tests/CreateRaceTeam.js'
  ]
};
