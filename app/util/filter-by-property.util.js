export default ( property ) => {

  return (item) => {

    return (item[property] === true);
  };
}