import React from 'react';
import { mount } from 'enzyme';
import Example from '../Example';

it('should render as a <div /> by default', () => {
  const wrapper = mount(<Example />);

  expect(wrapper.childAt(0).type()).toBe('div');
});

it('should render children', () => {
  const wrapper = mount(<Example>Test</Example>);

  expect(wrapper.text()).toBe('Test');
});

it('should render with a custom element', () => {
  const wrapper = mount(<Example as="span" />);

  expect(wrapper.childAt(0).type()).toBe('span');
});

it('should render additional props', () => {
  const wrapper = mount(<Example data-test="my-attribute" />);

  expect(wrapper.childAt(0).find('[data-test="my-attribute"]')).toHaveLength(1);
});

it('should display additional classes', () => {
  const wrapper = mount(<Example className="my-class" />);

  expect(wrapper.childAt(0).hasClass('my-class')).toBe(true);
});
