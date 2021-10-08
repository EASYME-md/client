import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import character from '../assets/easyme.png';

const Title = () => {
  return (
    <Wrapper>
      <img src={character} css={image} alt='easyme' />
      <div css={title}>EASYME.md</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: 'Rubik';
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const image = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 4px 6px 10px rgba(33, 40, 56, 0.1);
  -ms-user-drag: none;
  -moz-user-drag: none;
  -webkit-user-drag: none;
`;

const title = css`
  position: relative;
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: white;
  font-size: 4rem;
  text-shadow: 4px 6px 10px rgba(33, 40, 56, 0.2);
  z-index: 200;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
`;

export default Title;
