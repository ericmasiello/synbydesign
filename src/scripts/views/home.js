'use strict';

var React = require('react');
var DocumentTitle = require('react-document-title');
var About = require('./components/about');
var PortfolioList = require('./components/portfolioList');
var Navigation = require('./components/navigation');
var AppConsts = require('../consts/app');

var Home = React.createClass({

    render: function(){

        return (
            <div>
                <DocumentTitle title={AppConsts.TITLE} />
                <Navigation view={'home'} />
                <div className="container-fluid">
                    <About />
                    <PortfolioList />
                </div>
            </div>
        );
    }
});

module.exports = Home;