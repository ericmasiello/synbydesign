'use strict';
export default (appLoading) => {
  return (appLoading.activeRequests > appLoading.loadedRequests);
};
