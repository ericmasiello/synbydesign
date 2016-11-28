/* global window, document */
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Scroll from 'react-scroll';
import LoadingStatusContainer from '../containers/loading-status.container';
import isAppLoading from '../util/is-app-loading.util';
import { UI_IDS } from '../configuration';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';

const { Link: ScrollLink } = Scroll;

/**
 * Back to top method. Used to jump the user back to the top of the page.
 */
const backToTop = () => {
  document.getElementById(UI_IDS.appContents).focus();
};

/** Class representing the App */
const App = ({ appLoading, children }) => (
  <ScreenReaderFocusElm elmId={UI_IDS.appContents} className="no-focus-ring">
    <div
      aria-atomic="true"
      aria-live="polite"
      aria-busy={isAppLoading(appLoading)}
    >
      <LoadingStatusContainer />
      <div
        className={classnames({
          'page-loading': isAppLoading(appLoading),
          'page-loading page-loading--done': !isAppLoading(appLoading),
        })}
      >
        { children }
        <div className="text-center mtl">
          { !window.location.hash.substr(1).indexOf('changelog') > -1 ? (
            <div>
              <Link to="/changelog">
                Change Log
              </Link>
            </div>
          ) : (<div />) }
          <ScrollLink href="#" onClick={backToTop} to={UI_IDS.appContents} spy smooth duration={500}>Back to Top</ScrollLink>
        </div>
      </div>
    </div>
  </ScreenReaderFocusElm>
);

App.propTypes = {
  appLoading: PropTypes.shape({
    activeRequests: React.PropTypes.number.isRequired,
    loadedRequests: React.PropTypes.number.isRequired,
  }),
  children: PropTypes.node,
};

App.defaultPropTypes = {
  appLoading: {
    activeRequests: 0,
    loadedRequests: 0,
  },
};

export default App;
