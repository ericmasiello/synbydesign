'use strict';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import callOnMountHOC from './call-on-mount.hoc';

describe('Call On Mount HOC', () => {

  let r;
  let actual;
  let expected;
  let calledTestFn = false;
  let calledRunOnMountFn = false;
  let EnhancedComponent;

  beforeEach(()=> {
  });

  afterEach(()=>{
    r = undefined;
    actual = undefined;
    expected = undefined;
    calledTestFn = false
    calledRunOnMountFn = false;
    EnhancedComponent = undefined;
  });

  it('should call runOnMount method if its the only argument', () => {
    EnhancedComponent = callOnMountHOC(function() {
      calledRunOnMountFn = true;
    })(<div>Hello world</div>);

    r = TestUtils.createRenderer();
    r.render(<EnhancedComponent />);
    expected = true;

    expect(calledRunOnMountFn).toEqual(expected);
  });

  describe('should only call runOnMount in certain circumstances', () => {

    it('if first test method returns true', () => {

      EnhancedComponent = callOnMountHOC(function() {
        return true;
      }, function() {
        calledRunOnMountFn = true;
      })(<div>Hello world</div>);

      r = TestUtils.createRenderer();
      r.render(<EnhancedComponent />);
      expected = true;

      expect(calledRunOnMountFn).toEqual(expected);
    });

    it('if first test method returns true', () => {

      EnhancedComponent = callOnMountHOC(function() {
        return false;
      }, function() {
        calledRunOnMountFn = true;
      })(<div>Hello world</div>);

      r = TestUtils.createRenderer();
      r.render(<EnhancedComponent />);
      expected = false;

      expect(calledRunOnMountFn).toEqual(expected);
    });
  });
});
