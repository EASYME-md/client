import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const [text, setText] = useState('');

  return (
    <ReactQuill css={editor} theme="snow" value={text} onChange={setText} />
  );
}

const editor = css`
  width: 50%;
  height: 70vh;
`;

export default Editor;
