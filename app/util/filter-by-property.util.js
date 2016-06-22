'use strict';
/**
 * Filter By Property Util
 * @param property
 * @returns {Function}
 */
export default ( property ) => {  

  return (item) => {

    return (item[property] === true);
  };
};
