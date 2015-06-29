var config = require('../config/configData');
var raceData = config.raceDataBasic();
var Base = require('../pages/Base');
var Home = require('../pages/Home');
var AdminDashboard = require('../pages/AdminDashboard');
var CreateRace = require('../pages/CreateRace');
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
    var CR = new CreateRace()
    CR.fillForm(raceData);

    CR.getAllCategories().then(function (categories){
      var category = categories[0];
      var categoryData = raceData.categories[0];
      category.element(by.css(CR.selector_categoryName)).getAttribute('value').then(function (text){
        expect(text).toEqual(categoryData.name);
        category.element(by.css(CR.selector_categoryDistance)).getAttribute('value').then(function (text){
          expect(text).toEqual(categoryData.distance);
          category.element(by.css(CR.selector_categoryBeginningPrice)).getAttribute('value').then(function (text){
            expect(text).toEqual(categoryData.beginningPrice);
            category.element(by.css(CR.selector_categoryParticipantLimit)).getAttribute('value').then(function (text){
              expect(text).toEqual(categoryData.participantLimit);
            });
          });
        });
      });
    });

    // browser.wait(function() {
    //   return element.all(by.css('[class*="category-"]:not(.category-ids)')).then(function(elements) {
    //     expect(elements.length).toEqual(1)
    //     return elements.length === 1;
    //   });
    // }, 5000, "There is not exactly 1 category.");

  });
});
