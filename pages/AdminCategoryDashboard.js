function AdminCategoryDashboard() {

  var self = this;


  // this.button_createRaceForm = element(by.css('[data-test="create-a-race"]'));
  // this.button_createCalendarListing = element(by.linkText('Create Race Registration Form'));
  // this.button_createRaceMap = element(by.linkText('Create Race Registration Form'));

  // this.fetch = function (prefix) {
  //   browser.get(prefix + 'user');
  //   return this;
  // }

  self.wait = function () {
    browser.wait(function() {
      return element.all(by.css('.fa.fa-edit')).then(function (items){
        return items.length > 0;
      });
    }, 5000, 'Page did not load.');
    return self;
  }

  self.assertDataIsCorrect = function (category) {
    browser.wait(function() {
      return element.all(by.css('.poop')).then(function (items){
        return true;//items.length > 0;
      });
    }, 5000, 'Page did not load.');
    return self;
  }

}

module.exports = AdminCategoryDashboard;
