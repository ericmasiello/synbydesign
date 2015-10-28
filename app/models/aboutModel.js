var Backbone = require('backbone');
Backbone.$ = require('jquery');

var AboutModel = Backbone.Model.extend({
  urlRoot: './wp/wp-json/pages/about',
  defaults: {
    content: null
  }
});

module.exports = AboutModel;