import * as React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../HomePage';
import { ThunkActionCreator } from '../../../types.d';

const stubFetchPortfolio = jest.fn() as ThunkActionCreator<Portfolio[]>;
const stubFetchResume = jest.fn() as ThunkActionCreator<Resume>;

test('should render HomePage', () => {
  const wrapper = shallow(
    <HomePage
      portfolioItems={[]}
      resume={{} as Resume}
      fetchPortfolioItems={stubFetchPortfolio}
      fetchResume={stubFetchResume}
    />,
  );
  expect(wrapper).toHaveLength(1);
});
