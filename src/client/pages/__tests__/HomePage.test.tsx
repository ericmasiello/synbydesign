import * as React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../HomePage';
import { ThunkActionCreator } from '../../../types.d';

const fetchPortfolioItems = jest.fn();
const fetchResume = jest.fn();
const fetchLikes = jest.fn();
const addLike = jest.fn();

test('should render HomePage', () => {
  const wrapper = shallow(
    <HomePage
      fetchPortfolioItems={fetchPortfolioItems}
      fetchResume={fetchResume}
      fetchLikes={fetchLikes}
      addLike={addLike}
      portfolioItems={[]}
      resume={{} as Resume}
      existsMorePortfolioItems={false}
      currentPageNumber={1}
    />,
  );
  expect(wrapper).toHaveLength(1);
});
