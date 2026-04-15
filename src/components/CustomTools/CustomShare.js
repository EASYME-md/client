import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { FaShareSquare } from 'react-icons/fa';

import shareDocument from '../../utils/shareDocument';

const CustomShare = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents, shallowEqual);

  const handleButton = () => shareDocument(textArea, dispatch);

  return (
    <button title='Share link (Cmd/Ctrl+S)' onClick={handleButton}>
      <FaShareSquare />
    </button>
  );
};

export default CustomShare;
