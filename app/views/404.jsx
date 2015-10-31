'use strict';

import React from 'react';
import DocumentTitle from 'react-document-title';
import AppConsts from '../consts/app';

export default React.createClass({
  render: function () {
    return (
      <DocumentTitle title={'404 Page Not Found - ' + AppConsts.TITLE}>
        <h2>Not found</h2>
      </DocumentTitle>
    );
  }
});