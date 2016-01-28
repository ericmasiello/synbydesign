import React from 'react';
import PortfolioList from '../containers/portfolio-list.container';
import DocumentTitle from 'react-document-title';
import { TITLE } from '../configuration/';
import Navigation from './navigation.component';
import AboutContent from '../containers/about-content.container';

/**
 * Home component
 * @description Home component that contains contents for home (portfolio list) page.
 * @returns {XML}
 */
export default () => {
  'use strict';
  return (
    <div>
      <DocumentTitle title={TITLE}/>
      <Navigation view={'home'}/>
      <div className="mtxl container-fluid">
        <AboutContent />
        <PortfolioList />
      </div>
    </div>
  );
};