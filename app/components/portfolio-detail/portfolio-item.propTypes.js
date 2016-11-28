import { PropTypes } from 'react';

export default {
  portfolioItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fullSizeImage: PropTypes.shape({
      path: PropTypes.string.isRequired,
      altText: PropTypes.string,
    }),
    skills: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
