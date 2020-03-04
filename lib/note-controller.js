// (function() {
//   var noteList = new NoteList()
//   noteList.addNote('Favourite drink: Um Bongo')
//   noteList.addNote('Favourite drink: Vermouth')
  
//   var noteListView = new NoteListView(noteList);

//   elem = document.getElementById('app')
//   // console.log(notelist.showHtml())
//   elem.innerHTML = noteListView.showHtml()
// })()


(function(exports){
  function NoteController(notelist) {
          this.notelist = notelist;
          this.noteListView = new NoteListView(noteList)
  }

  exports.NoteController = NoteController;

  var noteList = new NoteList()
  noteList.addNote('Favourite drink: Guinness')
  noteList.addNote('Favourite drink: Vermouth')
  var noteController = new NoteController(noteList)

  var elem = document.getElementById('app')
  elem.innerHTML = noteController.noteListView.showHtml()
})(this);
