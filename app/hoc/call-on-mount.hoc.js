import React, { Component } from 'react';

export default function callOnMountHOC() {

  const args = [...arguments];
  let testIfIShouldRunOnMount = () => true;
  let runOnMount = () => true;

  if(args.length === 1) {
    runOnMount = args[0];
  } else if( args.length === 2){
    testIfIShouldRunOnMount = args[0];
    runOnMount = args[1];
  }

  return function(WrappedComponent) {

    const isClassComponent = Object.getPrototypeOf(WrappedComponent) === Component;
    WrappedComponent = !isClassComponent ? Component : WrappedComponent;

    return class CallOnMountEnhancer extends WrappedComponent {
      componentWillMount() {
        testIfIShouldRunOnMount.call(this) && runOnMount.call(this);
      }

      render() {
        //console.log('super.render: ', super.render);
        return isClassComponent ? super.render() : <WrappedComponent />;
      }
    };
  };
}
