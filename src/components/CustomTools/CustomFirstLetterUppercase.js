import React from 'react';
import { IoText } from 'react-icons/io5';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { insert } from 'text-field-edit';

import { addText } from '../../features/slice';

const CustomFirstLetterUppercase = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents, shallowEqual);

  const handleButton = () => {
    const startPosition = textArea.selectionStart;
    const endPosition = textArea.selectionEnd;
    if (startPosition === endPosition) return;

    const scroll = textArea.scrollTop;
    const draggedText = textArea.value.substring(startPosition, endPosition);
    const firstLetter = draggedText.substring(0, 1).toUpperCase();
    const restLetters = draggedText.substring(1).toLowerCase();
    const transformed = firstLetter + restLetters;

    textArea.focus();
    insert(textArea, transformed);
    textArea.setSelectionRange(startPosition, endPosition);
    textArea.scrollTop = scroll;

    dispatch(addText(textArea.value));
  };

  return (
    <button
      title='Convert first letter to uppercase'
      onClick={handleButton}
    >
      <IoText />
    </button>
  );
};

export default CustomFirstLetterUppercase;
