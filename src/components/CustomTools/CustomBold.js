import React from 'react';

const CustomBold = () => {
  return (
    <button className='ql-bold' />
  );
};

export function handleBold(range) {
  if (range.length) {
    this.quill.insertText(range.index, '**');
    this.quill.insertText(range.index + range.length + 2, '**');
    return;
  }

  const cursorPosition = this.quill.getSelection()?.index;
  const dragedLength = this.quill.selection.lastRange.length;

  this.quill.insertText(cursorPosition, '**');
  this.quill.insertText(cursorPosition + dragedLength + 2, '**');
};

export default CustomBold;
