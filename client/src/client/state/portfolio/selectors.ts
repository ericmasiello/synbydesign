import { createSelector } from 'reselect';

const portfolioItemsSelector = (state: AppState) => state.portfolioItems;
const likesSelector = (state: AppState) => state.likes;

export const likedPortfolioItemsSelector = createSelector(
  portfolioItemsSelector,
  likesSelector,
  (portfolioItems, likes): LikedPortfolio[] => {
    return portfolioItems.map(item => ({
      ...item,
      liked: likes.indexOf(item.id) > -1,
    }));
  },
);
