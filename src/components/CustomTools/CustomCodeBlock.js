import React from 'react';
import { GoFileCode } from 'react-icons/go';

const CustomCodeBlock = () => {
  return (
    <button className='ql-custom-code-block'>
      <GoFileCode />
    </button>
  );
};

export function handleCodeBlock() {
  console.log('this is handler');
};

export default CustomCodeBlock;
