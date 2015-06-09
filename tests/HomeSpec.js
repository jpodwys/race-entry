var H = require("../pages/Home");
var Home = new H();

describe('Home Page test', function() {
  browser.ignoreSynchronization = true;

  it('Should load the home page', function() {
    Home.fetch();

    Home.loginExpandButton.click().click();
    Home.emailInput.sendKeys('username');
    Home.passwordInput.sendKeys('password');

    expect(Home.emailInput.getAttribute('value')).toEqual('username');
    expect(Home.passwordInput.getAttribute('value')).toEqual('password');

    // var TIMEOUT = 5000;

    // browser.wait(function() {
    //   return Home.emailInput.getAttribute('value').then(function (text){
    //     expect(text).toEqual('username');
    //     return text === 'username';
    //   });
    // }, TIMEOUT, "Username was not set");

    // browser.wait(function() {
    //   return Home.passwordInput.getAttribute('value').then(function (text){
    //     expect(text).toEqual('password');
    //     return text === 'password';
    //   });
    // }, TIMEOUT, "Password was not set");
  });
});
