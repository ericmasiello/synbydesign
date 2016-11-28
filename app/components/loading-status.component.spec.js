import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import LoadingStatus from './../components/loading-status.component';

expect.extend(expectJSX);

describe('LoadingStatus', () => {
  it('should not have a progress property by default', () => {
    const appLoadingProp = {
      activeRequests: 0,
      loadedRequests: 0,
    };

    const r = TestUtils.createRenderer();
    r.render(<LoadingStatus appLoading={appLoadingProp} />);
    const actual = r.getRenderOutput();
    expect(actual.progress).toNotExist();
  });

  it('should render an empty div by default', () => {
    const appLoadingProp = {
      activeRequests: 0,
      loadedRequests: 0,
    };

    const r = TestUtils.createRenderer();
    r.render(<LoadingStatus appLoading={appLoadingProp} />);
    const actual = r.getRenderOutput();
    const expected = (
      <div />
    );

    expect(actual).toIncludeJSX(expected);
  });
});
