// var NoteList = require("../public/js/note-list-model").NoteList;

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

describe('NoteList', () => {
  describe('.showNotes()', () => {
    it('returns an array containing the notes', () => {
      var noteList = new NoteList();
      note1 = 'This is note 1 fam';
      noteList.notes.push(note1);
      expect(Array.isArray(noteList.showNotes())).toBe(true)
      expect(noteList.showNotes()[0]).toBe(note1)
    })

    describe('.createNote()', () => {
      var noteList = new NoteList();
      var noteText = 'This is note 1 fam';
      noteList.addNote(noteText);
      expect(noteList.showNotes()[noteList.showNotes().length -1] instanceof Note).toBe(true);
      expect(noteList.showNotes()[noteList.showNotes().length -1].showText()).toBe(noteText);
    })
  })
})

