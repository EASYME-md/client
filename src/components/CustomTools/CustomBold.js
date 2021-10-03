import React from 'react';

const CustomBold = () => {
  return (
    <button className='ql-bold' title='Bold' />
  );
};

export function handleBold(range) {
  if (range?.length) {
    this.quill.insertText(range.index, '**');
    this.quill.insertText(range.index + range.length + 2, '**');
    return;
  }

  if (this.quill.getSelection()) {
    const cursorPosition = this.quill.getSelection().index;
    const draggedLength = this.quill.getSelection().length;

    this.quill.insertText(cursorPosition, '**');
    this.quill.insertText(cursorPosition + draggedLength + 2, '**');
  }
};

export default CustomBold;
