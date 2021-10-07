import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import './Editor.css';
import { addText, addTextArea } from '../../features/slice';
import addTypeBeforeAndAfter from '../../utils/addTypeBeforeAndAfter';
import addTypeCurrentPosition from '../../utils/addTypeCurrentPosition';

const Editor = () => {
  const inputText = useRef();
  const dispatch = useDispatch();
  const { text, fullEditor, fullMarkdown } = useSelector((state) => state.contents);

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

  const handleClassName = () => {
    if (fullEditor) {
      return 'full-editor';
    }

    if (fullMarkdown) {
      return 'none-editor';
    }

    return '';
  };

  return (
    <TextArea
      className={handleClassName()}
      value={text}
      onChange={onChangeText}
      onKeyDown={handleKeyDown}
      ref={inputText}
    />
  );
};

const TextArea = styled.textarea`
  resize: none;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #cccccc;
  width: 50%;
`;

export default Editor;
