var AdminDashboard = require('../../pages/AdminDashboard');

module.exports = function(fetch, BASE_PATH, raceData){
  var adminDashboard = new AdminDashboard();
  if(fetch){
    adminDashboard.fetch(BASE_PATH, 'race/events/past');
  }
  adminDashboard.wait()
    .assertRaceIsPresent(BASE_PATH, raceData.input_raceName)
    .goToRaceDashboard(BASE_PATH, raceData.input_raceName);
}
