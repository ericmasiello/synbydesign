import React from 'react';
import { mount } from 'enzyme';
import Header from '../Header';

it('should allow custom a className', () => {
  const wrapper = mount(<Header className="foo" />);

  expect(wrapper.find('header').hasClass('foo')).toBe(true);
});

it('should allow arbitrary attributes', () => {
  const wrapper = mount(<Header data-test="true" />);

  expect(wrapper.find('header[data-test="true"]')).toHaveLength(1);
});
