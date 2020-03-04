describe('SingleNoteView', () => {
  describe('.returnsNoteHtml', () => {
    it('returns a string of HTML that represents the note', () => {
      var note = new Note('Favourite drink: Faygo');
      var singleNoteView = new SingleNoteView(note);
      expect(singleNoteView.returnNoteHtml()).toBe('<div>Favourite drink: Faygo</div>')
    })
  })
})