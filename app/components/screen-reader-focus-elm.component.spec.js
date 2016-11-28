import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';

expect.extend(expectJSX);

describe('ScreenReaderFocusElm', () => {
  it('should embed its contents', () => {
    const r = TestUtils.createRenderer();
    r.render(<ScreenReaderFocusElm elmId="testId"><div>Hello World</div></ScreenReaderFocusElm>);
    const actual = r.getRenderOutput();

    expect(actual).toIncludeJSX(<div>Hello World</div>);
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
    r.render(<ScreenReaderFocusElm elmId="testId" />);
    const actual = r.getRenderOutput();
    const expected = '-1';

    expect(actual.props.tabIndex).toEqual(expected);
  });
});
