// var Note = require("../public/js/note-model").Note;
var testingText = "Message in a method...whoooaaahhh";

describe('Note', () => {
  describe('.containsTest()', () => {
    it('contains the relevant text', () => {
      var note = new Note(testingText);
      expect(note.containsText()).toBe(testingText)
    })
  })
})