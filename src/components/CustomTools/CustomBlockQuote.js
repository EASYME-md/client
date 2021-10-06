import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeCurrentColumn from '../../utils/addTypeCurrentColumn';

const CustomBlockQuote = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const resultValue = addTypeCurrentColumn(textArea, '>');

    dispatch(addText(resultValue));
  };

  return (
    <button className='ql-blockquote' title='Block quote' onClick={handleButton}>
      <FaQuoteLeft />
    </button>
  );
};

export default CustomBlockQuote;
