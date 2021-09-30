import React from 'react';
import { FaRedoAlt } from 'react-icons/fa';

const CustomRedo = () => {
  return (
    <button className='ql-redo'>
      <FaRedoAlt />
    </button>
  )
};

export function handleRedo() {
  return this.quill.history.redo();
};

export default CustomRedo;
