import React from 'react';
import { FaAmilia } from 'react-icons/fa';

const CustomLowercase = () => {
  return (
    <button className='ql-lowercase'>
      <FaAmilia />
    </button>
  );
};

export function handleLowercase() {
  console.log('this is handler');
};

export default CustomLowercase;
