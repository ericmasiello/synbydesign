var React = require('react/addons');
var DocumentTitle = require('react-document-title');
var AppConsts = require('../consts/app');

var NotFound = React.createClass({
    render: function () {
        return (
          <DocumentTitle title={'404 Page Not Found - ' + AppConsts.TITLE}>
            <h2>Not found</h2>
          </DocumentTitle>
          );
    }
});

module.exports = NotFound;