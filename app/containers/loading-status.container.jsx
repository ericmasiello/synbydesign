'use strict';
import React, { Component } from 'react';
import { findDOMNode, render } from 'react-dom';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import LoadingStatus from '../components/loading-status.component';

const mapStateToProps = ({appLoading}) => {
  return {
    appLoading
  };
};

export default connect(mapStateToProps)(LoadingStatus);
