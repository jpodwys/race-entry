var config = require('../config/configData');
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
    var CR = new CreateRace();
    var raceData = config.raceDataBasic();

    CR.getAllCategories().then(function (categories){
      var categoryData = raceData.categories[0];
      CR.fillCategory(categories[0], categoryData);
      categories[0].element(by.css('[data-test="category-name"]')).getAttribute('value').then(function (text){
        expect(text).toEqual(categoryData.categoryName);
      });
    });

    // browser.wait(function() {
    //   return CR.getAllCategories().then(function (categories){
    //   CR.fillCategory(categories[0], raceData.categories[0]);
    //     categories[0].element(by.css('[data-test="category-name"]')).getAttribute('value').then(function (text){
    //       return text === raceData.raceName;
    //     expect(text).toEqual(raceData.raceName);
    //   });
    // });
    // }, 5000, "There is not exactly 1 category.");



      // .getAllCategories().then(function(elements){
      //   expect(elements.length).toBe(1);
      // });

    // browser.wait(function() {
    //   return element.all(by.css('[class*="category-"]:not(.category-ids)')).then(function(elements) {
    //     expect(elements.length).toEqual(1)
    //     return elements.length === 1;
    //   });
    // }, 5000, "There is not exactly 1 category.");

    //CR.getAllCategories().then(function(elements){
      //console.log('ELEMENTS', elements);
      //expect(elements.length).toBe(1);
    //});

    // var p = CR.getAllCategories();
    // console.log(p);

  });
});
