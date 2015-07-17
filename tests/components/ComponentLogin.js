var config = require('../../config/configData');
var Base = require('../../pages/Base');
var Home = require('../../pages/Home');
var BasePage = new Base();
var BASE_PATH = BasePage.basePath;

module.exports = new Home()
  .fetch(BASE_PATH)
  .wait()
  .login(config.credentials.username, config.credentials.password);
