import React from 'react';
import { GoFileCode } from 'react-icons/go';

const CustomLanguageCodeBlock = () => {
  return (
    <button className='ql-language-code-block'>
      <GoFileCode />
    </button>
  );
};

export function handleLanguageCodeBlock() {
  console.log('this is handler');
};

export default CustomLanguageCodeBlock;
