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

    return class extends Component {
      componentWillMount() {
        testIfIShouldRunOnMount.call(this) && runOnMount.call(this);
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  };
}
