import React from 'react';
import { FaListOl } from 'react-icons/fa';

const CustomOrderedList = () => {
  return (
    <button className='ql-ordered-list'>
      <FaListOl />
    </button>
  );
};

export function handleOrderedList() {
  console.log('this is handler');
};

export default CustomOrderedList;
