import React from 'react';
import { FaAmilia } from 'react-icons/fa';

const CustomLowercase = () => {
  return (
    <button className='ql-lowercase' title='Lowercase'>
      <FaAmilia />
    </button>
  );
};

export function handleLowercase() {
  const cursorPosition = this.quill.getSelection()?.index;
  const draggedLength = this.quill.selection.lastRange?.length;
  const letters = this.quill.getText(cursorPosition, draggedLength);
  const lowercase = letters.toLowerCase();

  this.quill.deleteText(cursorPosition, draggedLength);
  this.quill.insertText(cursorPosition, lowercase);
};

export default CustomLowercase;
