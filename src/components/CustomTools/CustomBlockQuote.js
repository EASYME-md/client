import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeCurrentRow from '../../utils/addTypeCurrentRow';

const CustomBlockQuote = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents, shallowEqual);

  const handleButton = () => {
    const resultValue = addTypeCurrentRow(textArea, '>');

    dispatch(addText(resultValue));
  };

  return (
    <button title='Block quote' onClick={handleButton}>
      <FaQuoteLeft />
    </button>
  );
};

export default CustomBlockQuote;
