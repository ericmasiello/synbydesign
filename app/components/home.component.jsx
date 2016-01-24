import React from 'react';
import PortfolioList from '../containers/portfolio-list.container';
import DocumentTitle from 'react-document-title';
import { TITLE } from '../configuration/';

export default () => {
  'use strict';
  return (
    <div>
      <DocumentTitle title={TITLE}/>
      { /* <Navigation view={'home'}/> */ }

      <div className="container-fluid">
        <PortfolioList />
      </div>
    </div>
  );
};