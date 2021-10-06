import React from 'react';
import { FaTable } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeCurrentPosition from '../../utils/addTypeCurrentPosition';

const CustomTable = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const resultValue = addTypeCurrentPosition(textArea, '\n\n| title1 | title2 | title3 |\n| --- | --- | --- |\n| 1 | 2 | 3 |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |\n');

    dispatch(addText(resultValue));
  };

  return (
    <button className='ql-table' title='Table' onClick={handleButton}>
      <FaTable />
    </button>
  );
};

export default CustomTable;
