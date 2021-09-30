import React from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';

const CustomFold = () => {
  return (
    <button className='ql-fold' title='Fold'>
      <AiOutlineCaretRight />
    </button>
  );
};

export function handleFold() {
  const cursorPosition = this.quill.getSelection()?.index;
  const draggedLength = this.quill.selection.lastRange.length;

  this.quill.insertText(cursorPosition, '<details><summary>');
  this.quill.insertText(cursorPosition + draggedLength + 18, '</summary>\n\n*Write here!*\n</details>');
};

export default CustomFold;
