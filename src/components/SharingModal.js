import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AiOutlineLink } from 'react-icons/ai';
import PropTypes from 'prop-types';

const SharingModal = ({ url, updateModal }) => {
  const linkValue = useRef();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      linkValue.current.select();
      document.execCommand('copy');
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div css={link}>
      <Background onClick={() => updateModal(false)} />
      <ModalWrapper>
        <ModalWindow>
          <IconWrapper onClick={handleCopy}>
            <AiOutlineLink css={icon} />
          </IconWrapper>
          <InputWrapper>
            <input
              type='text'
              value={url}
              ref={linkValue}
              readOnly
              onMouseDown={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
            />
            <button onClick={handleCopy}>{copied ? '복사됨' : '복사'}</button>
          </InputWrapper>
        </ModalWindow>
      </ModalWrapper>
    </div>
  );
};

SharingModal.propTypes = {
  url: PropTypes.string.isRequired,
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
  z-index: 3000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3100;
`;

const ModalWindow = styled.div`
  width: 400px;
  height: 160px;
  padding: 40px;
  text-align: center;
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
  background-color: #f9f9f9;

  input {
    width: 65%;
    border: none;
    background-color: #f9f9f9;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    pointer-events: none;
  }

  button {
    cursor: pointer;
    font-weight: 700;
    text-align: right;
    color: #2E3341;
    width: 25%;
    height: 100%;
    border: none;
    background-color: #f9f9f9;
  }
`;

export default SharingModal;
