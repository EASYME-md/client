import React from 'react';
import { GoFileCode } from 'react-icons/go';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeBeforeAndAfter from '../../utils/addTypeBeforeAndAfter';

const CustomCodeBlock = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents, shallowEqual);

  const handleButton = () => {
    const resultValue = addTypeBeforeAndAfter(textArea, '\n```\n', '\n```\n');

    dispatch(addText(resultValue));
  };

  return (
    <button title='Code block' onClick={handleButton}>
      <GoFileCode />
    </button>
  );
};

export default CustomCodeBlock;
