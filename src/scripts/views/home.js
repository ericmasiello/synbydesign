var React = require('react');
var About = require('./about');
var PortfolioList = require('./portfolioList');

var Home = React.createClass({

    render: function(){

        return (
            <div>
                <About content={'<p>Hello world</p>'}/>
                <PortfolioList />
            </div>
        );
    }
});

module.exports = Home;