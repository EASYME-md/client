import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import MarkdownPreview from '@uiw/react-markdown-preview';

const Preview = () => {
  const text = useSelector((state) => state.contents.text);

  return (
    <MarkdownPreview
      source={text}
      css={preview}
    />
  );
};

const preview = css`
  position: absolute;
  overflow: scroll;
  right: 0px;
  padding: 20px;
  border: 1px solid #cccccc;
  width: 50%;
  height: 70vh;
`;

export default Preview;
