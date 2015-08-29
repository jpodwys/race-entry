var AdminPricingDashboard = require('../../pages/AdminPricingDashboard');

module.exports = function(fetch, BASE_PATH, raceData, raceName){
  var adminPricingDashboard = new AdminPricingDashboard();
  if(fetch){
    adminPricingDashboard.fetch(BASE_PATH, 'race/' + raceName + '/pricing');
  }
  adminPricingDashboard.wait()
    .checkAllCategoryPrices(raceData.categories);
}
