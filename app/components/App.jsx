import React, { Component } from 'react';
import LoadingStatus from '../containers/LoadingStatus.jsx';
import Test from '../containers/Test.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <LoadingStatus />
        <Test />
        Hello World
      </div>
    );
  }
}