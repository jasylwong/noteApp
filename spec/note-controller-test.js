describe('NoteController', () => {
  it('instantiates a Note Controller object', () => {
    var noteController = new NoteController();
    expect(noteController instanceof NoteController).toBe(true);
  })

  it('sets the innerHTML to show all the notes', () => {
    var noteList = new NoteList()
    var noteController = new NoteController(noteList)

    // NoteListViewDouble.prototype = {
    //   output: function() {}
    // };
    
    // var noteListViewDouble = new NoteListViewDouble();

    // // noteList.newNote('Favourite drink: Guinness')
    // noteController.noteListViewDouble;

    noteController.applyHtmlToApp();
    pageText = document.getElementById('app').innerHTML;
    expect(pageText).toBe('<ul><li><div>Favourite drink: Guinness</div></li></ul>')
  })
})