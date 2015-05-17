var React = require('react');
var About = require('./about');
var PortfolioList = require('./portfolioList');
var Navigation = require('./navigation');

var Home = React.createClass({

    render: function(){

        return (
            <div>
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