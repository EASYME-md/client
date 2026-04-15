import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { addText, addTextArea } from '../features/slice';
import addTypeBeforeAndAfter from '../utils/addTypeBeforeAndAfter';
import addTypeCurrentPosition from '../utils/addTypeCurrentPosition';
import shareDocument from '../utils/shareDocument';
import { saveDraft } from '../utils/draftStorage';
import { keyType } from '../constants';

const DISPATCH_DEBOUNCE_MS = 150;

const Editor = () => {
  const inputText = useRef();
  const dispatch = useDispatch();
  const { text, fullEditor, fullMarkdown } = useSelector((state) => state.contents, shallowEqual);

  const [localText, setLocalText] = useState(text);
  const debounceTimer = useRef();

  useEffect(() => {
    dispatch(addTextArea(inputText.current));
  }, [dispatch]);

  useEffect(() => {
    setLocalText((prev) => (prev === text ? prev : text));
  }, [text]);

  useEffect(() => () => clearTimeout(debounceTimer.current), []);

  const flushDispatch = (value) => {
    clearTimeout(debounceTimer.current);
    dispatch(addText(value));
    saveDraft(value);
  };

  const onChangeText = (e) => {
    const value = e.target.value;
    setLocalText(value);
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      dispatch(addText(value));
      saveDraft(value);
    }, DISPATCH_DEBOUNCE_MS);
  };

  const handleKeyDown = async (e) => {
    const isMetaKey = e.metaKey || e.ctrlKey;

    if (e.keyCode === keyType.TAB) {
      e.preventDefault();
      const resultValue = addTypeCurrentPosition(inputText.current, '  ');

      setLocalText(resultValue);
      flushDispatch(resultValue);
    }

    if (e.keyCode === keyType.S && isMetaKey) {
      e.preventDefault();
      shareDocument(inputText.current, dispatch);
    }

    if (e.keyCode === keyType.B && isMetaKey) {
      const resultValue = addTypeBeforeAndAfter(inputText.current, '**');

      setLocalText(resultValue);
      flushDispatch(resultValue);
    }

    if (e.keyCode === keyType.I && isMetaKey) {
      const resultValue = addTypeBeforeAndAfter(inputText.current, '*');

      setLocalText(resultValue);
      flushDispatch(resultValue);
    }

    if (e.keyCode === keyType.D && isMetaKey) {
      e.preventDefault();
      const resultValue = addTypeBeforeAndAfter(inputText.current, '<s>', '</s>');

      setLocalText(resultValue);
      flushDispatch(resultValue);
    }

    if (e.keyCode === keyType.U && isMetaKey) {
      e.preventDefault();
      const resultValue = addTypeBeforeAndAfter(inputText.current, '<u>', '</u>');

      setLocalText(resultValue);
      flushDispatch(resultValue);
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
      id='textarea'
      className={handleClassName()}
      value={localText}
      onChange={onChangeText}
      onKeyDown={handleKeyDown}
      ref={inputText}
      spellCheck='false'
    />
  );
};

const TextArea = styled.textarea`
  resize: none;
  box-sizing: border-box;
  font-family: 'Noto Sans KR';
  font-size: 16px;
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

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    border-right: none;
    border-bottom: 1px solid #dddddd;
    padding: 12px;
    font-size: 15px;
  }
`;

export default Editor;
