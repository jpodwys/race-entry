var config = require('../config/configData');
var raceData = config.raceDataBasic();
var Base = require('../pages/Base');
var Home = require('../pages/Home');
var AdminDashboard = require('../pages/AdminDashboard');
var CreateRace = require('../pages/CreateRace');
var CustomizeRace = require('../pages/CustomizeRace');
var BasePage = new Base();
var BASE_PATH = BasePage.basePath;

describe('Home Page test', function() {
  //browser.ignoreSynchronization = true;

  it('Should load the home page', function() {
    new Home()
      .fetch(BASE_PATH)
      .login(config.credentials.username, config.credentials.password);
    new AdminDashboard()
      .button_createRaceForm.click();
    var CreateRacePage = new CreateRace()
    CreateRacePage.fillForm(raceData);

    CreateRacePage.getAllCategories().then(function (categories){
      var category = categories[0];
      var categoryData = raceData.categories[0];
      category.element(by.css(CreateRacePage.selector_categoryName)).getAttribute('value').then(function (text){
        expect(text).toEqual(categoryData.name);
        category.element(by.css(CreateRacePage.selector_categoryDistance)).getAttribute('value').then(function (text){
          expect(text).toEqual(categoryData.distance);
          category.element(by.css(CreateRacePage.selector_categoryBeginningPrice)).getAttribute('value').then(function (text){
            expect(text).toEqual(categoryData.beginningPrice);
            category.element(by.css(CreateRacePage.selector_categoryParticipantLimit)).getAttribute('value').then(function (text){
              expect(text).toEqual(categoryData.participantLimit);
            });
          });
        });
      });
    });

    // browser.wait(function() {
    //   return element.all(by.css('[class*="category-"]:not(.category-ids)')).then(function(elements) {
    //     expect(elements.length).toEqual(2)
    //     return elements.length === 2;
    //   });
    // }, 10000, "There are not exactly s categories.");

    CreateRacePage.button_submit.click();

    new CustomizeRace()
      .wait();
    new AdminDashboard()
      .fetch(BASE_PATH, 'race/events/past')
      .wait();

    var href = BASE_PATH + 'race/' + raceData.input_raceName.replace(/ /g, '-').toLowerCase() + '/' + new Date().getFullYear();
    var selector = 'a[href="' + href + '"]';

    browser.wait(function() {
      return element.all(by.css(selector)).then(function (items){
        return items.length == 2;
      });
    }, (2000), 'Created race not found.');

    // var el = element(by.css(selector));
    // el.getText().then(function (text){
    //   console.log('TEXT', text);
    // });

    // AD.getAllRaces().then(function (races){
    //   expect(races.length).toBeGreaterThan(0);
    //   var race = races[0];
    //   race.element(by.css(AD.selector_raceName)).getText().then(function (text){
    //     text = text.substr(7, text.length - 7);
    //     expect(text).toEqual(raceData.input_raceName);
    //   });
    // });

  });
});
