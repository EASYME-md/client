import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeCurrentPosition from '../../utils/addTypeCurrentPosition';

const CustomHorizontalRule = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const resultValue = addTypeCurrentPosition(textArea, '\n---\n');

    dispatch(addText(resultValue));
  };

  return (
    <button title='Horizontal rule' onClick={handleButton}>
      <AiOutlineLine />
    </button>
  );
};

export default CustomHorizontalRule;
