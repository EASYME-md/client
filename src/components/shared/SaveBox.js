import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { saveText } from '../../features/slice';

const SaveBox = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(saveText());
    }, 700);
  }, []);

  return (
    <BoxWrapper>
      <Box>저장되었습니다.</Box>
    </BoxWrapper>
  );
};

const transition = keyframes`
  20%, 70% {
    opacity: 100;
    transform: translateY(-5px);
  }
  80% {
    opacity: 0;
    transform: translateY(-5px);
  }
`;

const BoxWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  z-index: 5000;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 90%;
  left: 50%;
  padding: 10px 20px;
  width: 120px;
  height: 30px;
  background-color: white;
  border-radius: 10px;
  opacity: 0;
  font-weight: 600;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.1);
  animation: ${transition} 1s 0.1s linear;
  animation-iteration-count: 1;
`;

export default SaveBox;
