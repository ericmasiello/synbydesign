import * as React from 'react';
import { mount } from 'enzyme';
import PortfolioPage from '../portfolio';

const portfolioItem: Portfolio = {
  id: '123',
  title: 'The title',
  description: 'The description',
};

describe('Portfolio', () => {
  it('should render the title', function() {
    const wrapper = mount(<PortfolioPage portfolioItem={portfolioItem} />);

    expect(wrapper.find('h1').text()).toBe('The title');
  });
});
