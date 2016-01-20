import React, { Component } from 'react';
import PortfolioList from '../containers/portfolio-list.container';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid">
          <PortfolioList />
        </div>
      </div>
    );
  }
}