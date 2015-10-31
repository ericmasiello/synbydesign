import Backbone from 'backbone';
Backbone.$ = require('jquery');

export default Backbone.Model.extend({
  urlRoot: '../wp/wp-json/pages/about',
  defaults: {
    content: null
  }
});