var Backbone = require('backbone');
var Book = require('../models/book');

var Books = Backbone.Collection.extend({
    model: Book
});

module.exports = Books;