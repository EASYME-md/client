import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import rehypeRow from 'rehype-raw';

const Preview = () => {
  const text = useSelector((state) => state.text.value);

  return (
    <ReactMarkdown
      children={text}
      css={preview}
      rehypePlugins={[rehypeRow]}
    />
  );
};

const preview = css`
  position: absolute;
  right: 0px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #cccccc;
  width: 40%;
  height: 70vh;
`;

export default Preview;
