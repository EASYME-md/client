import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { addLinkId, addText, addTextArea, saveText } from '../features/slice';
import addTypeBeforeAndAfter from '../utils/addTypeBeforeAndAfter';
import addTypeCurrentPosition from '../utils/addTypeCurrentPosition';
import { saveContents } from '../api';

const Editor = () => {
  const inputText = useRef();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
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

    if (e.code === 'KeyS' && isMetaKey) {
      e.preventDefault();

      let link = pathname.replace('/d/', '');

      if (link === '/d') {
        link = '';
      }

      if (!link) {
        const id = nanoid(10);

        dispatch(addLinkId(id));
        dispatch(saveText());
        saveContents(id, text);
        setTimeout(() => {
          window.location.href = `/d/${id}`;
        }, 700);
      }

      if (link) {
        dispatch(addLinkId(link));
        dispatch(saveText());
        saveContents(link, text);
        setTimeout(() => {
          window.location.href = `/d/${link}`;
        }, 700);
      }
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
  border: none;
  border-right: 1px solid #dddddd;
  width: 50%;

  :focus {
    outline: none;
  }

  ${({ className }) => {
    if (className === 'full-editor') {
      return `
        width: 100% !important;
      `;
    }

    if (className === 'none-editor') {
      return `
        display: none;
      `;
    }
  }};
`;

export default Editor;
