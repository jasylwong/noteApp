describe('NoteListView', () => {
  it('check it takes a note list model upon instantiation', () => {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    expect(noteListView.showNoteList()).toBe(noteList);
  });

  it('returns HTML string representing the note list model', () => {
    var noteList = new NoteList();
    noteList.addNote('Hello world');
    noteList.addNote('How are you?');
    var noteListView = new NoteListView(noteList);
    expect(noteListView.showHtml()).toBe("<ul><li><div>Hello world</div></li><li><div>How are you?</div></li></ul>")
  });
});

