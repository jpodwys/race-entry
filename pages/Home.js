function Home() {
  var self = this;

  self.button_loginExpand = element(by.id('logInDrawer'));
  self.input_email = element(by.css('[name="email"]'));
  self.input_password = element(by.css('[name="password"]'));
  self.button_loginSubmit = element(by.css('div.login-drawer button[type="submit"]'));
  self.button_signUp = element(by.linkText('SIGN UP'));

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
    self.button_loginExpand.click().click();
    self.input_email.sendKeys(username);
    self.input_password.sendKeys(password);
    self.button_loginSubmit.click();
  }

  self.clickSignUpButton = function () {
    self.button_signUp.click();
  }
}

module.exports = Home;
