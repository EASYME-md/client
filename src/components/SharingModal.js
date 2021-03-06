import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AiOutlineLink } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SharingModal = ({ updateModal }) => {
  const CLIENT_URI = process.env.REACT_APP_CLIENT_URI;
  const linkValue = useRef();
  const { linkId } = useSelector((state) => state.contents);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(linkValue.current.defaultValue);
  };

  return (
    <Link to={`/d/${linkId}`} css={link}>
      <Background onClick={() => updateModal(false)} />
      <ModalWrapper>
        <ModalWindow>
          <IconWrapper onClick={handleCopy} >
            <AiOutlineLink css={icon} />
          </IconWrapper>
          <InputWrapper>
            <input type='text' value={`${CLIENT_URI}/d/${linkId}`} ref={linkValue} readOnly />
            <button onClick={handleCopy}>복사</button>
          </InputWrapper>
        </ModalWindow>
      </ModalWrapper>
    </Link>
  );
};

SharingModal.propTypes = {
  updateModal: PropTypes.func.isRequired,
};

const link = css`
  cursor: default;
`;

const icon = css`
  font-size: 30px !important;
  color: #ffffff;
`;

const Background = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
`;

const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  justify-content: center;
`;

const ModalWindow = styled.div`
  position: absolute;
  width: 400px;
  height: 160px;
  padding: 40px;
  text-align: center;
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
