import { LOAD_PORTFOLIO_ALL, LOAD_PORTFOLIO_DETAIL } from './types';
import axios from 'axios';
import { API_URL } from '../configuration/';

export function loadAllPortfolio(){

  const request = axios.get(`${API_URL}/posts/?filter[category_name]=web,other,logos,illustration,flyers,business-cards`);

  return {
    type: LOAD_PORTFOLIO_ALL,
    payload: request
  }
}