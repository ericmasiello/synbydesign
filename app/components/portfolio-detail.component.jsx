'use strict';

import React, { Component } from 'react';
import Skills from './skills.component';

export default class PortfolioDetail extends Component {

  constructor(props){
    super(props);

    this.getPortfolioItemById = this.getPortfolioItemById.bind(this);
  }

  componentWillMount(){

    if(this.props.loadedAllItems === false){
      this.props.loadSelectedPortfolio(this.props.params.id);
    }
  }

  getPortfolioItemById(id){

    if( !this.props.portfolio || this.props.portfolio.length === 0 ) {
      return null;
    }

    return this.props.portfolio.filter(portfolio => portfolio.ID === parseInt(id))[0];
  }

  render(){

    const portfolioItem = this.getPortfolioItemById(this.props.params.id);
    if( !portfolioItem ){
      return <div></div>;
    }

    return (
      <div>Detail View Loaded {portfolioItem.ID}</div>
    );
  }
}