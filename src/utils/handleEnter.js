function handleEnter(range) {
  this.quill.insertText(range.index, '   \n');
}

export default handleEnter;
