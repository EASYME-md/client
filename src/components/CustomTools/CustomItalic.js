import React from 'react';
import { FaItalic } from 'react-icons/fa';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeBeforeAndAfter from '../../utils/addTypeBeforeAndAfter';

const CustomItalic = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents, shallowEqual);

  const handleButton = () => {
    const resultValue = addTypeBeforeAndAfter(textArea, '*');

    dispatch(addText(resultValue));
  };

  return (
    <button title='Italic' onClick={handleButton}>
      <FaItalic />
    </button>
  );
};

export default CustomItalic;
