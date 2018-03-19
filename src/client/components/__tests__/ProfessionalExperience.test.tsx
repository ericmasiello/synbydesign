import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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

it('should render the organization', () => {
  const wrapper = shallow(
    <ProfessionalExperience {...base} className="my-class" />,
  );

  expect(wrapper.find('h1').text()).toBe(base.organization);
});

it('should render roles', () => {
  const roles: ProfessionalRole[] = [
    {
      title: 'Title 1',
      yearFrom: '2001',
      yearTo: '2020',
    },
  ];
  const wrapper = shallow(<ProfessionalExperience {...base} roles={roles} />);
  const professionalExperience = wrapper.find(ProfessionalExperienceRole);

  expect(professionalExperience.props().roles).toEqual(roles);
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
