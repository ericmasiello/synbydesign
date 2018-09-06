import { Reducer } from 'redux';
import * as types from './types';

export const defaultPortfolioMeta: UIPortfolioMeta = {
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

const dedupePortfolioItems = (
  portfolioWithPossibleDuplicates: Portfolio[],
): Portfolio[] => {
  interface PortfolioMap {
    [x: string]: number;
  }

  const uniqueMap = portfolioWithPossibleDuplicates.reduce(
    (acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = 0;
      }
      return acc;
    },
    {} as PortfolioMap,
  );

  return portfolioWithPossibleDuplicates.reduce(
    (acc, item) => {
      if (acc.counts[item.id] === 0) {
        acc.items.push(item);
        acc.counts[item.id] = 1;
      }
      return acc;
    },
    {
      items: [] as Portfolio[],
      counts: uniqueMap,
    },
  ).items;
};

export const portfolioReducer: Reducer<Portfolio[]> = (state = [], action) => {
  if (action.type === types.FETCH_PORTFOLIO_ITEMS && !action.error) {
    return dedupePortfolioItems([...state, ...action.payload.data]);
  }

  if (action.type === types.FETCH_PORTFOLIO_DETAIL && !action.error) {
    const newItem = action.payload.data;
    if (!state.find(item => item.id === newItem.id)) {
      return [...state, action.payload.data];
    }
  }
  return state;
};
