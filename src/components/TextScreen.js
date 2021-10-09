import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import CustomToolbar from './CustomToolbar';
import MarkdownView from './MarkdownView';
import Editor from './Editor';
import SaveBox from './shared/SaveBox';

import TextScreenWrapper from './shared/TextScreenWrapper';

const TextScreen = () => {
  const { isSaved } = useSelector((state) => state.contents);

  return (
    <TextScreenWrapper>
      {isSaved && <SaveBox />}
      <Header>
        <CustomToolbar />
      </Header>
      <Main>
        <Editor />
        <MarkdownView />
      </Main>
    </TextScreenWrapper>
  );
};

const Header = styled.div`
  padding: 5px;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default TextScreen;
