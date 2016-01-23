export default ({ activeRequests, loadedRequests }) => {
  'use strict';
  return ( activeRequests > loadedRequests );
};