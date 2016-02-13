import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/app.component';

const mapStateToProps = ({appLoading}) => {
  'use strict';
  // whatever gets returned from here will show up as props inside of App
  return {
    appLoading
  };
};

export default connect(mapStateToProps)(App);