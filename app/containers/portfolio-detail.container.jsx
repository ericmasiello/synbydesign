import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioDetail from '../components/portfolio-detail.component';
import { loadSelectedPortfolio } from '../actions/portfolio.action-creator';
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
    loadSelectedPortfolio
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioDetail);