import React, { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import { addText, addTextArea } from '../features/slice';
import addTypeBeforeAndAfter from '../utils/addTypeBeforeAndAfter';
import addTypeCurrentPosition from '../utils/addTypeCurrentPosition';

const Editor = () => {
  const inputText = useRef();
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(addTextArea(inputText.current));
  }, []);

  const onChangeText = (e) => {
    dispatch(addText(e.target.value));
  };

  const handleKeyDown = (e) => {
    const isMetaKey = e.metaKey || e.ctrlKey;

    if (e.code === 'Enter') {
      const resultValue = addTypeCurrentPosition(inputText.current, '   ');

      dispatch(addText(resultValue));
    }

    if (e.code === 'Tab') {
      e.preventDefault();
      const resultValue = addTypeCurrentPosition(inputText.current, '  ');

      dispatch(addText(resultValue));
    }

    if (e.code === 'KeyB' && isMetaKey) {
      const resultValue = addTypeBeforeAndAfter(inputText.current, '**');

      dispatch(addText(resultValue));
    }

    if (e.code === 'KeyI' && isMetaKey) {
      const resultValue = addTypeBeforeAndAfter(inputText.current, '*');

      dispatch(addText(resultValue));
    }

    if (e.code === 'KeyD' && isMetaKey) {
      e.preventDefault();
      const resultValue = addTypeBeforeAndAfter(inputText.current, '<s>', '</s>');

      dispatch(addText(resultValue));
    }

    if (e.code === 'KeyU' && isMetaKey) {
      e.preventDefault();
      const resultValue = addTypeBeforeAndAfter(inputText.current, '<u>', '</u>');

      dispatch(addText(resultValue));
    }
  };

  return (
    <textarea
      css={editor}
      value={text}
      onChange={onChangeText}
      onKeyDown={handleKeyDown}
      ref={inputText}
    />
  );
};

const editor = css`
  position: absolute;
  resize: none;
  padding: 20px;
  width: 40%;
  height: 70vh;
`;

export default Editor;
