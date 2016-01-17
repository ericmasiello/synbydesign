export default ( types ) => {

  return function(item){

    if( !item.terms ){
      return false
    }

    const filteredList = item.terms.category.filter((category) => {
      return ( types.indexOf(category.slug) > -1 );
    });

    return (filteredList.length > 0)
  };
}