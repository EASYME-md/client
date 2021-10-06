import React from 'react';

import CustomToolbar from './CustomToolbar';
import Preview from './Preview';
import Editor from './Editor';

const TextScreen = () => {
  return (
    <>
      <CustomToolbar />
      <Editor />
      <Preview />
    </>
  );
};

export default TextScreen;
