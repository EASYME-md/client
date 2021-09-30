import React from 'react';
import { BsFillEyeSlashFill } from 'react-icons/bs';

const CustomPreview = () => {
  return (
    <button className='ql-preview'>
      <BsFillEyeSlashFill fontSize={16} />
    </button>
  );
};

export function handlePreview() {
  console.log('this is handler');
};

export default CustomPreview;
