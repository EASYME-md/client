import React from 'react';
import { CgListTree } from 'react-icons/cg';

const CustomContents = () => {
  return (
    <button className='ql-contents'>
      <CgListTree />
    </button>
  );
};

export function handleContents() {
  console.log('this is handler');
};

export default CustomContents;
