import fetch from 'isomorphic-unfetch';

export const initialState = [];

export const SET_PORTFOLIO_ITEMS = 'SET_PORTFOLIO_ITEMS';
export const SET_PORTFOLIO_ITEM = 'SET_PORTFOLIO_ITEM';

export const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PORTFOLIO_ITEMS:
      return action.payload;
    case SET_PORTFOLIO_ITEM:
      if (action.error) {
        return state;
      }
      if (state.length > 0) {
        return state.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      }
      return [action.payload];
    default:
      return state;
  }
};

export const setPortfolioItems = items => {
  return {
    type: SET_PORTFOLIO_ITEMS,
    payload: items,
  };
};

export const setPortfolioItem = item => {
  return {
    type: SET_PORTFOLIO_ITEM,
    payload: item,
  };
};

export const setPortfolioItemError = error => {
  return {
    type: SET_PORTFOLIO_ITEM,
    payload: error,
    error: true,
  };
};

export const fetchPortfolioData = async id => {
  const res = await fetch(
    `${process.env.API}/portfolio${id !== undefined ? `/${id}` : ''}`,
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  return data;
};

export const getPortfolioItemById = id => {
  return async dispatch => {
    const item = await fetchPortfolioData(id).catch(error => {
      dispatch(setPortfolioItemError(error));
    });
    if (item) {
      dispatch(setPortfolioItem(item));
    }
  };
};

export const getPortfolioItems = () => {
  return async dispatch => {
    const items = await fetchPortfolioData();
    dispatch(setPortfolioItems(items));
  };
};
