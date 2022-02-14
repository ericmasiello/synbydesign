import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

it('should apply a custom className', () => {
  render(<Header data-testid="header" className="foo" />);

  expect(screen.getByTestId('header')).toHaveClass('foo');
});

it('should apply arbitrary props', () => {
  render(<Header data-testid="header" data-foo="bar" />);

  expect(screen.getByTestId('header').dataset['foo']).toBe('bar');
});
