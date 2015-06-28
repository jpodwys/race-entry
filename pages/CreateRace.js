function CreateRace() {
  this.categorySelector = '[class*="category-"]:not(.category-ids)';

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
  // this.allCategories = element.all(by.css('[class*="category-"]')).then(function(elements) {
  //   // elements is an array of ElementFinders.
  // });
  //this.allCategories = element.all(by.css('[class*="category-"]'));
  this.input_categoryName = element(by.css('[name="cat_name_0"]'));
  this.input_categoryDistance = element(by.css('[name="cat_distance_0"]'));
  this.input_categoryDistanceUnits = element(by.css('[name="cat_distance_units_0"]'));
  this.input_categoryDistanceUnits = element(by.css('[name="cat_distance_units_0"]'));
  //this.categoryTypeIndividualInput = element(by.css('[name="cat_type_0"]')); //NEEDS MORE DATA
  this.input_categoryIndividualBeginningPrice = element(by.css('[name="cat_individual_price_0"]'));
  //this.categoryTypeTeamInput = element(by.css('[name="cat_type_0"]')); //NEEDS MORE DATA
  this.input_categoryTeamCreateTeamPrice = element(by.css('[name="cat_team_price_create_0"]'));
  this.input_categoryTeamJoinTeamPrice = element(by.css('[name="cat_team_price_join_0"]'));
  this.input_categoryTeamMaxTeamMembers = element(by.css('[name="cat_team_price_join_0"]'));
  this.input_categoryParticipantLimit = element(by.css('[name="cat_participant_limit_0"]'));
  //this.removeCategoryButton = element(by.css('[=""]')); //NEEDS MORE DATA
  //this.button_addCategory = element(by.css('[=""]')); //NEEDS MORE DATA

  //Terms and Conditions
  this.input_initials = element(by.id('[name="terms_initials"]'));
  this.button_submit = element(by.id('save-button'));

  this.fetch = function (prefix) {
    browser.get(prefix + 'race/create');
    return this;
  }

  this.completeFormStandard = function () {
    return this;
  }

  // this.getAllCategories = function () {
  //   return element.all(by.css(this.categorySelector)).then(function(elements) {
  //     return elements;
  //   });
  // }

  this.getAllCategories = function () {
    return element.all(by.css(this.categorySelector));
  }

  this.getCategoryName = function (category) {
    return category.element('[data-test="category-name"]').getAttribute('value');
  }

  this.fillCategory = function (category, data) {
    if(category && data){
      category.element(by.css('[data-test="category-name"]')).sendKeys(data.categoryName);
    }
  }

  this.addCategory = function (category) {
    if(category){

    }
    else{

    }
    return this;
  }

  this.removeCategory = function () {
    return this;
  }
}

module.exports = CreateRace;
