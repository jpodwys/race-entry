function AdminCategoryDashboard() {
  var self = this;

  self.name = element(by.id('name'));
  self.distance = element(by.id('distance'));
  self.units = element(by.id('units'));
  self.minAge = element(by.id('required_min_age'));
  self.maxAge = element(by.id('required_max_age'));
  self.maxTeamMembers = element(by.id('max_teammates_view'));
  self.participantLimit = element(by.id('participant_limit'));
  self.limitBy = element(by.id('limit_option_view'));
  self.totalTeams = element(by.id('max_teams_view'));
  self.totalTeamParticipants = element(by.id('max_participants_view'));

  this.fetch = function () {
    throw new Error('Cannot fetch the category dashboard because it requires an ID I don\'t have access to.');
  }

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
