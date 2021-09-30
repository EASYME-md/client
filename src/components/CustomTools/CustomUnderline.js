import React from 'react';
import { FaUnderline } from 'react-icons/fa';

const CustomUnderline = () => {
  return (
    <button className='ql-underline' title='Underline'>
      <FaUnderline />
    </button>
  );
};

export function handleUnderline(range) {
  if (range?.length) {
    this.quill.insertText(range.index, '<u>');
    this.quill.insertText(range.index + range.length + 3, '</u>');
    return;
  }

  const cursorPosition = this.quill.getSelection()?.index;
  const draggedLength = this.quill.selection.lastRange.length;

  this.quill.insertText(cursorPosition, '<u>');
  this.quill.insertText(cursorPosition + draggedLength + 3, '</u>');
};

export default CustomUnderline;
