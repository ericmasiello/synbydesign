var Backbone = require('backbone');
var React = require('react/addons');
var FluxBone = require('fluxbone');
var Book = require('./book');

//var Book = require('../models/book');

BookShelf = React.createClass({

    componentWillMount: function(){

        this._editBookModel = null;
    },

    mixins: [
        // will trigger this.forceUpdate() on `all` events of the `books` collection.
        FluxBone.CollectionMixin('books'),
        React.addons.PureRenderMixin
    ],
    saveBook: function(e){

        e.preventDefault();
        var titleNode = React.findDOMNode(this.refs.title);

        if(this._editBookModel !== null){

           this._editBookModel.set('title', titleNode.value);

        } else {

            this.props.books.add({
                title: titleNode.value
            });
        }

        titleNode.value = '';

        //revert back to default mode
        this._editBookModel = null;
    },

    removeBook: function(bookModel, e){

        //React.findDOMNode(this.refs.title).value = bookModel.attributes.title;

        this.props.books.remove(bookModel);
    },
    editBook: function(bookModel, e){

        this.mode = 'edit';
        React.findDOMNode(this.refs.title).value = bookModel.get('title');

        this._editBookModel = bookModel;

        //model.set('title', 'Updated ' + model.get('title'));

        //this.props.books.remove(bookModel);
    },
    render: function () {

        var self = this;

        var books = this.props.books.models.map(function(book){
            //return (<li onClick={self.addBook}>{book.attributes.author}</li>);

            return (<Book book={book} editFn={self.editBook.bind(self, book)} removeFn={self.removeBook.bind(self, book)} />);
        });

        return (
            <div>
                <form onSubmit={this.saveBook}>
                    <input type="text" ref="title" />
                </form>
                <ul>{books}</ul>
            </div>
        );
    }
});

module.exports = BookShelf;