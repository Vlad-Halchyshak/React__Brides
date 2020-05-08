import React from 'react';
import { render } from '@testing-library/react';
import BridesApp from './App';

it('renders learn react link', () => {
  const { getByText } = render(<BridesApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

