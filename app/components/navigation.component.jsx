'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import {UI_IDS} from '../configuration';
import Logo from './logo.component';
import Scroll from '@synapsestudios/react-scroll';
const ScrollLink = Scroll.Link;

export default class Navigation extends Component {

  scrollTo(scrollToID) {

    window.setTimeout(function () {
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
          <ScrollLink href="#" to={UI_IDS.about} smooth={true} duration={500} className="pill" onClick={this.scrollTo.bind(this, UI_IDS.about)}>About</ScrollLink>
        </li>
        <li role="presentation" className="col-xs-12  col-sm  masthead__nav__portfolio">
          <ScrollLink href="#" to={UI_IDS.portfolioList} smooth={true} duration={500} className="pill"
                onClick={this.scrollTo.bind(this, UI_IDS.portfolioList)}>Portfolio</ScrollLink>
        </li>
        <li role="presentation" className="col-xs-12  col-sm  masthead__nav__linked-in"><a
          href="https://www.linkedin.com/in/ericmasiello" className="pill">LinkedIn</a></li>
        <li role="presentation" className="col-xs-12  col-sm  masthead__nav__twitter"><a
          href="http://www.twitter.com/ericmasiello" className="pill">Twitter</a></li>
      </ul>
    );

    return (
      <header className="header  masthead">
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