var config = require('../config/configData');
var Base = require('../pages/Base');
var AdminDashboard = require('../pages/AdminDashboard');
var CustomizeRace = require('../pages/CustomizeRace');
var BasePage = new Base();
var BASE_PATH = BasePage.basePath;
var raceData = config.raceDataIndividual();

describe('Create Race Individual', function() {
  browser.driver.manage().window().maximize();
  it('Should create a race with two individual categories', function() {
    new require('./components/Login')(true, BASE_PATH);
    new AdminDashboard().wait().button_createRaceForm.click();
    new require('./components/CreateRace')(false, raceData);
    new CustomizeRace().wait();
    new require('./components/AssertRaceWasCreated')(true, BASE_PATH, raceData);
    new require('./components/AssertCategoriesArePresent')(false, raceData);
    var raceName = raceData.input_raceName.replace(/ /g, '-').toLowerCase() + '/' + new Date().getFullYear();
    new require('./components/AssertCategoryDataIsCorrect')(false, BASE_PATH, raceData, raceName);
    new require('./components/AssertCategoryPricesAreCorrect')(true, BASE_PATH, raceData, raceName);
  });
});
