import React, { useState } from 'react';

import SharingModal from './SharingModal';

const SharingButton = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);

  const handleButton = () => {
    setIsShowingModal(true);
  };

  return (
    <>
      {isShowingModal && <SharingModal updateModal={setIsShowingModal} />}
      <button onClick={handleButton}>공유하기</button>
    </>
  );
};

export default SharingButton;
