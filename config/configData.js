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
    raceName: 'Test Race ' + Date.now(),
    categories: [BASIC_CATEGORY]
  }
}

module.exports.credentials = {
  username: USERNAME,
  password: PASSWORD,
  ccNumber: CREDIT_CARD_NUMBER
}
