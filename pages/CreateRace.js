function CreateRace() {
  var self = this;

  //Basic Race Information
  self.input_raceName = element(by.css('[data-test="race-name"][name="race_name"]'));
  self.input_raceDescription = element(by.css('[data-test="race-description"]'));
  self.input_raceUrl = element(by.css('[data-test="race-external-url"]'));
  self.input_raceType = element(by.css('[data-test="race-type-id"]'));

  //Contact Information
  self.input_contactFirstName = element(by.css('[data-test="contact-first-name"]'));
  self.input_contactLastName = element(by.css('[data-test="contact-last-name"]'));
  self.input_contactEmail = element(by.css('[data-test="contact-email"]'));

  //Upload Race Logo
  //self.input_raceLogo = element(by.css('[data-test=""]'));

  //Where and When
  self.input_raceDate = element(by.css('[data-test="race-year-datetime"]'));
  self.input_raceStreet = element(by.css('[data-test="race-year-address"]'));
  self.input_raceCity = element(by.css('[data-test="race-year-city"]'));
  self.input_raceState = element(by.css('[data-test="race-year-state"]'));
  self.input_raceZip = element(by.css('[data-test="race-year-zipcode"]'));
  self.input_createRegistrationForm = element(by.css('[data-test="create-registration"]'));

  //Checks Payable Information
  self.input_payEntity = element(by.css('[data-test="entity-name"]'));
  self.input_payAddress = element(by.css('[data-test="entity-address"]'));
  self.input_payCity = element(by.css('[data-test="entity-city"]'));
  self.input_payState = element(by.css('[data-test="entity-state"]'));
  self.input_payZip = element(by.css('[data-test="entity-zipcode"]'));

  //Registration Information
  self.input_openRegistrationLater = element(by.css('[data-test="open-reg-later"]'));
  self.input_registrationOpens = element(by.css('[data-test="registration-opens-datetime"]'));
  self.input_chargeRegistrationTax = element(by.css('[data-test="charge-tax"]'));
  self.input_registrationTaxRate = element(by.css('[data-test="tax-charge"]'));
  self.input_optionalRaceWaiver = element(by.css('[data-test="race-registration-waiver"]'));
  self.input_registrationEnds = element(by.css('[data-test="race-registration-ends"]'));

  //Categories
  self.selector_allCategories = '[class*="category-"]:not(.category-ids)';
  self.selector_categoryName = '[data-test="category-name"]';
  self.selector_categoryDistance = '[data-test="category-distance"]';
  self.selector_categoryDistanceUnits = '[data-test="category-distance-units"]';
  self.selector_categoryTypeIndividual = '[data-test="category-type-individual"]';
  self.selector_categoryBeginningPrice = '[data-test="beginning-price"]';
  self.selector_categoryTypeTeamInput = '[data-test="category-type-team"]';
  self.selector_categoryTeamCreateTeamPrice = '[data-test="team-price-create"]';
  self.selector_categoryTeamJoinTeamPrice = '[data-test="team-price-join"]';
  self.selector_categoryTeamMaxTeamMembers = '[data-test="team-max-members"]';
  self.selector_categoryParticipantLimit = '[data-test="participant-limit"]';
  self.selector_removeCategory = '[data-test="remove-category"]';
  self.button_addCategory = element(by.css('[data-test="add-category"]'));

  //Terms and Conditions
  self.input_initials = element(by.css('[data-test="terms-initials"]'));
  self.button_submit = element(by.id('save-button'));

  self.fetch = function (prefix) {
    browser.get(prefix + 'race/create');
    return self;
  }

  self.wait = function () {
    browser.wait(function() {
      return element.all(by.css(self.selector_categoryName)).then(function (items){
        return items.length > 0;
      });
    }, 15000, 'Page did not load.');
    return self;
  }

  self.completeFormStandard = function () {
    return self;
  }

  self.getAllCategories = function () {
    return element.all(by.css(self.selector_allCategories));
  }

  self.getCategoryName = function (category) {
    return category.element('[data-test="category-name"]').getAttribute('value');
  }

  self.fillForm = function (race){
    for(var key in race){
      if(race.hasOwnProperty(key)){
        if(typeof race[key] == 'string'){
          if(key == 'input_raceType' || key == 'input_raceState' || key == 'input_payState'){
            self[key].element(by.css(race[key])).click();
          }
          else{
            self[key].sendKeys(race[key]);
          }
        }
        else if(key == 'categories'){
          self.fillCategories(race[key]);
        }
      }
    }
    return self;
  }

  self.fillCategories = function (categoriesData) {
    var execute = function(index){
      var data = categoriesData[index];
      self.getAllCategories().then(function (categories){
        var category = categories[categories.length - 1];
        self.fillCategory(category, data);
      });
    }
    for(var i = 0; i < categoriesData.length; i++){
      if(i > 0){
        self.addCategories(1);
      }
      execute(i);
    }
  }

  self.addCategories = function (num) {
    var execute = function(index){
      self.button_addCategory.click();
      browser.wait(function() {
        return self.getAllCategories().then(function (categories){
          return categories.length == index + 2;
        });
      }, (500 * num), 'Incorrect number of categories.');
    }
    for(var i = 0; i < num; i++){
      execute(i);
    }
  }

  self.fillCategory = function (category, data) {
    if(category && data){
      category.element(by.css(self.selector_categoryName)).sendKeys(data.name);
      category.element(by.css(self.selector_categoryDistance)).sendKeys(data.distance);
      category.element(by.css(self.selector_categoryBeginningPrice)).sendKeys(data.beginningPrice);
      category.element(by.css(self.selector_categoryParticipantLimit)).sendKeys(data.participantLimit);
    }
  }

  self.removeCategory = function () {
    return self;
  }
}

module.exports = CreateRace;
