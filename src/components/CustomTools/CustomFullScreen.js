import React from 'react';
import { BsArrowsFullscreen } from 'react-icons/bs';

const CustomFullScreen = () => {
  return (
    <button className='ql-full-screen'>
      <BsArrowsFullscreen />
    </button>
  );
};

export function handleFullScreen() {
  console.log('this is handler');
};

export default CustomFullScreen;
