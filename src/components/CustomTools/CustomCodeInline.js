import React from 'react';
import { FaCode } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeBeforeAndAfter from '../../utils/addTypeBeforeAndAfter';

const CustomCodeInline = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const resultValue = addTypeBeforeAndAfter(textArea, '`', '`');

    dispatch(addText(resultValue));
  };

  return (
    <button title='Code inline' onClick={handleButton}>
      <FaCode />
    </button>
  );
};

export default CustomCodeInline;
