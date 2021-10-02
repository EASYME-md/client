import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { inputText } from '../features/contentsSlice';
import CustomToolbar, { modules, formats } from './CustomToolbar';

const Editor = () => {
  const dispatch = useDispatch();
  const { linkId } = useParams();
  const text = useSelector((state) => state.contents.text);

  const fetchContents = async () => {
    try {
      const response = await fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/${linkId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const { message, text } = await response.json();

      if (message === 'OK') {
        dispatch(inputText(text));
        return;
      }
    } catch (err) {
      return err.message;
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  const onChangeText = (content, delta, source, editor) => {
    dispatch(inputText(editor.getText(content)));
  }

  return (
    <>
      <CustomToolbar />
      <ReactQuill
        css={editor}
        theme="snow"
        defaultValue={text}
        onChange={onChangeText}
        modules={modules}
        formats={formats}
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
