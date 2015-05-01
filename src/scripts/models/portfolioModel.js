var Backbone = require('backbone');
var extractor = require('../util/extractImageFromContent');

var PortfolioModel = Backbone.Model.extend({
  url: './wp/wp-json/posts',
  defaults: {
    ID: null,
    title: '',
    content: '',
    fullSizeImage: ''
  },
  initialize: function(){

    this.on('add', function(){

      //Sets the full sized image path based off the content
      this.set('fullSizeImage', extractor(this.get('content')));
    });
  }
});

module.exports = PortfolioModel;