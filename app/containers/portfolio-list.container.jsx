'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioList from '../components/portfolio-list.component';
import { loadAllPortfolio } from '../actions/portfolio.action-creator';
import { bindActionCreators } from 'redux';
import transfromPortfolioJSON from '../util/transform-portfolio-json.util';
import callOnMountHOC from '../hoc/call-on-mount.hoc';
import { DESIGN_CATEGORIES, OTHER_CATEGORIES, WEB_CATEGORIES, MIX_CATEGORIES } from '../configuration/';

const mapStateToProps = ({portfolio, loadedAllItems}) => {
  return {
    portfolio: transfromPortfolioJSON(portfolio),
    loadedAllItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadAllPortfolio
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(
  callOnMountHOC(
    function() {
      return this.props.loadedAllItems === false;
    },
    function() {
      this.props.loadAllPortfolio([...DESIGN_CATEGORIES, ...OTHER_CATEGORIES, ...WEB_CATEGORIES, ...MIX_CATEGORIES])
    })
  (PortfolioList));
