var NoteList = require("../note-list-model").NoteList;

var noteList = new NoteList();

if (!Array.isArray(noteList.showNotes())) {
  throw new Error(`Should return array`);
} else {
  console.log('.1');
};

note1 = 'This is note 1 fam';
noteList.notes.push(note1);

if (noteList.showNotes()[0] !== [note1][0]) {
  throw new Error(`Should return array containing ${note1}`);
} else {
  console.log(".2");
};