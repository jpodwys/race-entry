function Base() {
  this.basePath = (process.argv.length > 3 && process.argv[3] === '--v2') ? 'http://v2.raceentry.com/' : 'http://127.0.0.1:80/';
}

module.exports = Base;
