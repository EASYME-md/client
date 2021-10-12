import React from 'react';
import { FaAmilia } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { replace } from 'text-field-edit';

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
    const result = startText + draggedText + endText;

    replace(textArea, textArea.value, result);
    textArea.focus();
    textArea.selectionStart = startPosition + draggedLength;
    textArea.selectionEnd = textArea.selectionStart;

    dispatch(addText(result));
  };

  return (
    <button title='Lowercase' onClick={handleButton}>
      <FaAmilia />
    </button>
  );
};

export default CustomLowercase;
