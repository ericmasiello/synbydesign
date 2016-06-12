'use strict';  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/app.component';

const mapStateToProps = ({appLoading}) => {
  return {
    appLoading
  };
};

export default connect(mapStateToProps)(App);
