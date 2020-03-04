// import { Note } from "./note-model";

// (function(exports) {
//   NoteList = function() {
//     this.notes = [];
//     this.showNotes = function(){
//       return this.notes;
//     };
//   };

//   exports.NoteList = NoteList;
// }) (this);

function NoteList() {
  this.notes = [];
}

NoteList.prototype.showNotes = function () {
  return this.notes;
}

NoteList.prototype.addNote = function(noteText) {
this.notes.push(new Note(noteText));
}