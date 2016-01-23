import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioDetail from '../components/portfolio-detail.component';
import { loadSelectedPortfolio } from '../actions/portfolio.action-creator';
import { bindActionCreators } from 'redux';

function mapStateToProps({portfolio, loadedAllItems}){
  return {
    portfolio,
    loadedAllItems
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    loadSelectedPortfolio
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioDetail);