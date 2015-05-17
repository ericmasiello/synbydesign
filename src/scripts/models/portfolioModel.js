var Backbone = require('backbone');
Backbone.$ = require('jquery');
var extractor = require('../util/extractImageFromContent');

var PortfolioModel = Backbone.Model.extend({
  urlRoot: './wp/wp-json/posts',
  defaults: {
    ID: null,
    title: '',
    content: '',
    fullSizeImage: ''
  },
  initialize: function(){

    this.on('add sync', function(){

      //Sets the full sized image path based off the content
      this.set('fullSizeImage', extractor(this.get('content')));
    });
  }
});

module.exports = PortfolioModel;