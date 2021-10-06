import React from 'react';
import { FaFont } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';

const CustomUppercase = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const startPosition = textArea.selectionStart;
    const endPosition = textArea.selectionEnd;
    const draggedLength = endPosition - startPosition;

    const startText = textArea.value.substring(startPosition, 0);
    const endText = textArea.value.substring(startPosition + draggedLength);
    const draggedText = textArea.value.substring(startPosition, endPosition).toUpperCase();

    const resultValue = startText + draggedText + endText;

    dispatch(addText(resultValue));
  };

  return (
    <button className='ql-uppercase' title='Uppercase' onClick={handleButton}>
      <FaFont />
    </button>
  );
};

export default CustomUppercase;
