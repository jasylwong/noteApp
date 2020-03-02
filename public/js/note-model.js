(function(exports) {
  Note = function(text) {
    this.text = text;
    this.containsText = function() {
      return this.text;
    };
  };

  exports.Note = Note;
})(this);
