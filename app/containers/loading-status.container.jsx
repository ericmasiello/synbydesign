'use strict';
import React, { Component } from 'react';
import { findDOMNode, render } from 'react-dom';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import LoadingStatus from '../components/loading-status.component';

function mapStateToProps({appLoading}){
  // whatever gets returned from here will show up as props inside of ActiveBook
  return {
    appLoading
  }
}

export default connect(mapStateToProps)(LoadingStatus);