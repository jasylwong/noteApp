describe('NoteController', () => {
  it('instantiates a Note Controller object', () => {
    var noteController = new NoteController();
    expect(noteController instanceof NoteController).toBe(true);
  })

  it('shows no notes when empty', () => {
    var pageText = document.getElementById('app').innerHTML;
    expect(pageText).toInclude('Currently no notes')
  })

  describe('.addNoteFromForm()', () => {
    it('shows the new note', () => {
      // NoteListViewDouble.prototype = {
      //   output: function() {}
      // };
      
      // var noteListViewDouble = new NoteListViewDouble();

      // // noteList.newNote('Favourite drink: Guinness')
      // noteController.noteListViewDouble;
      noteController.addNoteFromForm('Favourite drink: Guinness')
      expect(noteController.noteList.notes[0] instanceof Note).toBe(true)

      var pageText = document.getElementById('app').innerHTML;
      expect(pageText).toInclude('Favourite drink: Gui')
    })
  })

  it ('changes content of page to note clicked on', () => {
    pageText = document.getElementById('app').innerHTML;
    expect(pageText).toBe('Favourite drink: Guinness')
  })
})