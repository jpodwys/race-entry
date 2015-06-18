var Base = require('../pages/Base');
var Home = require('../pages/Home');
var AdminDashboard = require('../pages/AdminDashboard');
var CreateRace = require('../pages/CreateRace');

var BasePage = new Base();
var BASE_PATH = BasePage.basePath;

describe('Home Page test', function() {
  browser.ignoreSynchronization = true;

  it('Should load the home page', function() {
    new Home()
      .fetch(BASE_PATH)
      .login('joseph@podwys.com', 'testAccount');
    new AdminDashboard()
      .createRaceFormButton.click();
    new CreateRace();
  });
});

