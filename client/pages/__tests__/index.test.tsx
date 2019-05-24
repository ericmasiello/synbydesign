import * as React from 'react';
import { mount } from 'enzyme';
import IndexPage from '../index';

describe('Index', () => {
  it('should render without throwing an error', function() {
    const wrapper = mount(<IndexPage portfolioItems={[]} />);

    expect(wrapper).toHaveLength(1);
  });
});
