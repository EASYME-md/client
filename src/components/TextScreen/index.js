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
  margin: 0 auto;
  border: 1px solid red;
  border-radius: 15px;
  width: 90%;
  height: 70vh;
  background: white;

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
