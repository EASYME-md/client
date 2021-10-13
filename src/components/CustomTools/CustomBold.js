import React from 'react';
import { FaBold } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeBeforeAndAfter from '../../utils/addTypeBeforeAndAfter';

const CustomBold = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const resultValue = addTypeBeforeAndAfter(textArea, '**');

    dispatch(addText(resultValue));
  };

  return (
    <button title='Bold' onClick={handleButton}>
      <FaBold />
    </button>
  );
};

export default CustomBold;
