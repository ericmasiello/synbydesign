import { LOAD_PORTFOLIO_ALL, LOAD_PORTFOLIO_DETAIL } from './types';
import axios from 'axios';
import { API_URL } from '../configuration/';

const loadAllPortfolio = (categories) => {

  const URI = `${API_URL}/posts/?filter[category_name]=${categories.join(',')}`;
  const request = axios.get(URI);

  return {
    type: LOAD_PORTFOLIO_ALL,
    payload: request
  }
};

const loadSelectedPortfolio = (id) => {

  const URI = `${API_URL}/posts/${id}`;
  const request = axios.get(URI);

  return {
    type: LOAD_PORTFOLIO_DETAIL,
    payload: request
  }
};

export {loadAllPortfolio, loadSelectedPortfolio};