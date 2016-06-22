'use strict';
import React, { Component } from 'react';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';
import { UI_IDS } from '../configuration';

export default class AboutContent extends Component {

  render(){
    const { aboutContent } = this.props;
    return (
      <section className="container-fluid">
        <ScreenReaderFocusElm elmId={UI_IDS.about}>
          <div className="well h4" dangerouslySetInnerHTML={{__html: aboutContent}}></div>
        </ScreenReaderFocusElm>
      </section>
    );
  }
}

AboutContent.propTypes = {
  content: React.PropTypes.string.isRequired,
  loadedAboutContent: React.PropTypes.bool.isRequired
};

AboutContent.defaultProps = {
  content: '<p>Loading...</p>',
  loadedAboutContent: false
};
