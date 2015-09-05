function CreateAccount() {
  var self = this;

  self.input_firstName = element(by.id('first_name'));
  self.input_lastName = element(by.id('last_name'));
  self.input_organization = element(by.id('organization'));
  self.input_phone = element(by.id('phone'));
  self.input_email = element(by.id('email'));
  self.input_password = element(by.id('password'));
  self.input_accountType = element(by.id('account_type_id'));
  self.input_acceptTerms = element(by.css('[name="terms"][value="1"]'));
  self.button_submit = element(by.id('create'));

  self.fetch = function (prefix, raceName) {
    browser.get(prefix + 'account/create');
    return self;
  }

  self.wait = function () {
    browser.wait(function() {
      return element.all(by.id('[name="first_name"]')).then(function (items){
        return items.length > 0;
      });
    }, 5000, 'Page did not load.');
    return self;
  }

  self.fillForm = function (account){
    for(var key in account){
      if(account.hasOwnProperty(key)){
        if(key == 'input_accountType'){
          self[key].element(by.css(account[key])).click();
        }
        else{
          console.log('key', key);
          self[key].click().sendKeys(account[key]);
        }
      }
    }
    self.input_acceptTerms.click();
    return self;
  }

  self.submitForm = function () {
    self.button_submit.click();
  }

}

module.exports = CreateAccount;
