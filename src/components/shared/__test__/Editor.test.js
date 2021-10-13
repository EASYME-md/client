/** * @jest-environment jsdom */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import Editor from '../../Editor';
import createStore from '../../../store';

const store = createStore();

describe('<Editor />', () => {
  const text = 'EASYME.md를 방문해주셔서 감사합니다!';

  it('should display when adding text', () => {
    render(
      <Provider store={store}>
        <Router>
          <Editor />
        </Router>
      </Provider>
    );

    const textArea = document.querySelector('#textarea');

    fireEvent.change(textArea, { target: { value: text } });

    expect(textArea).toBeEnabled();
    expect(textArea).toHaveDisplayValue(text);
  });
});
