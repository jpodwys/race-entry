function CreateRace() {
  var self = this;

  //Basic Race Information
  this.input_raceName = element(by.css('[data-test="race-name"]'));
  this.input_raceDescription = element(by.css('[data-test="race-description"]'));
  this.input_raceUrl = element(by.css('[data-test="race-external-url"]'));
  this.input_raceType = element(by.css('[data-test="race-type-id"]'));

  //Contact Information
  this.input_contactFirstName = element(by.css('[data-test="contact-first-name"]'));
  this.input_contactLastName = element(by.css('[data-test="contact-last-name"]'));
  this.input_contactEmail = element(by.css('[data-test="contact-email"]'));

  //Upload Race Logo
  //this.input_raceLogo = element(by.css('[data-test=""]'));

  //Where and When
  this.input_raceDate = element(by.css('[data-test="race-year-datetime"]'));
  this.input_raceStreet = element(by.css('[data-test="race-year-address"]'));
  this.input_raceCity = element(by.css('[data-test="race-year-city"]'));
  this.input_raceState = element(by.css('[data-test="race-year-state"]'));
  this.input_raceZip = element(by.css('[data-test="race-year-zipcode"]'));
  this.input_createRegistrationForm = element(by.css('[data-test="create-registration"]'));

  //Checks Payable Information
  this.input_payEntity = element(by.css('[data-test="entity-name"]'));
  this.input_payAddress = element(by.css('[data-test="entity-address"]'));
  this.input_payCity = element(by.css('[data-test="entity-city"]'));
  this.input_payState = element(by.css('[data-test="entity-state"]'));
  this.input_payZip = element(by.css('[data-test="entity-zipcode"]'));

  //Registration Information
  this.input_openRegistrationLater = element(by.css('[data-test="open-reg-later"]'));
  this.input_registrationOpens = element(by.css('[data-test="registration-opens-datetime"]'));
  this.input_chargeRegistrationTax = element(by.css('[data-test="charge-tax"]'));
  this.input_registrationTaxRate = element(by.css('[data-test="tax-charge"]'));
  this.input_optionalRaceWaiver = element(by.css('[data-test="race-registration-waiver"]'));
  this.input_registrationEnds = element(by.css('[data-test="race-registration-ends"]'));

  //Categories
  this.selector_allCategories = '[class*="category-"]:not(.category-ids)';
  this.selector_categoryName = '[data-test="category-name"]';
  this.selector_categoryDistance = '[data-test="category-distance"]';
  this.selector_categoryDistanceUnits = '[data-test="category-distance-units"]';
  this.selector_categoryTypeIndividual = '[data-test="category-type-individual"]';
  this.selector_categoryBeginningPrice = '[data-test="beginning-price"]';
  this.selector_categoryTypeTeamInput = '[data-test="category-type-team"]';
  this.selector_categoryTeamCreateTeamPrice = '[data-test="team-price-create"]';
  this.selector_categoryTeamJoinTeamPrice = '[data-test="team-price-join"]';
  this.selector_categoryTeamMaxTeamMembers = '[data-test="team-max-members"]';
  this.selector_categoryParticipantLimit = '[data-test="participant-limit"]';
  this.selector_removeCategory = '[data-test="remove-category"]';
  this.button_addCategory = element(by.css('[data-test="add-category"]'));

  //Terms and Conditions
  this.input_initials = element(by.css('[data-test="terms-initials"]'));
  this.button_submit = element(by.id('save-button'));

  this.fetch = function (prefix) {
    browser.get(prefix + 'race/create');
    return this;
  }

  this.completeFormStandard = function () {
    return this;
  }

  this.getAllCategories = function () {
    return element.all(by.css(this.selector_allCategories));
  }

  this.getCategoryName = function (category) {
    return category.element('[data-test="category-name"]').getAttribute('value');
  }

  this.fillForm = function (race, categories){
    for(var key in race){
      if(race.hasOwnProperty(key)){
        if(typeof race[key] == 'string'){
          self[key].sendKeys(race[key]);
        }
        else if(key == 'categories'){
          self.fillCategories(race[key]);
        }
      }
    }
  }

  this.fillCategories = function (categoriesData) {
    var callback = function(index){
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
      callback(i);
    }
  }

  this.addCategories = function (num) {
    var callback = function(index){
      self.button_addCategory.click();
      browser.wait(function() {
        return self.getAllCategories().then(function (categories){
          return categories.length == index + 2;
        });
      }, (500 * num), 'Incorrect number of categories.');
    }
    for(var i = 0; i < num; i++){
      callback(i);
    }
    return self.getAllCategories();
  }

  this.fillCategory = function (category, data) {
    if(category && data){
      category.element(by.css(this.selector_categoryName)).sendKeys(data.name);
      category.element(by.css(this.selector_categoryDistance)).sendKeys(data.distance);
      category.element(by.css(this.selector_categoryBeginningPrice)).sendKeys(data.beginningPrice);
      category.element(by.css(this.selector_categoryParticipantLimit)).sendKeys(data.participantLimit);
    }
  }

  this.removeCategory = function () {
    return this;
  }
}

module.exports = CreateRace;
