import React from 'react';
import { IoText } from 'react-icons/io5';

const CustomFirstLetterUppercase = () => {
  return (
    <button className='ql-first-letter-uppercase'>
      <IoText />
    </button>
  );
};

export function handleFirstLetterUppercase() {
  console.log('this is handler');
};

export default CustomFirstLetterUppercase;
