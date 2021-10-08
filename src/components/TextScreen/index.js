import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import './TextScreen.css';
import CustomToolbar from '../CustomToolbar';
import MarkdownView from '../MarkdownView';
import Editor from '../Editor';
import SharingButton from '../SharingButton';

const TextScreen = () => {
  const { fullScreen } = useSelector((state) => state.contents);

  return (
    <Wrapper>
      <SharingButton />
      <ScreenWrapper className={fullScreen ? 'full-screen' : ''}>
        <header>
          <CustomToolbar />
        </header>
        <main>
          <Editor />
          <MarkdownView />
        </main>
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

  header {
    padding: 5px;
  }

  main {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

export default TextScreen;
