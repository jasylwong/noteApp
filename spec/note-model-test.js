var Note = require("../public/js/note-model").Note;
var testingText = "Message in a method...whoooaaahhh";

var note = new Note(testingText);

if (note.containsText() !== testingText) {
  throw new Error(`Note text should be ${testingText}`);
} else {
  console.log(".");
};
