var USERNAME = 'joseph@podwys.com';
var PASSWORD = 'testaccount';

var CREDIT_CARD_NUMBER = '';

function getGeneralData(type){
  return {
    input_raceName: 'Test ' + type + ' ' + Date.now(),
    input_raceDescription: 'Test Description',
    input_raceUrl: 'https://www.google.com/',
    input_raceType: '[value="1"]',
    input_contactFirstName: 'Joe',
    input_contactLastName: 'Pod',
    input_contactEmail: 'thomas@raceentry.com',
    input_raceDate: '01/01/2015 10:00',
    input_raceStreet: '1234 Some Place',
    input_raceCity: 'Orem',
    input_raceState: '[value="44"]',
    input_raceZip: '84044',
    input_payEntity: 'Joe',
    input_payAddress: 'That one place',
    input_payCity: 'Over There',
    input_payState: '[value="44"]',
    input_payZip: '84044',
    input_registrationEnds: '01/01/2018',
    input_initials: 'HAHA'
  }
}

var BASIC_CATEGORY_1 = {
  name: 'Individual Category 1',
  distance: '10.0',
  type: 'individual',
  beginningPrice: '10',
  participantLimit: '1000'
}

var BASIC_CATEGORY_2 = {
  name: 'Individual Category 2',
  distance: '100.0',
  type: 'individual',
  beginningPrice: '1000',
  participantLimit: '1000'
}

var TEAM_CATEGORY_LIMIT_BY_TEAMS = {
  name: 'Team Category 1',
  distance: '1000.0',
  type: 'team',
  createTeamPrice: '10.00',
  joinTeamPrice: '10.00',
  participantLimit: '1000',
  limitBy: 'teams',
  teamLimit: '100'
}

var TEAM_CATEGORY_LIMIT_BY_PARTICIPANTS = {
  name: 'Team Category 2',
  distance: '1000.0',
  type: 'team',
  createTeamPrice: '10.00',
  joinTeamPrice: '10.00',
  participantLimit: '1000',
  limitBy: 'participants',
  teamParticipantLimit: '1000'
}

exports.raceDataIndividual = function(){
  var data = getGeneralData('Individual');
  data.categories = [
    BASIC_CATEGORY_1,
    BASIC_CATEGORY_2
  ];
  return data;
}

exports.raceDataTeam = function(){
  var data = getGeneralData('Team');
  data.categories = [
    TEAM_CATEGORY_LIMIT_BY_TEAMS,
    TEAM_CATEGORY_LIMIT_BY_PARTICIPANTS
  ];
  return data;
}

exports.credentials = {
  username: USERNAME,
  password: PASSWORD,
  ccNumber: CREDIT_CARD_NUMBER
}
