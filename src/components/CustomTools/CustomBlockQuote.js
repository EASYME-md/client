import React from 'react';

const CustomBlockQuote = () => {
  return (
    <button className='ql-blockquote' title='Block quote' />
  );
};

export function handleBlockQuote() {
  const cursorPosition = this.quill.getSelection()?.index;

  this.quill.insertText(cursorPosition, '>');
};

export default CustomBlockQuote;
