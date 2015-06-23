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
      .button_createRaceForm.click();
    new CreateRace();


    browser.wait(function() {
      return element.all(by.css('[class*="category-"]:not(.category-ids)')).then(function(elements) {
        expect(elements.length).toEqual(1)
        return elements.length === 1;
      });
    }, 5000, "There is not exactly 1 category.");

  });
});
