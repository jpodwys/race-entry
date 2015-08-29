var AdminRaceDashboard = require('../../pages/AdminRaceDashboard');

module.exports = function(fetch, raceData){
  new AdminRaceDashboard()
    .wait()
    .assertCategoriesArePresent(raceData.categories);
}
