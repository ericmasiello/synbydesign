import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Loading } from '../Loading';
import Button from '../Button';

const defaultProps = {
  isLoading: false,
  pastDelay: false,
  timedOut: false,
  error: false,
  retry: jest.fn(),
};

it('should render nothing by default', () => {
  const component = renderer.create(<Loading {...defaultProps} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render a loading message', () => {
  const component = renderer.create(<Loading {...defaultProps} pastDelay />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render an error', () => {
  const component = renderer.create(<Loading {...defaultProps} error />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render an timeout message', () => {
  const component = renderer.create(<Loading {...defaultProps} timedOut />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should display additional classes', () => {
  const wrapper = shallow(
    <Loading {...defaultProps} pastDelay className="my-class" />,
  );

  expect(wrapper.hasClass('my-class')).toBe(true);
});

it('should render additional props', () => {
  const wrapper = shallow(
    <Loading {...defaultProps} pastDelay data-test="my-attribute" />,
  );

  expect(wrapper.find('[data-test="my-attribute"]')).toHaveLength(1);
});

it('should call retry function when timed out', () => {
  const retry = jest.fn();
  const wrapper = shallow(<Loading {...defaultProps} timedOut retry={retry} />);

  wrapper.find(Button).simulate('click');

  expect(retry).toBeCalled();
});

it('should call retry function when an error occurred', () => {
  const retry = jest.fn();
  const wrapper = shallow(<Loading {...defaultProps} error retry={retry} />);

  wrapper.find(Button).simulate('click');

  expect(retry).toBeCalled();
});
