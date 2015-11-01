'use strict';

import React from 'react';
import { Link } from 'react-router';
import jQueryScrollTo from 'jquery.scrollto';
import AppConsts from '../../consts/app';
import ScreenReaderFocusElm from './screenReaderFocusElm';

export default React.createClass({

  propTypes: {
    view: React.PropTypes.string.isRequired
  },

  scrollTo(scrollToID) {

    window.setTimeout(function () {

      jQueryScrollTo('#' + scrollToID, 500);
      document.getElementById(scrollToID).focus();
    }, 0);
  },

  render() {

    var svgLogo = '<use xlink:href="#syn-logo" />';
    var svgTitle = '<use xlink:href="#syn-title" />';
    var svgSlogan = '<use xlink:href="#syn-slogan" />';

    var logo = (
      <li role="presentation" className="col-xs-12  col-sm  col-md-5  default-sm  masthead__logo">
        <h1 className="masthead__logo__title" id={AppConsts.UIID.logo}>
          <span className="visually-hidden">Syn By Design</span>
          <svg className="logo  logo__head" dangerouslySetInnerHTML={{__html: svgLogo}}/>
          <svg className="logo  logo__title" dangerouslySetInnerHTML={{__html: svgTitle}}/>
          <svg className="logo  logo__slogan" dangerouslySetInnerHTML={{__html: svgSlogan}}/>
        </h1>
      </li>
    );

    var nav = (
      <ul className="row  flex-center  middle-xs  masthead__nav">
        {logo}
        <li role="presentation" className="col-xs-12  col-sm  masthead__nav__about">
          <Link to="/" className="pill" onClick={this.scrollTo.bind(this, AppConsts.UIID.about)}>About</Link>
        </li>
        <li role="presentation" className="col-xs-12  col-sm  masthead__nav__portfolio">
          <Link to="/" className="pill"
                onClick={this.scrollTo.bind(this, AppConsts.UIID.portfolioList)}>Portfolio</Link>
        </li>
        <li role="presentation" className="col-xs-12  col-sm  masthead__nav__linked-in"><a
          href="https://www.linkedin.com/in/ericmasiello" className="pill">LinkedIn</a></li>
        <li role="presentation" className="col-xs-12  col-sm  masthead__nav__twitter"><a
          href="http://www.twitter.com/ericmasiello" className="pill">Twitter</a></li>
      </ul>
    );

    if (this.props.view === 'detail') {

      logo = (
        <li role="presentation" className="col-xs-12  col-sm  col-md-5  first-xs  default-sm  masthead__logo">
          <h1 className="masthead__logo__title">
            <Link to="/" id={AppConsts.UIID.logo}>
              <span className="visually-hidden">Back to Syn By Design home page</span>
              <svg className="logo  logo__head  logo--detail" dangerouslySetInnerHTML={{__html: svgLogo}}/>
              <svg className="logo  logo__title  logo--detail" dangerouslySetInnerHTML={{__html: svgTitle}}/>
              <svg className="logo  logo__slogan  logo--detail" dangerouslySetInnerHTML={{__html: svgSlogan}}/>
            </Link>
          </h1>
        </li>
      );

      nav = (
        <ul className="row  flex-center  middle-xs  masthead__nav">
          {logo}
        </ul>
      );
    }

    return (
      <header className="header  masthead">
        <ScreenReaderFocusElm elmId={AppConsts.UIID.masthead}/>

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
});