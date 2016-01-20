import React, { Component } from 'react';
import LoadingStatusContainer from '../containers/loading-status.container';
import isAppLoading from '../util/is-app-loading.util';

export default class App extends Component {

  backToTop(){
    //FIXME
    console.log('back to top');
  }

  render() {

    return (
      <div aria-atomic="true" aria-live="polite" aria-busy={isAppLoading(this.props.appLoading)} >
        <LoadingStatusContainer />
        <div>
          { React.cloneElement(this.props.children) }
        </div>
        <div className="text-center mtl">
          <a href="#" onClick={this.backToTop}>Back to top</a>
        </div>
      </div>
    );
  }
}