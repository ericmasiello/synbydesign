var React = require('react/addons');
var FluxBone = require('fluxbone');

var PreDebug = React.createClass({
    mixins: [
        // will trigger this.forceUpdate() on `all` events of the `books` collection.
        FluxBone.CollectionMixin('books'),
        React.addons.PureRenderMixin
    ],
    render: function () {

        return (
            <pre>
                {JSON.stringify(this.props.books.toJSON())}
            </pre>
        );
    }
});

module.exports = PreDebug;