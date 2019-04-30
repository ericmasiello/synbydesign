import * as reducers from './reducers';
import * as actions from './actions';
import * as selectors from './selectors';

export default {
  ...reducers,
  ...actions,
  ...selectors,
};
