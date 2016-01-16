import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestDataFromServer, receiveDataFromServer } from '../actions/appLoadingActionCreator';
import { bindActionCreators } from 'redux';

class Test extends Component {

  constructor(props){
    super(props);

    this.fetchData = this.fetchData.bind(this);

    this.fetchData();

    setTimeout(function(){
      this.props.receiveDataFromServer();
    }.bind(this), 1000);

  }

  fetchData(){
    this.props.requestDataFromServer();
  }

  render() {
    return (
      <div onClick={this.fetchData}>Test Loading some data</div>
    )
  }
}

function mapStateToProps(state){
  return {}
}

/*
 * bindActionCreators is what takes our action creator methods (e.g. selectBook())
 * and binds them to our redux store. This is what makes calls to the action creators
 * call all of our reducers
 */

/*
 Anything that is returned from mapDispatchToProps will end ups as props
 on the BookList container. in this case selectBook will be available as
 this.props.selectBook inside of our BookList container
 */
function mapDispatchToProps(dispatch){
  /*
   Whenever selectBook() is called, the result of selectBook() should be
   passed to all of our reducers
   dispatch is what calls into our reducers
   */
  return bindActionCreators({
    requestDataFromServer,
    receiveDataFromServer
  }, dispatch);
}

// connect is what what produces the 'container' -> mapping redux state to a component
// promote bookList from a component to a container
// it needs to know about this new dispatch method, selectBook. Makes it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Test);