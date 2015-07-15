var USERNAME = 'joseph@podwys.com';
var PASSWORD = 'testaccount';

var CREDIT_CARD_NUMBER = '';

var BASIC_CATEGORY = {
  name: 'Basic Category',
  distance: '10',
  beginningPrice: '10',
  participantLimit: '1000'
}

module.exports.raceDataBasic = function(){
  return {
    input_raceName: 'Test Race ' + Date.now(),
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
    input_initials: 'HAHA',
    categories: [BASIC_CATEGORY, {
      name: 'Another Category',
      distance: '1000',
      beginningPrice: '1000',
      participantLimit: '1000'
    }]
  }
}

module.exports.credentials = {
  username: USERNAME,
  password: PASSWORD,
  ccNumber: CREDIT_CARD_NUMBER
}
