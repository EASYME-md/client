import React from 'react';
import { FaTable } from 'react-icons/fa';

const CustomTable = () => {
  return (
    <button className='ql-table' title='Table'>
      <FaTable />
    </button>
  );
};

export function handleTable() {
  if (this.quill.getSelection()) {
    const cursorPosition = this.quill.getSelection().index;
    const draggedLength = this.quill.selection.lastRange.length;

    this.quill.insertText(cursorPosition + draggedLength,
      '\n| title1 | title2 | title3 |\n| --- | --- | --- |\n| 1 | 2 | 3 |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |'
    );
  }
};

export default CustomTable;
