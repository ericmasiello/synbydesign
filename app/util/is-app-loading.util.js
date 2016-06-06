export default (appLoading) => {
  'use strict';
  return (appLoading.get('activeRequests') > appLoading.get('loadedRequests'));
};
