function AdminDashboard() {
  this.createRaceFormButton = element(by.linkText('Create Race Registration Form'));
  this.createCalendarListingButton = element(by.linkText('Create Race Registration Form'));
  this.createRaceMapButton = element(by.linkText('Create Race Registration Form'));

  this.fetch = function (prefix) {
    browser.get(prefix + 'user');
    return this;
  }
}

module.exports = AdminDashboard;
