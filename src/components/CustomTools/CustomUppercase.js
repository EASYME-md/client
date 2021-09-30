import React from 'react';
import { FaFont } from 'react-icons/fa';

const CustomUppercase = () => {
  return (
    <button className='ql-uppercase'>
      <FaFont />
    </button>
  );
};

export function handleUppercase() {
  console.log('this is handler');
};

export default CustomUppercase;
