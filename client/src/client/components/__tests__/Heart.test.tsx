import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Heart } from '../Heart';

it('should render', () => {
  const component = renderer.create(<Heart />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should display additional classes', () => {
  const wrapper = shallow(<Heart className="my-class" />);

  expect(wrapper.hasClass('my-class')).toBe(true);
});

it('should render additional props', () => {
  const wrapper = shallow(<Heart data-test="my-attribute" />);

  expect(wrapper.find('[data-test="my-attribute"]')).toHaveLength(1);
});

it('should render as a <button> by default', () => {
  const wrapper = shallow(<Heart />);

  expect(wrapper.type()).toBe('button');
});

it('should render as a custom tag', () => {
  const wrapper = shallow(<Heart tag="a" />);

  expect(wrapper.type()).toBe('a');
});

it('should only render a heart icon', () => {
  const wrapper = shallow(<Heart />);

  expect(wrapper.children().name()).toBe('HeartIcon');
});
