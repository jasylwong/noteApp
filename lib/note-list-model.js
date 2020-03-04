function NoteList() {
  this.notes = [];
}

NoteList.prototype.showNotes = function () {
  return this.notes;
}

NoteList.prototype.addNote = function(noteText) { 
this.notes.push(new Note(noteText));
}