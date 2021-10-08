import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaShareSquare } from 'react-icons/fa';
import { nanoid } from 'nanoid';

import SharingModal from '../SharingModal';
import { addLinkId, saveText } from '../../features/slice';
import { saveContents } from '../../api';

const CustomShare = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const { text } = useSelector((state) => state.contents);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleButton = () => {
    let link = pathname.replace('/d/', '');

    if (link === '/d') {
      link = '';
    }

    if (!link) {
      const id = nanoid(10);

      dispatch(addLinkId(id));
      dispatch(saveText());
      saveContents(id, text);
    }

    if (link) {
      dispatch(addLinkId(link));
      dispatch(saveText());
      saveContents(link, text);
    }

    setIsShowingModal(true);
  };

  return (
    <>
      {isShowingModal && <SharingModal updateModal={setIsShowingModal} />}
      <button title='share' onClick={handleButton}>
        <FaShareSquare />
      </button>
    </>
  );
};

export default CustomShare;
