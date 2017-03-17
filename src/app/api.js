/* @flow */
import axios from 'axios';
import type {
  Syn$Api,
  Syn$About,
  Syn$Portfolio,
} from '../../types';

const Api: Syn$Api = {
  fetchAbout() {
    return axios.get('/api/v1/about')
      .then(({ data }) => {
        const response: Syn$About = data;
        return response;
      });
  },
  fetchPortfolio() {
    return axios.get('/api/v1/portfolio')
      .then(({ data }) => {
        const response: Syn$Portfolio[] = data;
        return response;
      });
  },
  fetchPortfolioById(id: string) {
    return axios.get(`/api/v1/portfolio/${id}`)
      .then(({ data }) => {
        const response: Syn$Portfolio = data;
        return response;
      });
  },
};

export default Api;
