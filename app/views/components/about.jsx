'use strict';

import React from 'react';
import AboutActions from '../../actions/aboutActions';
import AboutStore from '../../stores/aboutStore';
import AppConsts from '../../consts/app';
import ScreenReaderFocusElm from './screenReaderFocusElm';

export default React.createClass({

  getInitialState() {

    return this.getStateFromStore();
  },

  getStateFromStore() {

    return {
      content: AboutStore.getContent()
    };
  },

  setStateFromStore() {

    this.setState({
      content: AboutStore.getContent()
    });
  },

  componentDidMount() {

    if (this.state.content === null) {

      AboutActions.LOAD();
      this.unsubscribe = AboutStore.listen(this.setStateFromStore);
    }
  },

  componentWillUnmount() {

    if (typeof this.unsubscribe === 'function') {

      this.unsubscribe();
    }
  },

  shouldComponentUpdate(nextProps, nextState) {

    return typeof nextState.content === 'string' && this.state.content !== nextState.content;
  },

  render() {

    const content = (this.state.content === null ) ? '<p>Loading...</p>' : this.state.content;
    return (
      <section className="container-fluid">
        <ScreenReaderFocusElm elmId={AppConsts.UIID.about}/>

        <div className="well h4 text-center" dangerouslySetInnerHTML={{__html: content}}></div>
      </section>
    );
  }
});