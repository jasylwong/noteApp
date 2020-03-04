// var Note = require("../public/js/note-model").Note;
var testingText = "Message in a method...whoooaaahhh";

describe('Note', () => {
  describe('.showText()', () => {
    it('shows the text content', () => {
      var note = new Note(testingText);
      expect(note.showText()).toBe(testingText)
    })
  })

  describe('.id', () => {
    it('assigns a unique id to each note, based on creation order', () => {
      var note1 = new Note('Note uno');
      var note2 = new Note('Note dos');
      expect(note1.id).toBe(1); //will be 1 because instantiated a note object in above test already, which has id 0       
      expect(note2.id).toBe(2);
    })
  })
})