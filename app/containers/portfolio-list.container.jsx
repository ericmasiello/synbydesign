import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioList from '../components/portfolio-list.component';
import { loadAllPortfolio } from '../actions/portfolio.action-creator';
import { bindActionCreators } from 'redux';

function mapStateToProps({portfolio}){
  return {
    portfolio
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    loadAllPortfolio
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioList);