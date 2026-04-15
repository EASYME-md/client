import React from 'react';
import { BsEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { toggleMarkdown } from '../../features/slice';

const CustomMarkdownView = () => {
  const dispatch = useDispatch();
  const { fullMarkdown } = useSelector((state) => state.contents, shallowEqual);

  const handleButton = () => {
    dispatch(toggleMarkdown());
  };

  return (
    <button title='Only markdown preview' onClick={handleButton}>
      {fullMarkdown
        ? <BsFillEyeSlashFill />
        : <BsEyeFill />}
    </button>
  );
};

export default CustomMarkdownView;
