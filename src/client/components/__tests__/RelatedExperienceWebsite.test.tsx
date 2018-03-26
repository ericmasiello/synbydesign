import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Props, RelatedExperienceWebsite } from '../RelatedExperienceWebsite';

const base: Props = {
  url: 'http://www.synbydesign.com',
};

it('should render', () => {
  const component = renderer.create(<RelatedExperienceWebsite {...base} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should display additional classes', () => {
  const wrapper = shallow(
    <RelatedExperienceWebsite {...base} className="my-class" />,
  );

  expect(wrapper.hasClass('my-class')).toBe(true);
});

it('should render title', () => {
  const wrapper = shallow(
    <RelatedExperienceWebsite {...base} title="Syn By Design" />,
  );

  expect(wrapper.text()).toBe('Syn By Design');
});

it('should render url if no title is provided', () => {
  const wrapper = shallow(<RelatedExperienceWebsite {...base} />);

  expect(wrapper.text()).toBe('http://www.synbydesign.com');
});

it('should be rendered as an anchor tag if its not disabled', () => {
  const wrapper = shallow(<RelatedExperienceWebsite {...base} />);

  expect(wrapper.type()).toBe('a');
  expect(wrapper.find('[href="http://www.synbydesign.com"]')).toHaveLength(1);
});

it('should render as a span when disabled', () => {
  const wrapper = shallow(<RelatedExperienceWebsite {...base} disabled />);

  expect(wrapper.type()).toBe('span');
  expect(wrapper.find('[href]')).toHaveLength(0);
});

it('should render additional props', () => {
  const wrapper = shallow(
    <RelatedExperienceWebsite {...base} data-test="my-attribute" />,
  );

  expect(wrapper.find('[data-test="my-attribute"]')).toHaveLength(1);
});
