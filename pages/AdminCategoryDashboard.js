function AdminCategoryDashboard() {

  var self = this;


  this.name = element(by.id('name'));
  this.distance = element(by.id('distance'));
  this.units = element(by.id('units'));
  this.minAge = element(by.id('required_min_age'));
  this.maxAge = element(by.id('required_max_age'));
  this.maxTeamMembers = element(by.id('max_teammates_view'));
  this.participantLimit = element(by.id('participant_limit'));
  this.limitBy = element(by.id('limit_option_view'));
  this.totalTeams = element(by.id('max_teams_view'));
  this.totalTeamParticipants = element(by.id('max_participants_view'));

  // this.fetch = function (prefix) {
  //   browser.get(prefix + 'user');
  //   return this;
  // }

  self.wait = function () {
    browser.wait(function() {
      return element.all(by.css('.fa.fa-edit')).then(function (items) {
        return items.length > 0;
      });
    }, 5000, 'Page did not load.');
    return self;
  }

  self.assertDataIsCorrect = function (category) {
    this.distance.getText().then(function (text) {
      expect(category.distance).toEqual(reformatDistance(text));
    });
    if(category.type == 'individual'){
      assertFieldIsCorrect(this.participantLimit, category.participantLimit);
    }
    else if(category.type == 'team'){
      assertFieldIsCorrect(this.maxTeamMembers, category.participantLimit);
      assertFieldIsCorrect(this.limitBy, 'Limit by ' + category.limitBy);
      if(category.limitBy == 'teams'){
        assertFieldIsCorrect(this.totalTeams, category.teamLimit);
      }
      else if(category.limitBy == 'participants'){
        assertFieldIsCorrect(this.totalTeamParticipants, category.teamParticipantLimit);
      }
    }
  }

  function assertFieldIsCorrect(el, property){
    el.getText().then(function (text) {
      expect(property).toEqual(text);
    });
  }

  function reformatDistance(distance){
    return distance.replace(/,/g, '');
  }

}

module.exports = AdminCategoryDashboard;
