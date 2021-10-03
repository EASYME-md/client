import React from 'react';
import { FaFont } from 'react-icons/fa';

const CustomUppercase = () => {
  return (
    <button className='ql-uppercase' title='Uppercase'>
      <FaFont />
    </button>
  );
};

export function handleUppercase() {
  if (this.quill.getSelection()) {
    const cursorPosition = this.quill.getSelection().index;
    const draggedLength = this.quill.selection.lastRange?.length;
    const letters = this.quill.getText(cursorPosition, draggedLength);
    const uppercase = letters.toUpperCase();

    this.quill.deleteText(cursorPosition, draggedLength);
    this.quill.insertText(cursorPosition, uppercase);
  }
};

export default CustomUppercase;
