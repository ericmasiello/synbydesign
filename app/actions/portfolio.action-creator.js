import { LOAD_PORTFOLIO_ALL, LOAD_PORTFOLIO_DETAIL } from './types';
import axios from 'axios';
import { API_URL } from '../configuration/';

export function loadAllPortfolio(categories){

  const URI = `${API_URL}/posts/?filter[category_name]=${categories.join(',')}`;
  console.log('URI', URI);
  const request = axios.get(URI);

  return {
    type: LOAD_PORTFOLIO_ALL,
    payload: request
  }
}