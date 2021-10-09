import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NotFound = ({ message }) => {
  return (
    <Wrapper>
      <State>404 {message}</State>
      <Message>
        <div>요청한 페이지를 찾을 수 없습니다. 공유되지 않은 주소입니다.</div>
        <div>공유를 원할 경우, '공유하기' 버튼을 눌러주세요.</div>
      </Message>
      <Button to='/'>홈으로 돌아가기</Button>
    </Wrapper>
  );
};

NotFound.propTypes = {
  message: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  position: absolute;
  padding-top: 10%;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: white;
`;

const State = styled.div`
  margin-bottom: 10px;
  font-size: 40px;
`;

const Message = styled.div`
  div {
    margin-bottom: 10px;
  }
`;

const Button = styled(Link)`
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  width: 160px;
  margin-top: 20px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  background-color: seagreen;
  justify-content: center;
  text-decoration-line: none;
  padding: 20px;
  color: white;
`;

export default NotFound;
