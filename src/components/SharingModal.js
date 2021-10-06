import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { AiOutlineLink } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { saveContents } from '../api';

const SharingModal = ({ updateModal }) => {
  const CLIENT_PORT = process.env.REACT_APP_CLIENT_PORT;
  const linkValue = useRef();
  const { text } = useSelector((state) => state.contents);
  const { url } = useRouteMatch();
  const linkId = url.slice(1);

  useEffect(() => {
    saveContents(linkId, text);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(linkValue.current.defaultValue);
  };

  return (
    <>
      <ModalWrapper onClick={() => updateModal(false)} />
      <ModalWindow>
        <IconWrapper onClick={handleCopy} >
          <AiOutlineLink fontSize={28} color='#ffffff' />
        </IconWrapper>
        <InputWrapper>
          <input type='text' value={`http://localhost:${CLIENT_PORT}/${linkId}`} ref={linkValue} readOnly />
          <button onClick={handleCopy}>복사</button>
        </InputWrapper>
      </ModalWindow>
    </>
  );
};

SharingModal.propTypes = {
  updateModal: PropTypes.func.isRequired,
};

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
`;

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 160px;
  padding: 40px;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);
  z-index: 200;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #2E3341;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  width: 100%;
  height: 40px;
  background-color: #f9f9f9;;

  input {
    width: 65%;
    border: none;
    background-color: #f9f9f9;;
  }

  button {
    cursor: pointer;
    font-weight: 700;
    text-align: right;
    color: #2E3341;
    width: 25%;
    height: 100%;
    border: none;
    background-color: #f9f9f9;;
  }
`;

export default SharingModal;
