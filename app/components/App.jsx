import React, { Component } from 'react';
import LoadingStatusContainer from '../containers/LoadingStatusContainer';
import Test from '../containers/Test.jsx';

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