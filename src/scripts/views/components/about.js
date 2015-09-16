'use strict';

var React = require('react');
var AboutActions = require('../../actions/aboutActions');
var AboutStore = require('../../stores/aboutStore');
var AppConsts = require('../../consts/app');
var ScreenReaderFocusElm = require('./screenReaderFocusElm');

var About = React.createClass({

    getInitialState: function(){

        return this.getStateFromStore();
    },

    getStateFromStore: function(){

        return {
            content: AboutStore.getContent()
        };
    },

    setStateFromStore: function(){

        this.setState({
            content: AboutStore.getContent()
        });
    },

    componentDidMount: function(){

        if( this.state.content === null ){

            AboutActions.LOAD();
            this.unsubscribe = AboutStore.listen(this.setStateFromStore);
        }
    },

    componentWillUnmount: function(){

        if(typeof this.unsubscribe === 'function' ){

            this.unsubscribe();
        }
    },

    shouldComponentUpdate: function(nextProps, nextState){

        return typeof nextState.content === "string" && this.state.content !== nextState.content;
    },

    render: function(){

        var content = (this.state.content === null ) ? '<p>Loading...</p>' : this.state.content;
        return (
            <section className="container-fluid">
                <ScreenReaderFocusElm elmId={AppConsts.UIID.about} />
                <div className="well h4 text-center" dangerouslySetInnerHTML={{__html: content}}></div>
            </section>
        );
    }
});

module.exports = About;