var config = require('../../config/configData');
var Home = require('../../pages/Home');

module.exports = function(fetch, BASE_PATH){
  var home = new Home();
  if(fetch){
    home.fetch(BASE_PATH);
  } 
  home.wait()
    .login(config.credentials.username, config.credentials.password);
}
