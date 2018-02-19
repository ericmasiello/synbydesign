import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { AxiosInstance } from 'axios';
import reducers from '../client/reducers';

const defaultInitialState = {
  resume: {} as Resume,
  portfolioItems: [],
};

export default (
  axiosInstance: AxiosInstance,
  initialState: AppState = defaultInitialState,
  composeEnhancers = compose,
) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance))),
  );

  return store;
};
