import React from 'react';
import { IoText } from 'react-icons/io5';

const CustomFirstLetterUppercase = () => {
  return (
    <button className='ql-first-letter-uppercase' title='Convert first letter to uppercase'>
      <IoText />
    </button>
  );
};

export function handleFirstLetterUppercase() {
  const cursorPosition = this.quill.getSelection()?.index;
  const draggedLength = this.quill.selection.lastRange?.length;
  const letters = this.quill.getText(cursorPosition, draggedLength);
  const firstLetter = letters[0].toUpperCase();
  const restLetters = letters.slice(1);
  const result = firstLetter + restLetters;

  this.quill.deleteText(cursorPosition, draggedLength);
  this.quill.insertText(cursorPosition, result);
};

export default CustomFirstLetterUppercase;
