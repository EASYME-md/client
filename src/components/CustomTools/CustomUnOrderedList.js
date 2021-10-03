import React from 'react';
import { FaListUl } from 'react-icons/fa';

const CustomUnOrderedList = () => {
  return (
    <button className='ql-unordered-list' title='Unordered list'>
      <FaListUl />
    </button>
  );
};

export function handleUnOrderedList() {
  if (this.quill.getSelection()) {
    const cursorPosition = this.quill.getSelection().index;
    const lastCursorPosition = this.quill.selection.getRange()[0].length;
    const offset = this.quill.selection.getRange()[1].start.offset;
    const draggedRow = this.quill.getLines(cursorPosition, lastCursorPosition + 1);
    const draggedRowLength = draggedRow.length;
    let startingPosition = cursorPosition - offset;

    for (let i = 0; i < draggedRowLength; i++) {
      if (i === 0) {
        this.quill.insertText(startingPosition, '- ');
        continue;
      }

      const nextRow = draggedRow[i - 1].cache.length;
      startingPosition += nextRow;

      this.quill.insertText(startingPosition, '- ');
    }
  }
};

export default CustomUnOrderedList;
