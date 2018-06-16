import * as React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../HomePage';
import { ThunkActionCreator } from '../../../types.d';

const stubFetchPortfolio = jest.fn() as ThunkActionCreator<Portfolio[]>;
const stubFetchResume = jest.fn() as ThunkActionCreator<Resume>;
const stubFetchLikes = jest.fn() as ThunkActionCreator<Like[]>;

test('should render HomePage', () => {
  const wrapper = shallow(
    <HomePage
      fetchPortfolioItems={stubFetchPortfolio}
      fetchResume={stubFetchResume}
      fetchLikes={stubFetchLikes}
      portfolioItems={[]}
      resume={{} as Resume}
      existsMorePortfolioItems={false}
      currentPageNumber={1}
    />,
  );
  expect(wrapper).toHaveLength(1);
});
