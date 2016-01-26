'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
//FIXME: refactor so I don't need jQuery to do this
import jQueryScrollTo from 'jquery.scrollto';
import {UI_IDS} from '../configuration';
import Logo from './logo.component';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';

export default class Navigation extends Component {

  scrollTo(scrollToID) {

    window.setTimeout(function () {

      jQueryScrollTo('#' + scrollToID, 500);
      document.getElementById(scrollToID).focus();
    }, 0);
  }

  render() {

    const { view } = this.props;

    const nav = (view === 'detail')
      ? (
      <ul className="row  flex-center  middle-xs  masthead__nav">
        <li role="presentation" className="col-xs-12  col-sm  col-md-5  first-xs  default-sm  masthead__logo">
          <Logo view={view} logoID={UI_IDS.logo} />
        </li>
      </ul>
    ) : (
      <ul className="row  flex-center  middle-xs  masthead__nav">
        <li role="presentation" className="col-xs-12  col-sm  col-md-5  default-sm  masthead__logo">
          <Logo view={view} logoID={UI_IDS.logo} />
        </li>
        <li role="presentation" className="col-xs-12  col-sm  masthead__nav__about">
          <Link to="/" className="pill" onClick={this.scrollTo.bind(this, UI_IDS.about)}>About</Link>
        </li>
        <li role="presentation" className="col-xs-12  col-sm  masthead__nav__portfolio">
          <Link to="/" className="pill"
                onClick={this.scrollTo.bind(this, UI_IDS.portfolioList)}>Portfolio</Link>
        </li>
        <li role="presentation" className="col-xs-12  col-sm  masthead__nav__linked-in"><a
          href="https://www.linkedin.com/in/ericmasiello" className="pill">LinkedIn</a></li>
        <li role="presentation" className="col-xs-12  col-sm  masthead__nav__twitter"><a
          href="http://www.twitter.com/ericmasiello" className="pill">Twitter</a></li>
      </ul>
    );

    return (
      <header className="header  masthead">
        <ScreenReaderFocusElm elmId={UI_IDS.masthead}/>
        <div className="container-fluid">
          <div className="row  masthead__decoration-container  middle-xs">
            <div className="col-xs  masthead__decoration-line"></div>
            <div className="col-xs  masthead__decoration"></div>
            <div className="col-xs  masthead__decoration-line"></div>
          </div>
          <nav>
            {nav}
          </nav>
          <div className="row  masthead__decoration-container  middle-xs">
            <div className="col-xs  masthead__decoration-line"></div>
            <div className="col-xs  masthead__decoration  masthead__decoration--bottom"></div>
            <div className="col-xs  masthead__decoration-line"></div>
          </div>
        </div>
      </header>
    );
  }
};

Navigation.propTypes = {
  view: React.PropTypes.string.isRequired
};