import React from 'react';
import { FaRedoAlt } from 'react-icons/fa';

const CustomRedo = () => {
  const handleButton = () => {
    document.execCommand('redo');
  };

  return (
    <button className='ql-redo' title='Redo' onClick={handleButton}>
      <FaRedoAlt />
    </button>
  );
};

export default CustomRedo;
