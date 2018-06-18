import { Reducer } from 'redux';
import uniqBy from 'lodash-es/uniqBy';
import * as types from './types';

const defaultPortfolioMeta: UIPortfolioMeta = {
  currentPageNumber: 0,
  pageSize: 0,
  totalPages: 0,
  filterCategories: '',
  filterTags: '',
  filterSearchTerm: '',
};

export const portfolioMetaReducer: Reducer<UIPortfolioMeta> = (
  state = defaultPortfolioMeta,
  action,
) => {
  if (action.type === types.FETCH_PORTFOLIO_ITEMS && !action.error) {
    const meta: UIPortfolioMeta = {
      currentPageNumber: parseInt(action.meta['_currentpagenumber'], 10),
      pageSize: parseInt(action.meta['_pagesize'], 10),
      totalPages: parseInt(action.meta['_totalpages'], 10),
      filterCategories: action.meta['_filtercategories'] || '',
      filterTags: action.meta['_filtertags'] || '',
      filterSearchTerm: action.meta['_filtersearchterm'] || '',
    };

    return meta;
  }

  return state;
};

export const portfolioReducer: Reducer<Portfolio[]> = (state = [], action) => {
  if (action.type === types.FETCH_PORTFOLIO_ITEMS && !action.error) {
    return uniqBy([...state, ...action.payload.data], 'id');
  }

  if (action.type === types.FETCH_PORTFOLIO_DETAIL && !action.error) {
    const newItem = action.payload.data;
    if (!state.find(item => item.id === newItem.id)) {
      return [...state, action.payload.data];
    }
  }
  return state;
};
