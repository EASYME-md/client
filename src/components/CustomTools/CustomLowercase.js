import React from 'react';
import { FaAmilia } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';

const CustomLowercase = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const startPosition = textArea.selectionStart;
    const endPosition = textArea.selectionEnd;
    const draggedLength = endPosition - startPosition;

    const startText = textArea.value.substring(startPosition, 0);
    const endText = textArea.value.substring(startPosition + draggedLength);
    const draggedText = textArea.value.substring(startPosition, endPosition).toLowerCase();

    textArea.value = startText + draggedText + endText;

    dispatch(addText(textArea.value));
  };

  return (
    <button className='ql-lowercase' title='Lowercase' onClick={handleButton}>
      <FaAmilia />
    </button>
  );
};

export default CustomLowercase;
