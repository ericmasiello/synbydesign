/* @flow */
import axios from 'axios';
import type { About, Portfolio } from '../../types';

const Api = {
  fetchAbout(): Promise<About> {
    return axios.get('/api/v1/about')
      .then(({ data }) => {
        const response: About = data;
        return response;
      });
  },
  fetchPortfolio(): Promise<Portfolio> {
    return axios.get('/api/v1/portfolio')
      .then(({ data }) => {
        const response: Portfolio = data;
        return response;
      });
  },
};

export default Api;
