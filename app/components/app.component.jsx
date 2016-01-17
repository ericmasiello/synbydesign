import React, { Component } from 'react';
import LoadingStatusContainer from '../containers/loading-status.container';
import Test from '../containers/test.container';

export default class App extends Component {
  render() {
    return (
      <div>
        <LoadingStatusContainer />
        <Test />
        Hello World
      </div>
    );
  }
}