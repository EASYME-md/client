import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import MarkdownPreview from '@uiw/react-markdown-preview';

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
  padding-bottom: 70px;
  border: none;
  width: 50%;

  ${({ className }) => {
    if (className === 'full-preview') {
      return `
        width: 100% !important;
      `;
    }

    if (className === 'none-preview') {
      return `
        display: none;
      `;
    }
  }};
`;

export default MarkdownView;
