import * as React from 'react';
import { shallow } from 'enzyme';
import { NotFoundPage } from '../NotFoundPage';

test('should render', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toHaveLength(1);
});

test('should set staticContext.foundFound if passed in', () => {
  const staticContext: any = {};

  shallow(<NotFoundPage staticContext={staticContext} />);

  expect(staticContext.notFound).toBe(true);
});
