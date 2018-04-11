import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Button } from '../Button';

it('should render', () => {
  const component = renderer.create(<Button />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should display additional classes', () => {
  const wrapper = shallow(<Button className="my-class" />);

  expect(wrapper.hasClass('my-class')).toBe(true);
});

it('should render additional props', () => {
  const wrapper = shallow(<Button data-test="my-attribute" />);

  expect(wrapper.find('[data-test="my-attribute"]')).toHaveLength(1);
});

it('should render as a <button> by default', () => {
  const wrapper = shallow(<Button />);

  expect(wrapper.type()).toBe('button');
});

it('should render as a custom tag', () => {
  const wrapper = shallow(<Button tag="a" />);

  expect(wrapper.type()).toBe('a');
});

it('should render children', () => {
  const wrapper = shallow(<Button>Foo</Button>);

  expect(wrapper.text()).toBe('Foo');
});
