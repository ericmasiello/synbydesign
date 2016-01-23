import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import PortfolioDetail from './../components/portfolio-detail.component';

describe('PortfolioDetail', () => {
  'use strict';

  let requestedID = null;

  afterEach(()=>{
    requestedID = null;
  });

  const mockLoadSelectedPortfolio = (ID) => {
    requestedID = ID;
  };

  it('should request to load the item if all data has not been loaded', () => {

    const r = TestUtils.createRenderer();
    r.render(<PortfolioDetail loadedAllItems={false} loadSelectedPortfolio={mockLoadSelectedPortfolio} params={{id: 5}} />);
    const actual = requestedID;
    const expected = 5;

    expect(actual).toEqual(expected);
  });
});