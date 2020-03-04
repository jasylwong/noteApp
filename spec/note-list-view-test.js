describe('NoteListView', () => {
  it('check it takes a note list model upon instantiation', () => {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    expect(noteListView.showNoteList()).toBe(noteList);
  });

  it('returns HTML string representing the note list model', () => {
    var noteList = new NoteList();
    noteList.addNote('Hello world');
    var noteListView = new NoteListView(noteList);
    expect(noteListView.showHtml()).toBe("<ul><li><div>Hello world</div></li></ul>")
  });

  it('returns only the first 20 characters', () => {
    var noteText = 'this sentence is over 20 characters';
    var noteList = new NoteList();
    noteList.addNote(noteText);
    var noteListView = new NoteListView(noteList);
    expect(noteListView.showHtml()).toBe("<ul><li><div>this sentence is ove</div></li></ul>")
  })
});

