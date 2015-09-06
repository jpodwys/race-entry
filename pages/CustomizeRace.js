function CustomizeRace() {
  var self = this;

  self.selector_waitCheckElement = '.registration .toolbar';

  self.fetch = function () {
    throw new Error('Cannot fetch the category dashboard because it requires an ID I don\'t have access to.');
  }

  self.wait = function () {
    browser.wait(function() {
      return element.all(by.css(self.selector_waitCheckElement)).then(function (items){
        return items.length > 0;
      });
    }, 15000, 'Page did not load.');
    return self;
  }
}

module.exports = CustomizeRace;
