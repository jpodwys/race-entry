function AdminDashboard() {

  var self = this;

  self.selector_createRaceForm = '[data-test="create-a-race"]';

  self.button_createRaceForm = element(by.css(self.selector_createRaceForm));
  self.button_createCalendarListing = element(by.linkText('Create Race Registration Form'));
  self.button_createRaceMap = element(by.linkText('Create Race Registration Form'));

  self.selector_allRaces = '';
  self.selector_raceName = '';

  self.fetch = function (prefix, suffix) {
    suffix = suffix || 'user';
    browser.get(prefix + suffix);
    return self;
  }

  self.wait = function () {
    browser.wait(function() {
      return element.all(by.css(self.selector_createRaceForm)).then(function (items){
        return items.length > 0;
      });
    }, 5000, 'Page did not load.');
    return self;
  }

  self.getAllRaces = function () {
    return element.all(by.css(self.selector_allCategories));
  }

  //self.wait();
}

module.exports = AdminDashboard;
