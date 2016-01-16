import Backbone from 'backbone';
Backbone.$ = require('jquery');
import {SERVER} from '../consts/app';

export default Backbone.Model.extend({
  urlRoot: `${SERVER}/pages/about`,
  defaults: {
    content: null
  }
});