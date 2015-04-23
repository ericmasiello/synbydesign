/** @jsx React.DOM */
var React = require('react/addons');
var Comment = require('./views/comment');
var BookShelf = require('./views/bookShelf');
var PreDebug = require('./views/preDebug');
var Books = require('./collections/books');

var books = new Books([{
    title: 'Harry Potter'
}, {
    title: 'Scary Book'
}]);

console.log('ie8.4');

React.render(
    <div>
        <Comment author={'Eric Masiello'} children={'Hello world'}/>
        <h1>Authors</h1>
        <BookShelf books={books} />
        <PreDebug books={books} />
    </div>,
    document.getElementById('app'));

//var TestComponent = React.createClass({
//
//    render: function(){
//
//        return (
//            <div>Some demo for ie8</div>
//        );
//    }
//});
//
//React.render(<TestComponent />, document.getElementById('app'));
