var NoteList = require("../note-list-model").NoteList;

var noteList = new NoteList();

if (!Array.isArray(noteList.showNotes())) {
  throw new Error(`Should return array`);
} else {
  console.log('.1');
};

note1 = 'This is note 1 fam';
noteList.notes = [note1];

if (noteList.showNotes() !== [note1]) {
  // console.log(noteList.showNotes())
  // console.log([note1] === [note1])
  // console.log([note1])
    throw new Error(`Should return array containing ${note1}`);
} else {
  console.log(".2");
};