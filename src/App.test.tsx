import React from 'react';
import {render, screen} from '@testing-library/react';

import App from './App';

test('Should be on the main page', () => {
  render(<App />);
  const linkElement = screen.getByText('Home');
  expect(linkElement).toMatchSnapshot('<h1>Home</h1>');
});
