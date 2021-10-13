/** * @jest-environment jsdom */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import Title from '../Title';

describe('<Title />', () => {
  it('should match the title', () => {
    const { getByText } = render(
      <Router>
        <Title />
      </Router>
    );

    const title = getByText('EASYME.md');

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('EASYME.md');
  });

  it('should match image', () => {
    const { getByAltText } = render(
      <Router>
        <Title />
      </Router>
    );

    const image = getByAltText('easyme');

    expect(image).toHaveAttribute('src');
  });
});
