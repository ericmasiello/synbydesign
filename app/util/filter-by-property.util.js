export default ( property ) => {
  'use strict';

  return (item) => {

    return (item[property] === true);
  };
};