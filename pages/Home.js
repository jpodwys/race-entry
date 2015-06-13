function Home() {
  this.loginExpandButton = element(by.id('logInDrawer'));
  this.emailInput = element(by.css('[name="email"]'));
  this.passwordInput = element(by.css('[name="password"]'));
  this.loginSubmitButton = element(by.css('div.login-drawer button[type="submit"]'));

  this.fetch = function (prefix) {
    browser.get(prefix);
    return this;
  }

  this.login = function (username, password) {
    this.loginExpandButton.click().click();
    this.emailInput.sendKeys(username);
    this.passwordInput.sendKeys(password);
    this.loginSubmitButton.click();
  }
}

module.exports = Home;
