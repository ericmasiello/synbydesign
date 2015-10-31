import Reflux from 'reflux';

export default Reflux.createActions({
  LOAD_ALL: {
    asyncResult: true //automatically defines completed and failed
  },
  LOAD_SINGLE: {
    asyncResult: true
  }
});