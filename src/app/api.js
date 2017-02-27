/* @flow */
import axios from 'axios';
import type { About } from '../../types';

const Api = {
  fetchAbout(): Promise<About> {
    return axios.get('/api/v1/about')
      .then(({ data }) => {
        const response: About = data;
        return response;
      });
  },
};

export default Api;
