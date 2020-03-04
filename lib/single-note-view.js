(function (goldfish) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.returnNoteHtml = function() {
    return '<div>' + this.note.showText() + '</div>';
  }

  goldfish.SingleNoteView = SingleNoteView;
})(this);