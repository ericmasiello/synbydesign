import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import {
  ProfessionalExperienceRole,
  Props,
} from '../ProfessionalExperienceRole';

const base: Props = {
  title: 'Company Man',
  yearFrom: '2017',
};

it('should render', () => {
  const component = renderer.create(<ProfessionalExperienceRole {...base} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should display additional classes', () => {
  const wrapper = shallow(
    <ProfessionalExperienceRole {...base} className="my-class" />,
  );

  expect(wrapper.hasClass('my-class')).toBe(true);
});

it('should render additional props', () => {
  const wrapper = shallow(
    <ProfessionalExperienceRole {...base} data-test="my-attribute" />,
  );

  expect(wrapper.find('[data-test="my-attribute"]')).toHaveLength(1);
});

it('should render title', () => {
  const wrapper = shallow(<ProfessionalExperienceRole {...base} />);

  expect(wrapper.find('h2').text()).toEqual(base.title);
});

it('should render timeline when still employed', () => {
  const wrapper = shallow(<ProfessionalExperienceRole {...base} />);

  expect(wrapper.text()).toContain('2017 — Present');
});

it('should render timeline when still employed', () => {
  const wrapper = shallow(
    <ProfessionalExperienceRole {...base} yearTo="2018" />,
  );

  expect(wrapper.text()).toContain('2017 — 2018');
});
