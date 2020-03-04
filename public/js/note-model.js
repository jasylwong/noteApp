// (function(exports) {
//   Note = function(text) {
//     this.text = text;
//     this.showText = function() {
//       return this.text;
//     };
//   };

//   exports.Note = Note;
// })(this);

function Note(text) {
  this.text = text;
};

Note.prototype.showText = function() {
  return this.text;
};