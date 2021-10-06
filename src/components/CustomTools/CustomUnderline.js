import React from 'react';
import { FaUnderline } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeBeforeAndAfter from '../../utils/addTypeBeforeAndAfter';

const CustomUnderline = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const resultValue = addTypeBeforeAndAfter(textArea, '<u>', '</u>');

    dispatch(addText(resultValue));
  };

  return (
    <button className='ql-underline' title='Underline' onClick={handleButton}>
      <FaUnderline />
    </button>
  );
};

export default CustomUnderline;
