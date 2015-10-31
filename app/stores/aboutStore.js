'use strict';

import Reflux from 'reflux';
import AboutActions from '../actions/aboutActions';
import AboutModel from '../models/aboutModel';
import ajaxActionDecorator from '../util/ajaxActionDecorator';

var aboutContent = new AboutModel();
ajaxActionDecorator(aboutContent, AboutActions.LOAD);

var EVENTS = {
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