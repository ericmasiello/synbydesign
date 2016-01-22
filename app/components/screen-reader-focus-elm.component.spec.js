import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ScreenReaderFocusElm from './../components/screen-reader-focus-elm.component';

describe('ScreenReaderFocusElm', () => {

  it('should render as a div', () => {

    const r = TestUtils.createRenderer();
    r.render(<ScreenReaderFocusElm />);
    const actual = r.getRenderOutput();
    const rootTag = actual.type;
    const expected = 'div';

    expect(rootTag).toEqual(expected);
  });

  it('should set the id based on props', () => {

    const r = TestUtils.createRenderer();
    r.render(<ScreenReaderFocusElm elmId="testId" />);
    const actual = r.getRenderOutput();
    const expected = 'testId';

    expect(actual.props.id).toEqual(expected);
  });

  it('should set the tabIndex value', () => {

    const r = TestUtils.createRenderer();
    r.render(<ScreenReaderFocusElm />);
    const actual = r.getRenderOutput();
    const expected = '-1';

    expect(actual.props.tabIndex).toEqual(expected);
  });
});