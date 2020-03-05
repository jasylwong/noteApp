describe('NoteController', () => {
  it('instantiates a Note Controller object', () => {
    var noteController = new NoteController();
    expect(noteController instanceof NoteController).toBe(true);
  })

  it('sets the innerHTML to show all the notes', () => {
    // var noteList = new NoteList()
    // noteList.addNote('Favourite drink: Guinness')
    // var noteController = new NoteController(noteList)
    // noteController.applyHtmlToApp();
    // noteController.makeUrlChangeShowTextForPage();

    // NoteListViewDouble.prototype = {
    //   output: function() {}
    // };
    
    // var noteListViewDouble = new NoteListViewDouble();

    // // noteList.newNote('Favourite drink: Guinness')
    // noteController.noteListViewDouble;
    var 
    pageText = document.getElementById('app').innerHTML;
    expect(pageText).toInclude('Favourite drink: Gui')
  })

  it('changes content of page to note clicked on', () => {
    console.log(document.getElementById('app').innerText)
    pageText = document.getElementById('app').innerHTML;
    expect(pageText).toBe('Favourite drink: Guinness')
  })
})