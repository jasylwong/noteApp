(function(exports) {
  NoteList = function() {
    this.notes = [];
    this.showNotes = function(){
      return this.notes;
    };
  };

  exports.NoteList = NoteList;
}) (this);


