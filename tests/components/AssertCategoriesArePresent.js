var AdminRaceDashboard = require('../../pages/AdminRaceDashboard');

module.exports = function(fetch, raceData){
  var adminRaceDashboard = new AdminRaceDashboard();
  if(fetch){
    adminRaceDashboard.fetch();
  }
  adminRaceDashboard.wait()
    .assertCategoriesArePresent(raceData.categories);
}
