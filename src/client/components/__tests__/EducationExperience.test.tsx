import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Props, EducationExperience } from '../EducationExperience';

const base: Props = {
  institution: 'School Name',
};

it('should render', () => {
  const component = renderer.create(<EducationExperience {...base} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should display additional classes', () => {
  const wrapper = shallow(
    <EducationExperience {...base} className="my-class" />,
  );

  expect(wrapper.hasClass('my-class')).toBe(true);
});

it('should render additional props', () => {
  const wrapper = shallow(
    <EducationExperience {...base} data-test="my-attribute" />,
  );

  expect(wrapper.find('[data-test="my-attribute"]')).toHaveLength(1);
});

it('should render as a <section> by default', () => {
  const wrapper = shallow(<EducationExperience {...base} />);

  expect(wrapper.type()).toBe('section');
});

it('should render as a custom tag', () => {
  const wrapper = shallow(<EducationExperience {...base} tag="span" />);

  expect(wrapper.type()).toBe('span');
});

it('should render location', () => {
  const wrapper = shallow(
    <EducationExperience {...base} location="The location" />,
  );

  expect(
    wrapper
      .find('div')
      .text()
      .trim(),
  ).toBe('The location');
});

it('should render the year', () => {
  const wrapper = shallow(<EducationExperience {...base} year="2018" />);

  expect(
    wrapper
      .find('div')
      .text()
      .trim(),
  ).toBe('2018');
});

it('should render degree', () => {
  const wrapper = shallow(
    <EducationExperience {...base} degree="Master of None" />,
  );

  expect(
    wrapper
      .find('p')
      .text()
      .trim(),
  ).toBe('Master of None');
});
