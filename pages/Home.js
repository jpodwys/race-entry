function Home() {

  var self = this;

  self.loginExpandButton = element(by.id('logInDrawer'));
  self.emailInput = element(by.css('[name="email"]'));
  self.passwordInput = element(by.css('[name="password"]'));
  self.loginSubmitButton = element(by.css('div.login-drawer button[type="submit"]'));

  self.fetch = function (prefix) {
    browser.get(prefix);
    return self;
  }

  self.wait = function () {
    browser.wait(function() {
      return element.all(by.id('logInDrawer')).then(function (items){
        return items.length > 0;
      });
    }, 15000, 'Page did not load.');
    return self;
  }

  self.login = function (username, password) {
    self.loginExpandButton.click().click();
    self.emailInput.sendKeys(username);
    self.passwordInput.sendKeys(password);
    self.loginSubmitButton.click();
  }

}

module.exports = Home;
