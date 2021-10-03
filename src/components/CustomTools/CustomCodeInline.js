import React from 'react';
import { FaCode } from 'react-icons/fa';

const CustomCodeInline = () => {
  return (
    <button className='ql-code-inline' title='Code inline'>
      <FaCode />
    </button>
  );
};

export function handleCodeInline() {
  if (this.quill.getSelection()) {
    const cursorPosition = this.quill.getSelection().index;
    const draggedLength = this.quill.selection.lastRange.length;

    this.quill.insertText(cursorPosition, '`');
    this.quill.insertText(cursorPosition + draggedLength + 1, '`');
  }
};

export default CustomCodeInline;
