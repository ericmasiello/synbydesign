import fetch from 'isomorphic-unfetch';

export const initialState = [];

export const SET_PORTFOLIO_ITEMS = 'SET_PORTFOLIO_ITEMS';

export const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PORTFOLIO_ITEMS:
            return action.payload;
        default:
            return state;
    }
};

export const setPortfolioItems = (items) => {
    return {
        type: SET_PORTFOLIO_ITEMS,
        payload: items
    };
}

export const fetchPortfolioData = async () => {
    const res = await fetch(`${process.env.API}/portfolio`);
    // TODO: handle errors with .catch()
    const data = await res.json();
    return data;
}

export const fetchPortfolioItems = () => {
    return async (dispatch) => {
        const items = await fetchPortfolioData();
        dispatch(setPortfolioItems(items));
    };
}