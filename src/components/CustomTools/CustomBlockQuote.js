import React from 'react';

const CustomBlockQuote = () => {
  return (
    <button className='ql-blockquote' title='Block quote' />
  );
};

export function handleBlockQuote() {
  if (this.quill.getSelection()) {
    const cursorPosition = this.quill.getSelection().index;
    const offset = this.quill.selection.getRange()[1].start.offset;
    const startingPosition = cursorPosition - offset;

    this.quill.insertText(startingPosition, '>');
  }
};

export default CustomBlockQuote;
