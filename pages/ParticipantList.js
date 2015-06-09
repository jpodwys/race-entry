function ParticipantList() {

  this.fetch = function () {
    browser.get('http://v2.raceentry.com/');
    return this;
  }
}

module.exports = Home;
