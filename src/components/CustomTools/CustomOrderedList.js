import React from 'react';
import { FaListOl } from 'react-icons/fa';

const CustomOrderedList = () => {
  return (
    <button className='ql-ordered-list' title='Ordered list'>
      <FaListOl />
    </button>
  );
};

export function handleOrderedList() {
  if (this.quill.getSelection()) {
    const cursorPosition = this.quill.getSelection().index;
    const lastCursorPosition = this.quill.selection.getRange()[0].length;
    const offset = this.quill.selection.getRange()[1].start.offset;
    const draggedRow = this.quill.getLines(cursorPosition, lastCursorPosition + 1);
    const draggedRowLength = draggedRow.length;
    let startingPosition = cursorPosition - offset;

    for (let i = 0; i < draggedRowLength; i++) {
      if (i === 0) {
        this.quill.insertText(startingPosition, '1. ');
        continue;
      }

      const nextRow = draggedRow[i - 1].cache.length;
      startingPosition += nextRow;

      this.quill.insertText(startingPosition, `${i + 1}. `);
    }
  }
};

export default CustomOrderedList;
