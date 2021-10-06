import React from 'react';
import { CgListTree } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeCurrentPosition from '../../utils/addTypeCurrentPosition';

const CustomContents = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = () => {
    const resultValue = addTypeCurrentPosition(textArea, '\n1. [title1](#wirte-title-here!)\n2. [title2](#only-lowercase)\n3. [title3](#use"-"instead-of-spacing-words)\n4. [title4](#example)\n    - [EASYME.md가 뭐예요?](#easymemd가-뭐예요)\n    - [좀 더 구체적으로 가르쳐주세요!](#좀-더-구체적으로-가르쳐주세요)\n');

    dispatch(addText(resultValue));
  };

  return (
    <button className='ql-contents' title='Table of contents' onClick={handleButton}>
      <CgListTree />
    </button>
  );
};

export default CustomContents;
