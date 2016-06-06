'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChangeLog from '../components/change-log.component';
import { loadChangeLog } from '../actions/change-log.action-creator';
import { bindActionCreators } from 'redux';
import transformChangeLogJSON from '../util/transform-change-log-json.util';

const mapStateToProps = ({changeLog, loadedChangeLog}) => {
  return {
    changeLog: transformChangeLogJSON(changeLog),
    loadedChangeLog
  };
};

const mapDispatchToProps = (dispatch) => {  
  return bindActionCreators({
    loadChangeLog
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLog);
