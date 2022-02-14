import React from 'react';
import { render, screen } from '@testing-library/react';
import { AnimatedLink } from '../AnimatedLink';

it('should render as a <a /> by default', () => {
  render(<AnimatedLink data-testid="link" />);
  const element = screen.getByTestId('link');

  expect(element.tagName).toEqual('A');
});

it('should render as a custom element', () => {
  render(<AnimatedLink component="span" data-testid="link" />);
  const element = screen.getByTestId('link');

  expect(element.tagName).toEqual('SPAN');
});

it('should apply a custom className', () => {
  render(<AnimatedLink className="test" data-testid="link" />);
  const element = screen.getByTestId('link');

  expect(element).toHaveClass('test');
});

it('should apply arbitrary props', () => {
  render(<AnimatedLink data-foo="bar" data-testid="link" />);
  const element = screen.getByTestId('link');

  expect(element.dataset['foo']).toBe('bar');
});

it('should render custom children', () => {
  render(<AnimatedLink>Hello world</AnimatedLink>);

  expect(screen.getByText(/hello world/i)).toBeDefined();
});
