function NoteController(notelist) {
  this.noteList = notelist;
  this.noteListView = new NoteListView(noteList)
}

NoteController.prototype = (function() {
  function applyHtmlToApp() {
    var elem = document.getElementById('app');
    var text = (this.noteList.notes.length > 0) ? this.noteListView.showHtml() : 'Currently no notes. Add some below!';    
    elem.innerHTML = text;
  }

  function makeUrlChangeShowTextForPage() {
    window.addEventListener("hashchange", showText);
  }

  function showText() { 
    var text = this.noteList.notes[location.hash.split('#')[1]].showText()
    document.getElementById('app').innerHTML = text;
    var x = document.getElementsByClassName('non-note-text')
    for(var i = 0; i < x.length; i++) {
      x[i].style.visibility='hidden';
    }
    document.getElementById('go-homepage').innerText = 'Go back';
  }

  // function goBack() {
  //   window.addEventListener("hashchange", )
  // }

  function submitForm() {
    document.getElementById('text').addEventListener("submit", function(event) {
      event.preventDefault();
      addNoteFromForm(event.target.elements[0].value)
      document.getElementById('textarea').value=''
    })
  }

  function addNoteFromForm(text) {
    this.noteList.addNote(text);
    var noteListView = new NoteListView(this.noteList)
    document.getElementById('app').innerHTML = noteListView.showHtml();
  }

  return {
    applyHtmlToApp,
    makeUrlChangeShowTextForPage,
    showText,
    submitForm,
    addNoteFromForm
  }
})();

var noteList = new NoteList()
var noteController = new NoteController(noteList)
noteController.applyHtmlToApp();
noteController.makeUrlChangeShowTextForPage();
noteController.submitForm();