import React from 'react';
import { BsArrowsFullscreen, BsFullscreenExit } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { toggleFullScreen } from '../../features/slice';

const CustomFullScreen = () => {
  const dispatch = useDispatch();
  const { fullScreen } = useSelector((state) => state.contents);

  const handleButton = () => {
    dispatch(toggleFullScreen());
  };

  return (
    <button className='ql-full-screen' title='Full screen' onClick={handleButton}>
      {fullScreen
        ? <BsFullscreenExit />
        : <BsArrowsFullscreen />}
    </button>
  );
};

export default CustomFullScreen;
