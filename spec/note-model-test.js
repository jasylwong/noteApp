// var Note = require("../public/js/note-model").Note;
var testingText = "Message in a method...whoooaaahhh";

describe('Note', () => {
  describe('.showText()', () => {
    it('shows the text content', () => {
      var note = new Note(testingText);
      expect(note.showText()).toBe(testingText)
    })
  })
})