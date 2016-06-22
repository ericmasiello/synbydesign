'use strict';
import { LOAD_PORTFOLIO_ALL, LOAD_PORTFOLIO_DETAIL } from './types';
import axios from 'axios';
import { API_URL, API_DOMAIN } from '../configuration/';

/**
 * @description generates an action for loading all portfolio items from the server. This
 * generates a promise using axios.get(). The promise will be resolved automatically
 * and dispatched via the ReduxPromise middleware
 * @param {string[]} list of tags to load from Wordpress (e.g. 'web', 'other', etc)
 * @returns {{type: LOAD_PORTFOLIO_ALL, payload: *}}
 */
const loadAllPortfolio = (categories) => {
  const URI = `${API_DOMAIN}${API_URL}/posts/?filter[category_name]=${categories.join(',')}`;
  const request = axios.get(URI);

  return {
    type: LOAD_PORTFOLIO_ALL,
    payload: request
  };
};

/**
 * @description generates an action for loading a single portfolio item from the server. This
 * generates a promise using axios.get(). The promise will be resolved automatically
 * and dispatched via the ReduxPromise middleware
 * @param {number} id of portfolio item
 * @returns {{type: LOAD_PORTFOLIO_DETAIL, payload: *}}
 */
const loadSelectedPortfolio = (id) => {  
  const URI = `${API_DOMAIN}${API_URL}/posts/${id}`;
  const request = axios.get(URI);

  return {
    type: LOAD_PORTFOLIO_DETAIL,
    payload: request
  };
};

export {loadAllPortfolio, loadSelectedPortfolio};
