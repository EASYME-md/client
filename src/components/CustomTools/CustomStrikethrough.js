import React from 'react';

const CustomStrikethrough = () => {
  return (
    <button className='ql-strike' title='Strikethrough' />
  );
};

export function handleStrikethrough(range) {
  if (range?.length) {
    this.quill.insertText(range.index, '<s>');
    this.quill.insertText(range.index + range.length + 3, '</s>');
    return;
  }

  const cursorPosition = this.quill.getSelection()?.index;
  const draggedLength = this.quill.selection.lastRange.length;

  this.quill.insertText(cursorPosition, '<s>');
  this.quill.insertText(cursorPosition + draggedLength + 3, '</s>');
};

export default CustomStrikethrough;
