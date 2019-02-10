import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { AxiosInstance } from 'axios';
import * as LogRocket from 'logrocket';
import reducers from '../client/state';

const defaultInitialState = {
  resume: {} as Resume,
  portfolioItems: [],
  ui: {
    portfolio: {
      currentPageNumber: 0,
      pageSize: 0,
      totalPages: 0,
      filterCategories: '',
      filterTags: '',
      filterSearchTerm: '',
    },
  },
  likes: [],
};

export default (
  axiosInstance: AxiosInstance,
  initialState: AppState = defaultInitialState,
  composeEnhancers = compose,
) => {
  const applyComposeEnhancers =
    (typeof window !== 'undefined' &&
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    composeEnhancers;

  const store = createStore(
    reducers,
    initialState,
    applyComposeEnhancers(
      applyMiddleware(
        thunk.withExtraArgument(axiosInstance),
        LogRocket.reduxMiddleware(),
      ),
    ),
  );

  return store;
};
