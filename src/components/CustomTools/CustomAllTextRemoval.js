import React from 'react';
import { FaEraser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import { replace } from 'text-field-edit';

const CustomAllTextRemoval = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const emptyText = '';

    replace(textArea, textArea.value, emptyText);
    textArea.focus();
    dispatch(addText(emptyText));
  };

  return (
    <button title='Remove all text' onClick={handleButton}>
      <FaEraser />
    </button>
  );
};

export default CustomAllTextRemoval;
