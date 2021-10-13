import React from 'react';
import { FaStrikethrough } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeBeforeAndAfter from '../../utils/addTypeBeforeAndAfter';

const CustomStrikethrough = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const resultValue = addTypeBeforeAndAfter(textArea, '<s>', '</s>');

    dispatch(addText(resultValue));
  };

  return (
    <button title='Strikethrough' onClick={handleButton}>
      <FaStrikethrough />
    </button>
  );
};

export default CustomStrikethrough;
