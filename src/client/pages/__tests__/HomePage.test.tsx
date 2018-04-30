import * as React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../HomePage';
import { ThunkActionCreator } from '../../../types.d';

const stubFetchPortfolio = jest.fn() as ThunkActionCreator<Portfolio[]>;
const stubFetchResume = jest.fn() as ThunkActionCreator<Resume>;

test('should render HomePage', () => {
  const wrapper = shallow(
    <HomePage
      fetchPortfolioItems={stubFetchPortfolio}
      fetchResume={stubFetchResume}
      portfolioItems={[]}
      resume={{} as Resume}
      existsMorePortfolioItems={false}
      currentPageNumber={1}
    />,
  );
  expect(wrapper).toHaveLength(1);
});
