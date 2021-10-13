import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ErrorPage = ({ message }) => {
  return (
    <Wrapper>
      <State>{message}</State>
      <Message>
        {message === '404 Not Found'
          ? <>
            <div>요청한 페이지를 찾을 수 없습니다. 공유되지 않은 주소입니다.</div>
            <div>공유를 원할 경우, 툴바 가장 오른쪽에 공유 버튼을 눌러주세요.</div>
          </>
          : <>
            <div>알 수 없는 오류입니다. 잠시 후에 다시 시도해주세요.</div>
          </>
        }
      </Message>
      <Button to='/'>홈으로 돌아가기</Button>
    </Wrapper>
  );
};

ErrorPage.propTypes = {
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
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  background-color: #7f8eaa;
  justify-content: center;
  text-decoration-line: none;
  padding: 20px;
  color: white;
`;

export default ErrorPage;
