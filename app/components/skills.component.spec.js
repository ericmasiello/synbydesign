import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import Skills from './skills.component';

describe('Skills', () => {

  it('should render as an UL', () => {

    const r = TestUtils.createRenderer();
    r.render(<Skills />);
    const actual = r.getRenderOutput();
    const rootTag = actual.type;
    const expected = 'ul';

    expect(rootTag).toEqual(expected);
  });

  it('should set the CSS class names based on props', () => {

    const r = TestUtils.createRenderer();
    r.render(<Skills classNames="test-class" />);
    const actual = r.getRenderOutput();
    const expected = 'test-class';

    expect(actual.props.className).toEqual(expected);
  });

  it('should set the aria-label based on props', () => {

    const r = TestUtils.createRenderer();
    r.render(<Skills title="Test Title" />);
    const actual = r.getRenderOutput();
    const expected = 'Skills used to make Test Title';

    expect(actual.props['aria-label']).toEqual(expected);
  });

  it('should render a list of skills with appropriate CSS class names', () => {

    const skills = ['HTML', 'CSS', 'JavaScript'];

    const r = TestUtils.createRenderer();
    r.render(<Skills skills={skills} bulletClassNames="something" />);
    const actual = r.getRenderOutput();
    expect(actual).toIncludeJSX(<li role="presentation"><span aria-hidden="true" className="something bullet" /> HTML</li>);
    expect(actual).toIncludeJSX(<li role="presentation"><span aria-hidden="true" className="something bullet" /> CSS</li>);
    expect(actual).toIncludeJSX(<li role="presentation"><span aria-hidden="true" className="something bullet" /> JavaScript</li>);
  });

});