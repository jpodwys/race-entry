function CustomizeRace() {

  var self = this;

  self.selector_waitCheckElement = '.registration .toolbar';

  // self.fetch = function (prefix, suffix) {
  //   suffix = suffix || 'user';
  //   browser.get(prefix + suffix);
  //   return self;
  // }

  self.wait = function () {
    browser.wait(function() {
      return element.all(by.css(self.selector_waitCheckElement)).then(function (items){
        return items.length > 0;
      });
    }, 15000, 'Page did not load.');
    return self;
  }

  //self.wait();
}

module.exports = CustomizeRace;
