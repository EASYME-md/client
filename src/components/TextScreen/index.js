import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import './TextScreen.css';
import CustomToolbar from '../CustomToolbar';
import MarkdownView from '../MarkdownView';
import Editor from '../Editor';

const TextScreen = () => {
  const { fullScreen } = useSelector((state) => state.contents);

  return (
    <ScreenWrapper className={fullScreen ? 'full-screen' : ''}>
      <header>
        <CustomToolbar />
      </header>
      <main>
        <Editor />
        <MarkdownView />
      </main>
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 15px;
  width: 90%;
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
