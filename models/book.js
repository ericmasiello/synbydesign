var Backbone = require('backbone');

var Book = Backbone.Model.extend({
    defaults: {
        'title': 'No title',
        'pages': 100,
        'type': 'fiction'
    }
});

module.exports = Book;