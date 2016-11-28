import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import callOnMountHOC from './call-on-mount.hoc';

expect.extend(expectJSX);

describe('Call On Mount HOC', () => {
  let r;
  let expected;
  let calledRunOnMountFn = false;
  let EnhancedComponent;
  /* eslint-disable react/prefer-stateless-function */
  class MockComponent extends React.Component {
    render() {
      return (<div>Hello World</div>);
    }
  }
  /* eslint-enable react/prefer-stateless-function */

  class SubMockComponent extends MockComponent {
    render() {
      return (<div>Goodbye World</div>);
    }
  }

  beforeEach(() => {

  });

  afterEach(() => {
    r = undefined;
    expected = undefined;
    calledRunOnMountFn = false;
    EnhancedComponent = undefined;
  });

  describe('should call runOnMount method if its the only argument', () => {
    it('will work on components built by extending React.Component', () => {
      EnhancedComponent = callOnMountHOC(() => {
        calledRunOnMountFn = true;
      })(MockComponent);

      r = TestUtils.createRenderer();
      r.render(<EnhancedComponent />);
      expected = true;

      expect(calledRunOnMountFn).toEqual(expected);
    });

    it('will work on components that extend another component', () => {
      EnhancedComponent = callOnMountHOC(() => {
        calledRunOnMountFn = true;
      })(SubMockComponent);

      r = TestUtils.createRenderer();
      r.render(<EnhancedComponent />);
      expected = true;

      expect(calledRunOnMountFn).toEqual(expected);
    });

    it('will work on funcitonal components', () => {
      EnhancedComponent = callOnMountHOC(() => {
        calledRunOnMountFn = true;
      })(<div>I am functional</div>);

      r = TestUtils.createRenderer();
      r.render(<EnhancedComponent />);
      expected = true;

      expect(calledRunOnMountFn).toEqual(expected);
    });
  });

  describe('should only call runOnMount in certain circumstances', () => {
    it('if first test method returns true', () => {
      EnhancedComponent = callOnMountHOC(() => true, () => {
        calledRunOnMountFn = true;
      })(<div>Hello world</div>);

      r = TestUtils.createRenderer();
      r.render(<EnhancedComponent />);
      expected = true;

      expect(calledRunOnMountFn).toEqual(expected);
    });

    it('if first test method returns true', () => {
      EnhancedComponent = callOnMountHOC(() => false, () => {
        calledRunOnMountFn = true;
      })(<div>Hello world</div>);

      r = TestUtils.createRenderer();
      r.render(<EnhancedComponent />);
      expected = false;

      expect(calledRunOnMountFn).toEqual(expected);
    });
  });
});
