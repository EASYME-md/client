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

  const onChangeText = (content, delta, source, editor) => {
    dispatch(inputText(editor.getText(content)));
  }

  return (
    <>
      <ReactQuill
        css={editor}
        theme="snow"
        defaultValue={text}
        onChange={onChangeText}
      />
    </>
  );
}

const editor = css`
  position: absolute;
  left: 0px;
  padding: 20px;
  width: 40%;
  height: 70vh;
`;

export default Editor;
