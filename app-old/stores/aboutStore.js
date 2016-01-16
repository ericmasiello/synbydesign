'use strict';

import Reflux from 'reflux';
import AboutActions from '../actions/aboutActions';
import AboutModel from '../models/aboutModel';
import ajaxActionDecorator from '../util/ajaxActionDecorator';

let aboutContent = new AboutModel();
ajaxActionDecorator(aboutContent, AboutActions.LOAD);

const EVENTS = {
  LOADED: 'LOADED'
};

export default Reflux.createStore({

  init() {

    this.listenToMany(AboutActions);
  },

  onLOADCompleted() {

    this.trigger(EVENTS.LOADED);
  },

  onLOAD() {

    aboutContent.fetch();
  },

  getContent() {

    return aboutContent.get('content');
  }
});