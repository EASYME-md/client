import React from 'react';
import { IoText } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';

const CustomFirstLetterUppercase = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const startPosition = textArea.selectionStart;
    const endPosition = textArea.selectionEnd;
    const draggedLength = endPosition - startPosition;

    const startText = textArea.value.substring(startPosition, 0);
    const endText = textArea.value.substring(startPosition + draggedLength);
    const draggedText = textArea.value.substring(startPosition, endPosition);
    const firstLetter = draggedText.substring(0, 1).toUpperCase();
    const restLetters = draggedText.substring(1).toLowerCase();

    const resultValue = startText + firstLetter + restLetters + endText;

    dispatch(addText(resultValue));
  };

  return (
    <button
      className='ql-first-letter-uppercase'
      title='Convert first letter to uppercase'
      onClick={handleButton}
    >
      <IoText />
    </button>
  );
};

export default CustomFirstLetterUppercase;
