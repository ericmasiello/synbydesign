export default ({ activeRequests, loadedRequests }) => {
  return ( activeRequests > loadedRequests );
}