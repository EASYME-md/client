import React from 'react';
import { FaFont } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { replace } from 'text-field-edit';

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

    const result = startText + draggedText + endText;

    replace(textArea, textArea.value, result);
    textArea.focus();
    textArea.selectionStart = startPosition + draggedLength;
    textArea.selectionEnd = textArea.selectionStart;

    dispatch(addText(result));
  };

  return (
    <button className='ql-uppercase' title='Uppercase' onClick={handleButton}>
      <FaFont />
    </button>
  );
};

export default CustomUppercase;
