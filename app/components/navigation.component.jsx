/* global window, document */
import React, { PropTypes } from 'react';
import Scroll from 'react-scroll';
import { UI_IDS } from '../configuration';
import Logo from './logo.component';

const { Link: ScrollLink } = Scroll;

const scrollTo = (scrollToID) => {
  window.setTimeout(() => {
    document.getElementById(scrollToID).focus();
  }, 0);
};

const Navigation = ({ view }) => {
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
        <ScrollLink
          href="#" to={UI_IDS.about} smooth duration={500} className="pill"
          onClick={scrollTo(UI_IDS.about)}
        >About</ScrollLink>
      </li>
      <li role="presentation" className="col-xs-12  col-sm  masthead__nav__portfolio">
        <ScrollLink
          href="#" to={UI_IDS.portfolioList} smooth duration={500} className="pill"
          onClick={scrollTo(UI_IDS.portfolioList)}
        >Portfolio</ScrollLink>
      </li>
      <li role="presentation" className="col-xs-12  col-sm  masthead__nav__linked-in">
        <a href="https://www.linkedin.com/in/ericmasiello" className="pill">LinkedIn</a>
      </li>
      <li role="presentation" className="col-xs-12  col-sm  masthead__nav__twitter">
        <a href="http://www.twitter.com/ericmasiello" className="pill">Twitter</a>
      </li>
    </ul>
  );

  return (
    <header className="header  masthead">
      <div className="container-fluid">
        <div className="row  masthead__decoration-container  middle-xs">
          <div className="col-xs  masthead__decoration-line" />
          <div className="col-xs  masthead__decoration" />
          <div className="col-xs  masthead__decoration-line" />
        </div>
        <nav>
          {nav}
        </nav>
        { view !== 'detail' ?
          <div className="row  masthead__decoration-container  middle-xs">
            <div className="col-xs  masthead__decoration-line" />
            <div className="col-xs  masthead__decoration  masthead__decoration--bottom" />
            <div className="col-xs  masthead__decoration-line" />
          </div> : null }
      </div>
    </header>
  );
};

Navigation.propTypes = {
  view: PropTypes.oneOf(['detail', 'home']),
};

Navigation.defaultProps = {
  viw: 'home',
};

export default Navigation;
