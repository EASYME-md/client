import React from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeBeforeAndAfter from '../../utils/addTypeBeforeAndAfter';

const CustomFold = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const resultValue = addTypeBeforeAndAfter(textArea, '\n<details><summary>', '\n</summary>\n\n*Write here!*\n</details>\n');

    dispatch(addText(resultValue));
  };

  return (
    <button title='Fold' onClick={handleButton}>
      <AiOutlineCaretRight />
    </button>
  );
};

export default CustomFold;
