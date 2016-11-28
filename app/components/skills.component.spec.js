import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import Skills from './skills.component';

expect.extend(expectJSX);

describe('Skills', () => {
  let skills;
  let r;
  let actual;
  let expected;

  beforeEach(() => {
    skills = ['HTML', 'CSS', 'JavaScript'];
    r = TestUtils.createRenderer();
  });

  afterEach(() => {
    skills = undefined;
    actual = undefined;
    expected = undefined;
  });

  it('should render an empty element if no skills are passed in', () => {
    r.render(<Skills />);
    actual = r.getRenderOutput();
    expected = (<div />);
    expect(actual).toIncludeJSX(expected);
  });

  it('should render as an UL when skills are passed in', () => {
    r.render(<Skills skills={skills} />);
    actual = r.getRenderOutput();
    const rootTag = actual.type;
    expected = 'ul';

    expect(rootTag).toEqual(expected);
  });

  it('should set the CSS class names based on props', () => {
    r.render(<Skills classNames="test-class" skills={skills} />);
    actual = r.getRenderOutput();
    expected = 'test-class';

    expect(actual.props.className).toEqual(expected);
  });

  it('should set the aria-label based on props', () => {
    r.render(<Skills title="Test Title" skills={skills} />);
    actual = r.getRenderOutput();
    expected = 'Skills used to make Test Title';

    expect(actual.props['aria-label']).toEqual(expected);
  });

  it('should render a list of skills with appropriate CSS class names', () => {
    r.render(<Skills skills={skills} bulletClassNames="something" />);
    actual = r.getRenderOutput();
    expect(actual).toIncludeJSX(<li role="presentation"><span aria-hidden="true" className="something bullet" /> HTML</li>);
    expect(actual).toIncludeJSX(<li role="presentation"><span aria-hidden="true" className="something bullet" /> CSS</li>);
    expect(actual).toIncludeJSX(<li role="presentation"><span aria-hidden="true" className="something bullet" /> JavaScript</li>);
  });
});
