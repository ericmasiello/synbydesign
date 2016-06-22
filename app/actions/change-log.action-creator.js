import { LOAD_CHANGE_LOG } from './types';
import axios from 'axios';
import { API_URL, WP_SLUGS, API_DOMAIN } from '../configuration/';

/**
 * @description generates an action for loading the about contentfrom the server. This
 * generates a promise using axios.get(). The promise will be resolved automatically
 * and dispatched via the ReduxPromise middleware
 * @returns {{type: LOAD_CHANGE_LOG, payload: *}}
 */
const loadChangeLog = () => {
  'use strict';
  const URI = `${API_DOMAIN}${API_URL}/posts?filter[category_name]=${WP_SLUGS.CHANGE_LOG}`;
  const request = axios.get(URI);

  return {
    type: LOAD_CHANGE_LOG,
    payload: request
  };
};

export {loadChangeLog};
