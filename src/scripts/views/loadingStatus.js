var React = require('react/addons');
var UIStore = require('../stores/uiStore');

var LoadingStatus = React.createClass({

  componentDidMount: function(){

    var self = this;

    this.unsubscribe = UIStore.listen(function(){

      self.setState({
        loading: UIStore.isLoading()
      });
    });
  },

  componentWillUnmount: function(){

    this.unsubscribe();
  },

  getInitialState: function(){

    return { loading: false }
  },

  render: function(){

    var loadingMessage = this.state.loading ? 'Loading...' : 'All loaded.';

    return (
      <div>{loadingMessage}</div>
    );
  }
});

module.exports = LoadingStatus;

