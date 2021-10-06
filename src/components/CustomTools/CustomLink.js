import React from 'react';
import { FaLink } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeCurrentPosition from '../../utils/addTypeCurrentPosition';

const CustomLink = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const link = prompt('Enter the URL', 'http://');

    if (link) {
      const resultValue = addTypeCurrentPosition(textArea, `[title](${link})   \n`);

      dispatch(addText(resultValue));
    }
  };

  return (
    <button className='ql-link' title='Link' onClick={handleButton}>
      <FaLink />
    </button>
  );
};

export default CustomLink;
