import React from 'react';
import styled from '@emotion/styled';

import CustomToolbar from './CustomToolbar';
import Preview from './Preview';
import Editor from './Editor';

const TextScreen = () => {
  return (
    <ScreenWrapper>
      <header>
        <CustomToolbar />
      </header>
      <main>
        <Editor />
        <Preview />
      </main>
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  border: 1px solid red;
  border-radius: 15px;

  main {
    display: flex;
    width: 100%;
    height: 70vh;
  }
`;

export default TextScreen;