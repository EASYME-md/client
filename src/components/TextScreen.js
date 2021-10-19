import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import CustomToolbar from './CustomToolbar';
import MarkdownView from './MarkdownView';
import Editor from './Editor';
import SaveBox from './shared/SaveBox';

import TextScreenWrapper from './shared/TextScreenWrapper';

const TextScreen = () => {
  const { isSaved, fullScreen } = useSelector((state) => state.contents);

  return (
    <>
      {isSaved && <SaveBox />}
      <Header className={fullScreen ? 'full-screen' : ''}>
        <CustomToolbar />
      </Header>
      <TextScreenWrapper>
        <Main>
          <Editor />
          <MarkdownView />
        </Main>
      </TextScreenWrapper>
    </>
  );
};

const Header = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  width: 90%;
  margin: 0 auto;
  z-index: 2000;
  background-color: white;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 1px solid #dddddd;

  ${({ className }) => {
    if (className === 'full-screen') {
      return `
        position: fixed;
        width: 100%;
        top: 0;
      `;
    }
  }};
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default TextScreen;
