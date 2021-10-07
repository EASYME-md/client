import React from 'react';
import { BsEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { toggleMarkdown } from '../../features/slice';

const CustomMarkdownView = () => {
  const dispatch = useDispatch();
  const { fullMarkdown } = useSelector((state) => state.contents);

  const handleButton = () => {
    dispatch(toggleMarkdown());
  };

  return (
    <button className='ql-preview' title='Only markdown preview' onClick={handleButton}>
      {fullMarkdown
        ? <BsFillEyeSlashFill />
        : <BsEyeFill />}
    </button>
  );
};

export default CustomMarkdownView;
