import React from 'react';
import { FaTable } from 'react-icons/fa';

const CustomTable = () => {
  return (
    <button className='ql-table'>
      <FaTable />
    </button>
  );
};

export function handleTable() {
  console.log('this is handler');
};

export default CustomTable;
