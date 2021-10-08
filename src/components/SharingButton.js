import React, { useState } from 'react';
import styled from '@emotion/styled';

import SharingModal from './SharingModal';

const SharingButton = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);

  const handleButton = () => {
    setIsShowingModal(true);
  };

  return (
    <ButtonWrapper>
      {isShowingModal && <SharingModal updateModal={setIsShowingModal} />}
      <button onClick={handleButton}>공유하기</button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  text-align: right;
  margin-bottom: 5px;

  button {
    cursor: pointer;
    width: 120px;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    background-color: white;
    box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.2);
  }
`;

export default SharingButton;
