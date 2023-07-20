import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  test('should update calcData when buttons are clicked', () => {
    // Render the Calculator component
    const { getByText, getByTestId } = render(<Calculator />);

    // Click on buttons and verify state updates
    fireEvent.click(getByText('1'));
    expect(getByTestId('result-input')).toHaveValue('1');

    fireEvent.click(getByText('+'));
    expect(getByTestId('result-input')).toHaveValue('1');

    fireEvent.click(getByText('2'));
    expect(getByTestId('result-input')).toHaveValue('2');

    fireEvent.click(getByText('='));
    expect(getByTestId('result-input')).toHaveValue('3');

    fireEvent.click(getByText('x'));
    expect(getByTestId('result-input')).toHaveValue('3');

    fireEvent.click(getByText('4'));
    expect(getByTestId('result-input')).toHaveValue('4');

    fireEvent.click(getByText('='));
    expect(getByTestId('result-input')).toHaveValue('12');

    fireEvent.click(getByText('AC'));
    expect(getByTestId('result-input')).toHaveValue('');
  });

  test('should match the snapshot', () => {
    // Render the Calculator component
    const { asFragment } = render(<Calculator />);

    // Create a snapshot and compare it to the stored snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});
