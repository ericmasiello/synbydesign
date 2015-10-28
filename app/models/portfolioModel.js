'use strict';

var Backbone = require('backbone');
Backbone.$ = require('jquery');
var extractor = require('../util/extractImageFromContent');

var PortfolioModel = Backbone.Model.extend({
  urlRoot: './wp/wp-json/posts',
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

module.exports = PortfolioModel;