import { LOAD_PORTFOLIO_ALL, LOAD_PORTFOLIO_DETAIL } from './types';
import axios from 'axios';
import { API_URL } from '../configuration/';

export function loadAllPortfolio(categories){

  const request = axios.get(`${API_URL}/posts/?filter[category_name]=${categories.join(',')}`);

  return {
    type: LOAD_PORTFOLIO_ALL,
    payload: request
  }
}