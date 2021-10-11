/** * @jest-environment jsdom */
import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import Title from '../Title';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Title Test', () => {
  const history = createMemoryHistory();

  act(() => {
    ReactDOM.render(
      <Router history={history}>
        <Title />
      </Router>,
      container
    );
  });

  expect(container.textContent).toBe('EASYME.md');
});
