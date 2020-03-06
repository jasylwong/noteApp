function NoteListView(noteList) {
  this.noteList = noteList;
};

NoteListView.prototype.showNoteList = function() {
  return this.noteList;
};

NoteListView.prototype.showHtml = function() {
  var html = "<ul>";
  for(let i = 0; i < this.noteList.notes.length; i++ ) {
    if (this.noteList.notes[i].showText().length <= 20) {
      html += `<li><a href='#${this.noteList.notes[i].id}'>${this.noteList.notes[i].showText()}</a></li>`;
    } else {
      html += `<li><a href='#${this.noteList.notes[i].id}'>${this.noteList.notes[i].showText().substring(0,20)}...</a></li>`;
    }
  }
  html += "</ul>";
  return html;
};