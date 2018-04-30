import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { ProfessionalExperience } from '../ProfessionalExperience';
import ProfessionalExperienceRole from '../ProfessionalExperienceRole';

const base: ProfessionalExperience = {
  organization: 'Company Name',
  roles: [],
};

it('should render', () => {
  const component = renderer.create(<ProfessionalExperience {...base} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should display additional classes', () => {
  const wrapper = shallow(
    <ProfessionalExperience {...base} className="my-class" />,
  );

  expect(wrapper.hasClass('my-class')).toBe(true);
});

it('should render additional props', () => {
  const wrapper = shallow(
    <ProfessionalExperience {...base} data-test="my-attribute" />,
  );

  expect(wrapper.find('[data-test="my-attribute"]')).toHaveLength(1);
});

it('should render as a <article> by default', () => {
  const wrapper = shallow(<ProfessionalExperience {...base} />);

  expect(wrapper.type()).toBe('article');
});

it('should render as a custom tag', () => {
  const wrapper = shallow(<ProfessionalExperience {...base} tag="span" />);

  expect(wrapper.type()).toBe('span');
});

it('should render the organization', () => {
  const wrapper = mount(<ProfessionalExperience {...base} />);

  expect(wrapper.find('h1.professional-experience__org').text()).toBe(
    base.organization,
  );
});

it('should render roles', () => {
  const roles: ProfessionalRole[] = [
    {
      title: 'Title 1',
      yearFrom: '2001',
      yearTo: '2020',
    },
    {
      title: 'Title 2',
      yearFrom: '2020',
      yearTo: '2031',
    },
  ];
  const wrapper = shallow(<ProfessionalExperience {...base} roles={roles} />);
  const professionalExperienceRoles = wrapper.find(ProfessionalExperienceRole);

  expect(professionalExperienceRoles).toHaveLength(roles.length);
  professionalExperienceRoles.forEach((professionalExperienceRole, i) => {
    expect(professionalExperienceRole.props()).toEqual(roles[i]);
  });
});

it('should render accomplishments', () => {
  const accomplishments = ['foo', 'bar', 'baz'];
  const wrapper = shallow(
    <ProfessionalExperience {...base} accomplishments={accomplishments} />,
  );

  accomplishments.forEach(accomplishment => {
    expect(wrapper.containsMatchingElement(<li>{accomplishment}</li>)).toBe(
      true,
    );
  });
});
