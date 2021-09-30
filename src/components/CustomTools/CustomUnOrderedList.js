import React from 'react';
import { FaListUl } from 'react-icons/fa';

const CustomUnOrderedList = () => {
  return (
    <button className='ql-unordered-list'>
      <FaListUl />
    </button>
  );
};

export function handleUnOrderedList() {
  console.log('this is handler');
};

export default CustomUnOrderedList;
