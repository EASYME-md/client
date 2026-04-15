import React from 'react';
import { BsArrowsFullscreen, BsFullscreenExit } from 'react-icons/bs';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { toggleFullScreen } from '../../features/slice';

const CustomFullScreen = () => {
  const dispatch = useDispatch();
  const { fullScreen } = useSelector((state) => state.contents, shallowEqual);

  const handleButton = () => {
    dispatch(toggleFullScreen());
  };

  return (
    <button title='Full screen' onClick={handleButton}>
      {fullScreen
        ? <BsFullscreenExit />
        : <BsArrowsFullscreen />}
    </button>
  );
};

export default CustomFullScreen;
