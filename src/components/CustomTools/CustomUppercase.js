import React from 'react';
import { FaFont } from 'react-icons/fa';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { insert } from 'text-field-edit';

import { addText } from '../../features/slice';

const CustomUppercase = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents, shallowEqual);

  const handleButton = () => {
    const startPosition = textArea.selectionStart;
    const endPosition = textArea.selectionEnd;
    if (startPosition === endPosition) return;

    const scroll = textArea.scrollTop;
    const draggedText = textArea.value.substring(startPosition, endPosition).toUpperCase();

    textArea.focus();
    insert(textArea, draggedText);
    textArea.setSelectionRange(startPosition, endPosition);
    textArea.scrollTop = scroll;

    dispatch(addText(textArea.value));
  };

  return (
    <button title='Uppercase' onClick={handleButton}>
      <FaFont />
    </button>
  );
};

export default CustomUppercase;
