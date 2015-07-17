var config = require('../config/configData');
var raceData = config.raceDataBasic();
var Base = require('../pages/Base');
var Home = require('../pages/Home');
var AdminDashboard = require('../pages/AdminDashboard');
var CreateRace = require('../pages/CreateRace');
var CustomizeRace = require('../pages/CustomizeRace');
var AdminRaceDashboard = require('../pages/AdminRaceDashboard');
var AdminCategoryDashboard = require('../pages/AdminCategoryDashboard');
var BasePage = new Base();
var BASE_PATH = BasePage.basePath;

describe('Home Page test', function() {
  //browser.ignoreSynchronization = true;
  
  it('Should load the home page', function() {
    //require('./components/ComponentLogin');
    new Home()
      .fetch(BASE_PATH)
      .wait()
      .login(config.credentials.username, config.credentials.password);
    new AdminDashboard()
      .wait()
      .button_createRaceForm.click();
    new CreateRace()
      .wait()
      .fillForm(raceData)
      .button_submit.click();
    new CustomizeRace()
      .wait();
    new AdminDashboard()
      .fetch(BASE_PATH, 'race/events/past')
      .wait()
      .assertRaceIsPresent(BASE_PATH, raceData.input_raceName)
      .goToRaceDashboard(BASE_PATH, raceData.input_raceName);
    new AdminRaceDashboard()
      .wait()
      .assertCategoriesArePresent(raceData.categories);

    var raceName = raceData.input_raceName.replace(/ /g, '-').toLowerCase() + '/' + new Date().getFullYear();
    var execute = function (index) {
      if(index > 0){
        new AdminRaceDashboard()
          .fetch(BASE_PATH, raceName)
          .wait();
          element(by.linkText(raceData.categories[index].name)).click();
      }
      new AdminCategoryDashboard()
        .wait()
        .assertDataIsCorrect(raceData.categories[index]);
    }
    for(var i = 0; i < raceData.categories.length; i ++){
      execute(i);
    }

  });
});

