import * as React from 'react';
import { shallow } from 'enzyme';
import homePage, { HomePage } from '../HomePage';
import { ThunkActionCreator } from '../../../types.d';

const StyledHomePage = homePage.component;
const stubFetch = jest.fn() as ThunkActionCreator<Portfolio[]>;

test('should render HomePage', () => {
  const wrapper = shallow(
    <HomePage
      portfolioItems={[]}
      fetchPortfolioItems={stubFetch}
    />,
  );
  expect(wrapper).toHaveLength(1);
});

test('should render styled HomePage', () => {
  const wrapper = shallow(
    <StyledHomePage />,
  );
  expect(wrapper).toHaveLength(1);
});
