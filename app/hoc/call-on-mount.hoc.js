import React, { Component } from 'react';

export default function callOnMountHOC(...rest) {
  const args = rest;
  let testIfIShouldRunOnMount = () => true;
  let runOnMount = () => true;

  if (args.length === 1) {
    runOnMount = args[0];
  } else if (args.length === 2) {
    testIfIShouldRunOnMount = args[0];
    runOnMount = args[1];
  }

  return function callOnMountHOCInner(WrappedComponent) {
    const isClassComponent = Object.getPrototypeOf(WrappedComponent) === Component;
    const RenderWrappedComponent = !isClassComponent ? Component : WrappedComponent;

    return class CallOnMountEnhancer extends RenderWrappedComponent {
      componentWillMount() {
        if (testIfIShouldRunOnMount.call(this)) {
          runOnMount.call(this);
        }
      }

      render() {
        return isClassComponent ? super.render() : <WrappedComponent />;
      }
    };
  };
}
