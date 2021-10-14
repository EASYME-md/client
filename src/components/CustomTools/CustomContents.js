import React from 'react';
import { CgListTree } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeCurrentPosition from '../../utils/addTypeCurrentPosition';

const CustomContents = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const resultValue = addTypeCurrentPosition(textArea, '1. [title1](#write-title-here!)   \n2. [title2](#only-lowercase)   \n3. [title3](#use"-"instead-of-spacing-words)   \n4. [title4](#example)   \n    - [❓ EASYME.md가 뭐예요?](#-easymemd가-뭐예요)   \n    - [🛠 기능 엿보기](#-기능-엿보기)');

    dispatch(addText(resultValue));
  };

  return (
    <button title='Table of contents' onClick={handleButton}>
      <CgListTree />
    </button>
  );
};

export default CustomContents;
