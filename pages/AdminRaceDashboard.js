function AdminRaceDashboard() {
  // this.button_createRaceForm = element(by.css('[data-test="create-a-race"]'));
  // this.button_createCalendarListing = element(by.linkText('Create Race Registration Form'));
  // this.button_createRaceMap = element(by.linkText('Create Race Registration Form'));

  var self = this;

  self.fetch = function (prefix, raceName) {
    browser.get(prefix + 'race/' + raceName);
    return self;
  }

  self.wait = function () {
    browser.wait(function() {
      return element.all(by.css('[data-target="#myModal"]')).then(function (items){
        return items.length > 0;
      });
    }, 5000, 'Page did not load.');
    return self;
  }

  self.assertCategoriesArePresent = function (categories) {
    browser.wait(function() {
      return element.all(by.css('.table-striped.table-bordered.dashboard-table tr')).then(function (rows){
        return rows.length == categories.length + 2;
      });
    }, 250, 'Incorrect number of categories.');

    var execute = function(index){
      browser.wait(function() {
        var selector = '';
        return element.all(by.linkText(categories[index].name)).then(function (links){
          return links.length > 0;
        });
      }, 250, 'Category link not found.');
    }

    for(var i = 0; i < categories.length; i++){
      execute(i);
    }
    return self;
  }

}

module.exports = AdminRaceDashboard;
