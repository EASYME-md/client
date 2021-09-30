import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';

const CustomFold = () => {
  return (
    <button className='ql-fold'>
      <FaFolderOpen />
    </button>
  );
};

export function handleFold() {
  console.log('this is handler');
};

export default CustomFold;
