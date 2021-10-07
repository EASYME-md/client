import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import MarkdownPreview from '@uiw/react-markdown-preview';

import './MarkdownView.css';

const MarkdownView = () => {
  const { text, fullEditor, fullMarkdown } = useSelector((state) => state.contents);

  const handleClassName = () => {
    if (fullEditor) {
      return 'none-preview';
    }

    if (fullMarkdown) {
      return 'full-preview';
    }

    return '';
  };

  return (
    <Markdown
      className={handleClassName()}
      source={text}
    />
  );
};

const Markdown = styled(MarkdownPreview)`
  overflow: scroll;
  box-sizing: border-box;
  background-color: white;
  padding: 20px;
  border: none;
  width: 50%;
`;

export default MarkdownView;
