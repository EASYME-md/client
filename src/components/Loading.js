import React from 'react';
/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import TextScreenWrapper from './shared/TextScreenWrapper';

const Loading = () => {
  return (
    <TextScreenWrapper>
      <LoadingWrapper>
        <Spinner />
      </LoadingWrapper>
    </TextScreenWrapper>
  );
};

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
`;

const loadingSpinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 65px;
  height: 65px;
  margin-top: -32px;
  margin-left: -32px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: #7f8eaa;
  border-bottom-color: #7f8eaa;
  animation: ${loadingSpinner} .8s ease infinite;
`;

export default Loading;
