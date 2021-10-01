import React from 'react';
import { GoFileCode } from 'react-icons/go';

const CustomCodeBlock = () => {
  return (
    <button className='ql-custom-code-block' title='Code block'>
      <GoFileCode />
    </button>
  );
};

export function handleCodeBlock() {
  const cursorPosition = this.quill.getSelection()?.index;
  const draggedLength = this.quill.selection.lastRange.length;

  this.quill.insertText(cursorPosition, '```\n');
  this.quill.insertText(cursorPosition + draggedLength + 5, '```\n');
};

export default CustomCodeBlock;
