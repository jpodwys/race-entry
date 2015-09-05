var config = require('../config/configData');
var Base = require('../pages/Base');
var BasePage = new Base();
var BASE_PATH = BasePage.basePath;
var Home = require('../pages/Home');
var CreateAccount = require('../pages/CreateAccount');
var User = require('../pages/User');
var credentials = config.newAccountCredentials;

describe('Create a race director account', function() {
  browser.driver.manage().window().maximize();
  it('Should create a race director account', function() {
    new Home()
      .fetch(BASE_PATH)
      .wait()
      .clickSignUpButton();
    new CreateAccount()
      .fillForm(credentials)
      .submitForm();
    new User()
      .wait();
  });
});
