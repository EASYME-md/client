import React from 'react';
import { FaAmilia } from 'react-icons/fa';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { insert } from 'text-field-edit';

import { addText } from '../../features/slice';

const CustomLowercase = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents, shallowEqual);

  const handleButton = () => {
    const startPosition = textArea.selectionStart;
    const endPosition = textArea.selectionEnd;
    if (startPosition === endPosition) return;

    const scroll = textArea.scrollTop;
    const draggedText = textArea.value.substring(startPosition, endPosition).toLowerCase();

    textArea.focus();
    insert(textArea, draggedText);
    textArea.setSelectionRange(startPosition, endPosition);
    textArea.scrollTop = scroll;

    dispatch(addText(textArea.value));
  };

  return (
    <button title='Lowercase' onClick={handleButton}>
      <FaAmilia />
    </button>
  );
};

export default CustomLowercase;
