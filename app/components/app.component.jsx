import React, { Component } from 'react';
import LoadingStatusContainer from '../containers/loading-status.container';
import isAppLoading from '../util/is-app-loading.util';
import { Link } from 'react-router';
import Scroll from '@synapsestudios/react-scroll';
import { UI_IDS } from '../configuration';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';
const ScrollLink = Scroll.Link;


/** Class representing the App */
export default class App extends Component {

  /**
   * Back to top method. Used to jump the user back to the top of the page.
   */
  backToTop(){
    document.getElementById(UI_IDS.masthead).focus();
  }

  /**
   * Render method used to generate the entire application tree. Ths is the parent
   * component to all other components for the site
   * @returns {XML}
   */
  render() {

    const clsName = isAppLoading(this.props.appLoading) ? 'page-loading' : 'page-loading page-loading--done';

    return (
      <ScreenReaderFocusElm elmId={UI_IDS.masthead} className="no-focus-ring">
        <div aria-atomic="true"
             aria-live="polite"
             aria-busy={isAppLoading(this.props.appLoading)}>
          <LoadingStatusContainer />
          <div className={clsName}>
            { this.props.children }
            <div className="text-center mtl">
              <Link to="/changelog">
                Change Log
              </Link> <br />
              <ScrollLink href="#" onClick={this.backToTop} to={UI_IDS.masthead} spy={true} smooth={true} duration={500}>Back to Top</ScrollLink>
            </div>
          </div>
        </div>
      </ScreenReaderFocusElm>
    );
  }
}