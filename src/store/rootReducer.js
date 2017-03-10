/* @flow */
import type { RootStateReducer } from '../../types';
import {
  portfolioReducer,
  selectedPortfolioIdReducer,
} from '../app/Portfolio/reducers';
import aboutReducer from '../app/About/reducers';
import loadingCountReducer from '../app/Loading/reducers';

const rootReducer: RootStateReducer = {
  selectedPortfolioId: selectedPortfolioIdReducer,
  portfolio: portfolioReducer,
  about: aboutReducer,
  loadingCount: loadingCountReducer,
};

export default rootReducer;
