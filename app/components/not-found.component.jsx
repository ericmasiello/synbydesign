import React from 'react';
import DocumentTitle from 'react-document-title';
import { TITLE } from '../configuration/';
import Navigation from './navigation.component';

export default () => {
  return (
    <section className="portfolio-detail">
      <DocumentTitle title={`404 Page Not Found - ${TITLE}`}/>
      <Navigation view={'detail'}/>
      <h2 className="text-center">Sorry :( Page not found</h2>
    </section>

  );
}