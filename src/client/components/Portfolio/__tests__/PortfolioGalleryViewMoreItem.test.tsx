import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { GalleryViewMoreItem } from '../PortfolioGalleryViewMoreItem';

it('should render', () => {
  const component = renderer.create(<GalleryViewMoreItem />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should display additional classes', () => {
  const wrapper = shallow(<GalleryViewMoreItem className="my-class" />);

  expect(wrapper.hasClass('my-class')).toBe(true);
});

it('should render additional props', () => {
  const wrapper = shallow(<GalleryViewMoreItem data-test="my-attribute" />);

  expect(wrapper.find('[data-test="my-attribute"]')).toHaveLength(1);
});

it('should render as a <li> by default', () => {
  const wrapper = shallow(<GalleryViewMoreItem />);

  expect(wrapper.type()).toBe('li');
});

it('should render as a custom tag', () => {
  const wrapper = shallow(<GalleryViewMoreItem tag="span" />);

  expect(wrapper.type()).toBe('span');
});

it('should render children', () => {
  const wrapper = shallow(<GalleryViewMoreItem>Foo</GalleryViewMoreItem>);

  expect(wrapper.text()).toBe('Foo');
});
