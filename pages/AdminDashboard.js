function AdminDashboard() {
  this.button_createRaceForm = element(by.linkText('Create Race Registration Form'));
  this.button_createCalendarListing = element(by.linkText('Create Race Registration Form'));
  this.button_createRaceMap = element(by.linkText('Create Race Registration Form'));

  this.fetch = function (prefix) {
    browser.get(prefix + 'user');
    return this;
  }
}

module.exports = AdminDashboard;
