var Home = require('../pages/Home');
var AdminDashboard = require('../pages/AdminDashboard');
var CreateRace = require('../pages/CreateRace');

describe('Home Page test', function() {
  browser.ignoreSynchronization = true;

  it('Should load the home page', function() {
    new Home()
      .fetch()
      .login('joseph@podwys.com', 'testAccount');
    new AdminDashboard()
      .createRaceFormButton.click();
    new CreateRace();
  });
});