import { LOAD_ABOUT_CONTENT } from './types';
import axios from 'axios';
import { API_URL, API_DOMAIN } from '../configuration/';

/**
 * @description generates an action for loading the about contentfrom the server. This
 * generates a promise using axios.get(). The promise will be resolved automatically
 * and dispatched via the ReduxPromise middleware
 * @returns {{type: LOAD_ABOUT_CONTENT, payload: *}}
 */
const loadAboutContent = () => {
  'use strict';
  const URI = `${API_DOMAIN}${API_URL}/pages/about`;
  const request = axios.get(URI);

  return {
    type: LOAD_ABOUT_CONTENT,
    payload: request
  };
};

export {loadAboutContent};