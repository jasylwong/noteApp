Note = (function() {
  var nextId = 0;

  return function Note(text) {
    this.text = text;
    this.id = nextId++;
    this.showText = function() {
      return this.text;
    };
  };
})();