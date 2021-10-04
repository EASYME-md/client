import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';

import { inputText } from '../features/slice';
import CustomToolbar, { modules, formats } from './CustomToolbar';

const Editor = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.contents);

  const onChangeText = (content, delta, source, editor) => {
    dispatch(inputText(editor.getText(content)));
  };

  return (
    <>
      <CustomToolbar />
      <ReactQuill
        css={editor}
        theme="snow"
        defaultValue={`<xmp>${text}</xmp>`}
        onChange={onChangeText}
        modules={modules}
        formats={formats}
        preserveWhitespace={true}
      />
    </>
  );
};

const editor = css`
  position: absolute;
  left: 0px;
  padding: 20px;
  width: 40%;
  height: 70vh;
`;

export default Editor;
