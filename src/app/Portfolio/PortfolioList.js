import React, { Component } from 'react';
import type { Syn$PortfolioListComponentProps } from '../../../types';

export default class PortfolioList extends Component {

  componentDidMount() {
    this.props.loadPortfolio();
  }

  props: Syn$PortfolioListComponentProps;

  render() {
    const { portfolio } = this.props;
    return (
      <div>
        This is the portfolio list
        {portfolio.map(item => <li key={`item-${item.title}`}>{item.title}</li>)}
      </div>
    );
  }
}
