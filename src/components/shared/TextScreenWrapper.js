import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

const TextScreenWrapper = ({ children }) => {
  const { fullScreen } = useSelector((state) => state.contents);

  return (
    <Wrapper>
      <ScreenWrapper className={fullScreen ? 'full-screen' : ''}>
        {children}
      </ScreenWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ScreenWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  height: 70vh;
  background: white;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  ${({ className }) => {
    if (className === 'full-screen') {
      return `
        position: fixed !important;
        z-index: 300;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
        background: white;
      `;
    }
  }};
`;

export default TextScreenWrapper;
