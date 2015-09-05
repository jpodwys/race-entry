function CreateAccount() {
  var self = this;

  self.fetch = function (prefix, raceName) {
    browser.get(prefix + 'user');
    return self;
  }

  self.wait = function () {
    browser.wait(function() {
      return element.all(by.css('[alt="Easy race management"]')).then(function (items){
        return items.length > 0;
      });
    }, 5000, 'Page did not load.');
    return self;
  }

}

module.exports = CreateAccount;
