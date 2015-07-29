function Base() {
  //THIS LINE SHOULD BE USED WHEN THE PRODUCT IS DELIVERED
  this.basePath = (process.argv.length > 3 && process.argv[3] === '--v2') ? 'http://v2.raceentry.com/' : 'dev.raceentry';
  //THIS LINE IS JUST FOR MY PERSONAL DEVELOPMENT
  //this.basePath = (process.argv.length > 3 && process.argv[3] === '--localhost') ? 'localhost:5000/' : 'http://v2.raceentry.com/';
}

module.exports = Base;
