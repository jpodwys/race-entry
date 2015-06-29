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
    input_raceUrl: 'https://google.com',
    input_raceType: '1',
    input_contactFirstName: 'Joe',
    input_contactLastName: 'Pod',
    input_contactEmail: 'thomas@raceentry.com',
    input_raceDate: '',
    input_raceStreet: '',
    input_raceCity: 'Orem',
    input_raceState: '44',
    input_raceZip: '84044',
    input_payEntity: 'Joe',
    input_payAddress: 'That one place',
    input_payCity: 'Over There',
    input_payState: '44',
    input_payZip: '84044',
    input_registrationEnds: '',
    input_initials: 'HAHA',
    categories: [BASIC_CATEGORY, {
  name: 'Another Category',
  distance: '100000',
  beginningPrice: '100000',
  participantLimit: '10000000'
}]
  }
}

module.exports.credentials = {
  username: USERNAME,
  password: PASSWORD,
  ccNumber: CREDIT_CARD_NUMBER
}
