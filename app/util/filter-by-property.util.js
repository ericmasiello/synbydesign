/**
 * Filter By Property Util
 * @param property
 * @returns {Function}
 */
const filterByPropertyUtil = property => item => (item[property] === true);

export default filterByPropertyUtil;
