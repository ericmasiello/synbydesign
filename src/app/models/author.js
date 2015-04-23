var Backbone = require('backbone');

var Author = Backbone.Model.extend({
    defaults: {
        name: 'Eric Masiello',
        gender: 'M'
    }
});

module.exports = Author;

