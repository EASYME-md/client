import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { addLinkId, addText, addTextArea, saveText, addError } from '../features/slice';
import addTypeBeforeAndAfter from '../utils/addTypeBeforeAndAfter';
import addTypeCurrentPosition from '../utils/addTypeCurrentPosition';
import { saveContents } from '../api';
import { keyType } from '../constants';

const Editor = () => {
  const inputText = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const { text, fullEditor, fullMarkdown } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(addTextArea(inputText.current));
  }, [dispatch]);

  const onChangeText = (e) => {
    dispatch(addText(e.target.value));
  };

  const handleKeyDown = async (e) => {
    const isMetaKey = e.metaKey || e.ctrlKey;

    if (e.keyCode === keyType.TAB) {
      e.preventDefault();
      const resultValue = addTypeCurrentPosition(inputText.current, '  ');

      dispatch(addText(resultValue));
    }

    if (e.keyCode === keyType.S && isMetaKey) {
      e.preventDefault();
      let link = pathname.replace('/d/', '');

      if (link === '/d') {
        link = '';
      }

      if (!link) {
        const id = nanoid(10);

        try {
          await saveContents(id, text);
        } catch (err) {
          dispatch(addError(err));
          return;
        }

        dispatch(addLinkId(id));
        dispatch(saveText());
        history.push(`/d/${id}`);
      }

      if (link) {
        try {
          await saveContents(link, text);
        } catch (err) {
          dispatch(addError(err));
          return;
        }

        dispatch(addLinkId(link));
        dispatch(saveText());
        saveContents(link, text);
        history.push(`/d/${link}`);
      }
    }

    if (e.keyCode === keyType.B && isMetaKey) {
      const resultValue = addTypeBeforeAndAfter(inputText.current, '**');

      dispatch(addText(resultValue));
    }

    if (e.keyCode === keyType.I && isMetaKey) {
      const resultValue = addTypeBeforeAndAfter(inputText.current, '*');

      dispatch(addText(resultValue));
    }

    if (e.keyCode === keyType.D && isMetaKey) {
      e.preventDefault();
      const resultValue = addTypeBeforeAndAfter(inputText.current, '<s>', '</s>');

      dispatch(addText(resultValue));
    }

    if (e.keyCode === keyType.U && isMetaKey) {
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
      id='textarea'
      className={handleClassName()}
      value={text}
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
`;

export default Editor;
