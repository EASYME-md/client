import React from 'react';
import { FaUndoAlt } from 'react-icons/fa';

const CustomUndo = () => {
  const handleButton = () => {
    document.execCommand('undo');
  };

  return (
    <button title='Undo' onClick={handleButton}>
      <FaUndoAlt />
    </button>
  );
};

export default CustomUndo;
