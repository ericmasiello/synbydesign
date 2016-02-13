/**
 * Filter By Property Util
 * @param property
 * @returns {Function}
 */
export default ( property ) => {
  'use strict';

  return (item) => {

    return (item[property] === true);
  };
};