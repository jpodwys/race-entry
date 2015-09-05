var CreateRace = require('../../pages/CreateRace');

module.exports = function(fetch, raceData){
  var createRace = new CreateRace();
  if(fetch){
    createRace.fetch();
  }
  createRace.wait()
    .fillForm(raceData)
    .submitForm();
}
