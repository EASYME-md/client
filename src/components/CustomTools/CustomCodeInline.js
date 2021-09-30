import React from 'react';
import { FaCode } from 'react-icons/fa';

const CustomCodeInline = () => {
  return (
    <button className='ql-code-inline'>
      <FaCode />
    </button>
  );
};

export function handleCodeInline() {
  console.log('this is handler');
};

export default CustomCodeInline;
