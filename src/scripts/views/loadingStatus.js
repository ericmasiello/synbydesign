var React = require('react/addons');
var UIStore = require('../stores/uiStore');
var NProgress = require('nprogress');

var LoadingStatus = React.createClass({

  getInitialState: function(){

    return {
      loading: UIStore.isLoading()
    };
  },

  setStateFromStore: function(){

    this.setState({
      loading: UIStore.isLoading()
    });
  },

  componentDidMount: function(){

    this.unsubscribe = UIStore.listen(this.setStateFromStore.bind(this));
  },

  componentWillUnmount: function(){

    this.unsubscribe();
  },

  render: function(){

    if( this.state.loading === true ) {

      NProgress.start();

    } else {

      NProgress.done();
    }

    return (
      <div></div>
    );
  }
});

module.exports = LoadingStatus;

