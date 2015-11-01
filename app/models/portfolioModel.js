'use strict';

import Backbone from 'backbone';
Backbone.$ = require('jquery');
import extractor from '../util/extractImageFromContent';
import {SERVER} from '../consts/app';

export default Backbone.Model.extend({
  urlRoot: `${SERVER}/posts`,
  defaults: {
    ID: null,
    title: '',
    content: '',
    fullSizeImage: '',
    altText: '',
    maxWidth: '',
    maxHeight: ''
  },
  initialize: function(){

    this.on('add sync', function(){

      //Sets the full sized image path based off the content
      var content = this.get('content');
      this.set('fullSizeImage', extractor.getSource(content));
      this.set('altText', extractor.getAltText(content));
      this.set('maxWidth', extractor.getWidth(content));
      this.set('maxHeight', extractor.getHeight(content));
    });
  }
});