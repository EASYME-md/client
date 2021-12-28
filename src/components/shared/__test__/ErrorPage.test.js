/** * @jest-environment jsdom */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import ErrorPage from '../ErrorPage';

describe('<ErrorPage />', () => {
  const notFoundMessage = '요청한 페이지를 찾을 수 없습니다. 공유되지 않은 주소입니다.';
  const errorMessage = '잠시 후에 다시 시도해주세요.';

  it('should render 404 Not Found', () => {
    const { getByText } = render(
      <Router>
        <ErrorPage message='404 Not Found' />
      </Router>
    );

    const state = getByText('404 Not Found');
    const message = getByText(notFoundMessage);
    const homeButton = getByText('홈으로 돌아가기');

    expect(state).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();

    expect(state).toHaveTextContent('404 Not Found');
    expect(message).toHaveTextContent(notFoundMessage);
    expect(message).not.toHaveTextContent(errorMessage);
  });

  it('should render error message other than 404 Not Found', () => {
    const { getByText } = render(
      <Router>
        <ErrorPage message='500 Internal server error' />
      </Router>
    );

    const state = getByText('일시적인 오류가 발생했습니다.');
    const message = getByText(errorMessage);

    expect(state).toBeInTheDocument();
    expect(message).toBeInTheDocument();

    expect(state).toHaveTextContent('일시적인 오류가 발생했습니다.');
    expect(message).toHaveTextContent(errorMessage);
    expect(message).not.toHaveTextContent(notFoundMessage);
  });
});
