// @flow
import req from 'request';
import Promise from 'bluebird';

const request = {
  fetch: Promise.promisify(req),
};

export default request;
