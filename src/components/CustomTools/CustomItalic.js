import React from 'react';
import { FaItalic } from 'react-icons/fa';

const CustomItalic = () => {
  return (
    <button className='ql-italic' title='Italic'>
      <FaItalic />
    </button>
  );
};

export function handleItalic(range) {
  if (range?.length) {
    this.quill.insertText(range.index, '*');
    this.quill.insertText(range.index + range.length + 1, '*');
    return;
  }

  const cursorPosition = this.quill.getSelection()?.index;
  const draggedLength = this.quill.selection.lastRange.length;

  this.quill.insertText(cursorPosition, '*');
  this.quill.insertText(cursorPosition + draggedLength + 1, '*');
};

export default CustomItalic;
