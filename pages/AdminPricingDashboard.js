function AdminPricingDashboard() {
  var self = this;

  self.selector_priceRow = '.price_row';
  self.selector_allCategories = '[id^="category_"]:not([type="hidden"])';
  self.selector_categoryName = 'h2';
  self.selector_categoryIndividualPrice = '[name^="individual["]';
  self.selector_categoryCreatePrice = '[name^="create["]';
  self.selector_categoryJoinPrice = '[name^="join["]';

  self.fetch = function (prefix, suffix) {
    suffix = suffix || 'pricing';
    browser.get(prefix + suffix);
    return self;
  }

  self.wait = function () {
    browser.wait(function() {
      return element.all(by.css(self.selector_priceRow)).then(function (items){
        return items.length > 0;
      });
    }, 5000, 'Page did not load.');
    return self;
  }

  self.checkAllCategoryPrices = function (raceCategories) {
    element.all(by.css(self.selector_allCategories)).then(function (uiCategories){
      expect(raceCategories.length).toEqual(uiCategories.length);
      for(var i = 0; i < raceCategories.length; i++){
        self.checkCategoryPrice(raceCategories[i], uiCategories[i]);
      }
    });
  }

  self.checkCategoryPrice = function (raceCategory, uiCategory) {
    getText(uiCategory, self.selector_categoryName).then(function (text){
      expect(raceCategory.name).toEqual(text);
    });
    if(raceCategory.type == 'individual'){
      getValue(uiCategory, self.selector_categoryIndividualPrice).then(function (text){
        expect(raceCategory.beginningPrice).toEqual(text);
      });
    }
    else if(raceCategory.type == 'team'){
      getValue(uiCategory, self.selector_categoryCreatePrice).then(function (text){
        expect(raceCategory.createTeamPrice).toEqual(text);
      });
      getValue(uiCategory, self.selector_categoryJoinPrice).then(function (text){
        expect(raceCategory.joinTeamPrice).toEqual(text);
      });
    }
  }

  function getText (parent, selector) {
    return parent.element(by.css(selector)).getText();
  }

  function getValue (parent, selector) {
    return parent.element(by.css(selector)).getAttribute('value');
  }
}

module.exports = AdminPricingDashboard;
