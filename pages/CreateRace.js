function CreateRace() {
  //Basic Race Information
  this.raceNameInput = element(by.css('[name="name"]'));
  this.raceDescriptionInput = element(by.css('[name="description"]'));
  this.raceUrlInput = element(by.css('[name="external_url"]'));
  this.raceTypeInput = element(by.css('[name="race_type"]'));

  //Contact Information
  this.contactFirstNameInput = element(by.css('[name="contact_first_name"]'));
  this.contactLastNameInput = element(by.css('[name="contact_first_name"]'));
  this.contactEmailInput = element(by.css('[name="contact_email"]'));

  //Upload Race Logo
  this.raceLogoInput = element(by.css('input[type="file"]'));

  //Where and When
  this.raceDateInput = element(by.css('[name="datetime"]'));
  this.raceStreetInput = element(by.css('[name="street"]'));
  this.raceCityInput = element(by.css('[name="city"]'));
  //this.raceStateInput = element(by.css('[name="state"]')); //NEEDS MORE DATA
  this.raceZipInput = element(by.css('[name="zip"]'));
  this.raceCreateFormInput = element(by.css('[name="reg_enable"]'));

  //Checks Payable Information
  this.payEntityInput = element(by.css('[name="checks_payable_entity"]'));
  this.payAddressInput = element(by.css('[name="checks_payable_address"]'));
  this.payCityInput = element(by.css('[name="checks_payable_city"]'));
  //this.payStateInput = element(by.id('[name="state"]')); //NEEDS MORE DATA
  this.payZipInput = element(by.css('[name="checks_payable_zip"]'));

  //Registration Information
  this.openRegistrationLaterInput = element(by.css('[name="reg_opens"]'));
  this.registrationOpensInput = element(by.css('[name="registration_opens"]'));
  //this.chargeRegistrationTaxInput = element(by.css('[name="reg_opens"]')); //NEEDS MORE DATA
  this.registrationTaxRateInput = element(by.css('[name="tax_rate"]'));
  this.optionalRaceWaiverInput = element(by.css('[name="terms_text"]'));
  this.registrationEndsInput = element(by.css('[name="category_registration_ends"]'));

  //Categories
  this.categoryNameInput = element(by.css('[name="cat_name_0"]'));
  this.categoryDistanceInput = element(by.css('[name="cat_distance_0"]'));
  this.categoryDistanceUnitsInput = element(by.css('[name="cat_distance_units_0"]'));
  this.categoryDistanceUnitsInput = element(by.css('[name="cat_distance_units_0"]'));
  //this.categoryTypeIndividualInput = element(by.css('[name="cat_type_0"]')); //NEEDS MORE DATA
  this.categoryIndividualBeginningPriceInput = element(by.css('[name="cat_individual_price_0"]'));
  //this.categoryTypeTeamInput = element(by.css('[name="cat_type_0"]')); //NEEDS MORE DATA
  this.categoryTeamCreateTeamPriceInput = element(by.css('[name="cat_team_price_create_0"]'));
  this.categoryTeamJoinTeamPriceInput = element(by.css('[name="cat_team_price_join_0"]'));
  this.categoryTeamMaxTeamMembersInput = element(by.css('[name="cat_team_price_join_0"]'));
  this.categoryParticipantLimit = element(by.css('[name="cat_participant_limit_0"]'));
  //this.removeCategoryButton = element(by.css('[=""]')); //NEEDS MORE DATA
  //this.addCategoryButton = element(by.css('[=""]')); //NEEDS MORE DATA

  //Terms and Conditions
  this.initialsInput = element(by.id('[name="terms_initials"]'));
  this.submitButton = element(by.id('save-button'));

  this.fetch = function () {
    browser.get('http://v2.raceentry.com/race/create');
    return this;
  }

  this.completeFormStandard = function () {
    return this;
  }

  this.addCategory = function () {
    return this;
  }

  this.removeCategory = function () {
    return this;
  }
}

module.exports = CreateRace;
