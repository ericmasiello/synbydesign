/* @flow */
import type { Syn$RootStateReducer } from '../../types';
import {
  portfolioReducer,
  selectedPortfolioIdReducer,
} from '../app/Portfolio/reducers';
import aboutReducer from '../app/About/reducers';
import loadingCountReducer from '../app/Loading/reducers';

const rootReducer: Syn$RootStateReducer = {
  selectedPortfolioId: selectedPortfolioIdReducer,
  portfolio: portfolioReducer,
  about: aboutReducer,
  loadingCount: loadingCountReducer,
};

export default rootReducer;
