import React from 'react';
import { FaUndoAlt } from 'react-icons/fa';

const CustomUndo = () => {
  return (
    <button className='ql-undo' title='Undo'>
      <FaUndoAlt />
    </button>
  );
};

export function handleUndo() {
  return this.quill.history.undo();
};

export default CustomUndo;
