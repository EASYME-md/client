import React from 'react';
import { FaRegWindowMinimize } from 'react-icons/fa';

const CustomHorizontalRule = () => {
  return (
    <button className='ql-horizontal-rule'>
      <FaRegWindowMinimize />
    </button>
  );
};

export function handleHorizontalRule() {
  console.log('this is handler');
};

export default CustomHorizontalRule;
