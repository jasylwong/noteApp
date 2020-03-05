function NoteController(notelist) {
  this.noteList = notelist;
  this.noteListView = new NoteListView(noteList)
}

NoteController.prototype = (function() {
  function applyHtmlToApp() {
    var elem = document.getElementById('app');
    elem.innerHTML = this.noteListView.showHtml();
  }

  function makeUrlChangeShowTextForPage() {
    window.addEventListener("hashchange", showText);
  }

  function showText() { 
    text = this.noteList.notes[location.hash.split('#')[1]].showText();
    document.getElementById('app').innerHTML = text;
  }

  function submitForm() {
    document.getElementById('text').addEventListener("submit", function(event) {
      event.preventDefault();
      console.log('submit form')
    })
  }

  return {
    applyHtmlToApp,
    makeUrlChangeShowTextForPage,
    showText,
    submitForm
  }
})();

var noteList = new NoteList()
noteList.addNote('Favourite drink: Guinness')
noteList.addNote('Favourite drink: Vermouth')
var noteController = new NoteController(noteList)
noteController.applyHtmlToApp();
noteController.makeUrlChangeShowTextForPage();
console.log('what', noteController.submitForm());