import React, { Component } from 'react';
import LoadingStatusContainer from '../containers/loading-status.container';
import PortfolioList from '../containers/portfolio-list.container';

export default class App extends Component {
  render() {
    return (
      <div>
        <LoadingStatusContainer />
        <PortfolioList />
        Hello World
      </div>
    );
  }
}