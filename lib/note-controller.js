(function(exports){
  function NoteController(notelist) {
          this.notelist = notelist;
          this.noteListView = new NoteListView(noteList)
  }

  exports.NoteController = NoteController;

  NoteController.prototype.applyHtmlToApp = function() {
      var elem = document.getElementById('app');
      elem.innerHTML = this.noteListView.showHtml();
  }

  var noteList = new NoteList()
  noteList.addNote('Favourite drink: Guinness')
  // noteList.addNote('Favourite drink: Vermouth')
  var noteController = new NoteController(noteList)
  noteController.applyHtmlToApp();  
})(this);
