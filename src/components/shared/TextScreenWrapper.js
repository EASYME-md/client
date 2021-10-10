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
  height: 70vh;
  background: white;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 5px 5px;
  z-index: 1000;

  ${({ className }) => {
    if (className === 'full-screen') {
      return `
        position: fixed !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 300;
        top: 2rem;
        left: 0;
        background: white;
      `;
    }
  }};

  @media (max-width: 819px) {
    top: 7%;
  }

  @media (max-width: 333px) {
    top: 9%;
  }
`;

export default TextScreenWrapper;
