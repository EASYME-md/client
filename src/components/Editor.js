import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useDispatch, useSelector } from 'react-redux';
import { inputText } from '../features/textSlice';

const Editor = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text.value);

  const onChangeText = (e) => {
    dispatch((inputText(e)));
  }

  return (
    <ReactQuill css={editor} theme="snow" value={text} onChange={onChangeText} />
  );
}

const editor = css`
  width: 50%;
  height: 70vh;
`;

export default Editor;
