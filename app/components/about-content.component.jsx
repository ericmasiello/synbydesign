import React, { Component } from 'react';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';
import { UI_IDS } from '../configuration';

export default class AboutContent extends Component {

  componentWillMount(){

    if(this.props.aboutContent === null){
      this.props.loadAboutContent();
    }
  }

  render(){

    const content = (this.props.aboutContent === null ) ? '<p>Loading...</p>' : this.props.aboutContent;

    return (
      <section className="container-fluid">
        <ScreenReaderFocusElm elmId={UI_IDS.about}>
          <div className="well h4 text-center" dangerouslySetInnerHTML={{__html: content}}></div>
        </ScreenReaderFocusElm>
      </section>
    );
  }
}