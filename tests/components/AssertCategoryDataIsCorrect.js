var AdminRaceDashboard = require('../../pages/AdminRaceDashboard');
var AdminCategoryDashboard = require('../../pages/AdminCategoryDashboard');

module.exports = function(fetch, BASE_PATH, raceData, raceName){
  if(fetch){
    new AdminRaceDashboard()
      .fetch(BASE_PATH, raceName)
      .wait();
  }
  var executeCategoryDashboardCheck = function (index) {
    if(index > 0){
      new AdminRaceDashboard()
        .fetch(BASE_PATH, raceName)
        .wait();
    }
    element(by.linkText(raceData.categories[index].name)).click();
    new AdminCategoryDashboard()
      .wait()
      .assertDataIsCorrect(raceData.categories[index]);
  }
  for(var i = 0; i < raceData.categories.length; i ++){
    executeCategoryDashboardCheck(i);
  }
}
