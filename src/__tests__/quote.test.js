import React from 'react';
import { render } from '@testing-library/react';
import QuoteDisplay from '../components/quote';

test('renders QuoteDisplay component correctly', () => {
  const { container } = render(<QuoteDisplay />);
  expect(container).toMatchSnapshot();
});
