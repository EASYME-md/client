import React from 'react';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { toggleMarkdown } from '../../features/slice';

const CustomMarkdownView = () => {
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(toggleMarkdown());
  };

  return (
    <button className='ql-preview' title='Only markdown preview' onClick={handleButton}>
      <BsFillEyeSlashFill />
    </button>
  );
};

export default CustomMarkdownView;
