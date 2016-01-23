import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioList from '../components/portfolio-list.component';
import { loadAllPortfolio } from '../actions/portfolio.action-creator';
import { bindActionCreators } from 'redux';
import transfromPortfolioJSON from '../util/transform-portfolio-json.util';

function mapStateToProps({portfolio, loadedAllItems}){
  return {
    portfolio: transfromPortfolioJSON(portfolio),
    loadedAllItems
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    loadAllPortfolio
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioList);