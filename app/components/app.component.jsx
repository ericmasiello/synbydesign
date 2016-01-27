import React, { Component } from 'react';
import LoadingStatusContainer from '../containers/loading-status.container';
import isAppLoading from '../util/is-app-loading.util';
import { Link } from 'react-router';

/** Class representing the App */
export default class App extends Component {

  /**
   * Back to top method. Used to jump the user back to the top of the page.
   */
  backToTop(){
    //FIXME
    alert('fixme!');
  }

  /**
   * Render method used to generate the entire application tree. Ths is the parent
   * component to all other components for the site
   * @returns {XML}
   */
  render() {

    const clsName = isAppLoading(this.props.appLoading) ? 'page-loading' : 'page-loading page-loading--done';

    return (
      <div aria-atomic="true"
           aria-live="polite"
           aria-busy={isAppLoading(this.props.appLoading)} >
        <LoadingStatusContainer />
        <div className={clsName}>
          { this.props.children }
          <div className="text-center mtl">
            <Link to="/changelog">
              Change Log
            </Link> <br />
            <a href="#" onClick={this.backToTop}>Back to top</a>
          </div>
        </div>
      </div>
    );
  }
}