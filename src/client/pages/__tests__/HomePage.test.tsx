import * as React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../HomePage';
import { ThunkActionCreator } from '../../../types.d';

test('should render HomePage', () => {
  const wrapper = shallow(
    <HomePage
      portfolioItems={[]}
      resume={{} as Resume}
      existsMorePortfolioItems={false}
      currentPageNumber={1}
    />,
  );
  expect(wrapper).toHaveLength(1);
});
