import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutContent from '../components/about-content.component';
import { loadAboutContent } from '../actions/about-content.action-creator';
import { bindActionCreators } from 'redux';
//import transfromPortfolioJSON from '../util/transform-portfolio-json.util';

const mapStateToProps = ({aboutContent}) => {
  'use strict';
  return {
    aboutContent: aboutContent ? ( aboutContent.content ) : aboutContent
  };
};

const mapDispatchToProps = (dispatch) => {
  'use strict';
  return bindActionCreators({
    loadAboutContent
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutContent);