import React from 'react';
import { FaRegImage } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeCurrentPosition from '../../utils/addTypeCurrentPosition';

const CustomImageLink = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const link = prompt('Enter the Image URL', 'http://');

    if (link) {
      const resultValue = addTypeCurrentPosition(textArea, `![title](${link})   \n`);

      dispatch(addText(resultValue));
    }
  };

  return (
    <button title='image' onClick={handleButton}>
      <FaRegImage />
    </button>
  );
};

export default CustomImageLink;
