var React = require('react/addons');
var Backbone = require('backbone');
var FluxBone = require('fluxbone');

Book = React.createClass({
    mixins: [
        // triggers `this.forceUpdate()` whenever the `book`'s "change" event is fired.
        FluxBone.ModelMixin('book', 'change'),
        React.addons.PureRenderMixin
    ],
    handleTitleChange: function (model, options) {
        alert('what do you mean, the title changed?');
    },

    //changeTitle: function(model){
    //
    //    model.set('title', 'Updated ' + model.get('title'));
    //},
    render: function(){
        //return React.DOM.li({},
        //    "This book is called " + this.props.book.get('title')
        //)

        return (
          <li>The book is called {this.props.book.get('title')}{' '}
              <input type="button" onClick={this.props.editFn} value="Edit" />{' '}
              <input type="button" onClick={this.props.removeFn} value="Remove" /></li>
        );
    }
});

module.exports = Book;


